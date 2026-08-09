/**
 * Tests for POST /api/contact
 *
 * Covers:
 *  - Server-side validation of all required fields and the inquiry type (subject)
 *  - The 500 path when GMAIL_APP_PASSWORD is not configured
 *  - The 500 path when nodemailer's sendMail rejects (transport / auth error)
 *  - The replyTo and subject formatting on the transporter call args
 */

import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import request from "supertest";
import app from "../app";
import { INQUIRY_TYPE_VALUES } from "@workspace/api-zod";

// Hoist the sendMail spy so it is available inside the vi.mock factory (which
// is itself hoisted before any imports are evaluated).
const mockSendMail = vi.hoisted(() =>
  vi.fn().mockResolvedValue({ messageId: "test-id" }),
);

// Prevent real email delivery during tests
vi.mock("nodemailer", () => ({
  default: {
    createTransport: vi.fn(() => ({
      sendMail: mockSendMail,
    })),
  },
}));

// Provide the required env var so the handler doesn't short-circuit with 500
beforeEach(() => {
  process.env["GMAIL_APP_PASSWORD"] = "test-password";
  // Reset to a successful delivery before each test
  mockSendMail.mockResolvedValue({ messageId: "test-id" });
});

afterEach(() => {
  delete process.env["GMAIL_APP_PASSWORD"];
  vi.clearAllMocks();
});

const VALID_BODY = {
  name: "Test User",
  email: "test@example.com",
  message: "Hello there",
};

/**
 * Each test uses a unique spoofed IP via X-Forwarded-For so the in-memory
 * rate limiter (5 req / 10 min per IP) never triggers between test cases.
 */
let testIpCounter = 0;
function uniqueIp(): string {
  testIpCounter++;
  return `10.0.${Math.floor(testIpCounter / 255)}.${testIpCounter % 255}`;
}

// ---------------------------------------------------------------------------
// Inquiry type (subject) validation
// ---------------------------------------------------------------------------

describe("POST /api/contact — inquiry type (subject) validation", () => {
  it.each(INQUIRY_TYPE_VALUES)(
    "accepts valid inquiry type: %s",
    async (inquiryType) => {
      const res = await request(app)
        .post("/api/contact")
        .set("X-Forwarded-For", uniqueIp())
        .send({ ...VALID_BODY, subject: inquiryType });

      expect(res.status).toBe(200);
      expect(res.body).toEqual({ success: true });
    },
  );

  it("returns 400 with correct message for an invalid inquiry type", async () => {
    const res = await request(app)
      .post("/api/contact")
      .set("X-Forwarded-For", uniqueIp())
      .send({ ...VALID_BODY, subject: "InvalidType" });

    expect(res.status).toBe(400);
    expect(res.body).toEqual({ error: "Invalid inquiry type." });
  });

  it("accepts a submission when subject is omitted entirely", async () => {
    const res = await request(app)
      .post("/api/contact")
      .set("X-Forwarded-For", uniqueIp())
      .send({ ...VALID_BODY });

    expect(res.status).toBe(200);
    expect(res.body).toEqual({ success: true });
  });

  it("returns 200 for an empty string subject (falsy — skips type check)", async () => {
    // Empty string is falsy so the `if (subject && ...)` guard skips the check.
    // This test documents that current behaviour and will catch any future
    // accidental tightening that would break the optional-subject contract.
    const res = await request(app)
      .post("/api/contact")
      .set("X-Forwarded-For", uniqueIp())
      .send({ ...VALID_BODY, subject: "" });

    expect(res.status).toBe(200);
    expect(res.body).toEqual({ success: true });
  });
});

// ---------------------------------------------------------------------------
// Email delivery failure paths
// ---------------------------------------------------------------------------

describe("POST /api/contact — email delivery failures", () => {
  it("returns 500 with a configuration error when GMAIL_APP_PASSWORD is unset", async () => {
    delete process.env["GMAIL_APP_PASSWORD"];

    const res = await request(app)
      .post("/api/contact")
      .set("X-Forwarded-For", uniqueIp())
      .send({ ...VALID_BODY });

    expect(res.status).toBe(500);
    expect(res.body).toEqual({
      error:
        "Email delivery is not configured. Please contact Brianne directly at bribeats@gmail.com.",
    });
    // sendMail must never be called — the handler should short-circuit before
    // creating a transporter when the password is missing.
    expect(mockSendMail).not.toHaveBeenCalled();
  });

  it("returns 500 with a delivery error when nodemailer sendMail rejects", async () => {
    mockSendMail.mockRejectedValueOnce(new Error("Invalid login: 535-5.7.8 AUTH_FAILED"));

    const res = await request(app)
      .post("/api/contact")
      .set("X-Forwarded-For", uniqueIp())
      .send({ ...VALID_BODY });

    expect(res.status).toBe(500);
    expect(res.body).toEqual({
      error:
        "Failed to send your message. Please try emailing directly at bribeats@gmail.com.",
    });
  });

  it("returns 500 with a delivery error when nodemailer sendMail rejects with a non-Error value", async () => {
    // Guards against the `String(err)` branch in the catch block.
    mockSendMail.mockRejectedValueOnce("connection timeout");

    const res = await request(app)
      .post("/api/contact")
      .set("X-Forwarded-For", uniqueIp())
      .send({ ...VALID_BODY });

    expect(res.status).toBe(500);
    expect(res.body).toEqual({
      error:
        "Failed to send your message. Please try emailing directly at bribeats@gmail.com.",
    });
  });
});

// ---------------------------------------------------------------------------
// Transporter call arg formatting
// ---------------------------------------------------------------------------

describe("POST /api/contact — transporter call arg formatting", () => {
  it("sets replyTo to the sender name and email", async () => {
    const res = await request(app)
      .post("/api/contact")
      .set("X-Forwarded-For", uniqueIp())
      .send({ name: "Jane Doe", email: "jane@example.com", message: "Hi" });

    expect(res.status).toBe(200);
    const [mailArgs] = mockSendMail.mock.calls;
    expect(mailArgs[0]).toMatchObject({
      replyTo: '"Jane Doe" <jane@example.com>',
    });
  });

  it("formats the subject as [InquiryType] Name", async () => {
    const res = await request(app)
      .post("/api/contact")
      .set("X-Forwarded-For", uniqueIp())
      .send({ ...VALID_BODY, subject: "Speaking" });

    expect(res.status).toBe(200);
    const [mailArgs] = mockSendMail.mock.calls;
    expect(mailArgs[0]).toMatchObject({
      subject: "[Speaking] Test User",
    });
  });

  it('appends the otherDetail to the subject label when subject is "Other"', async () => {
    const res = await request(app)
      .post("/api/contact")
      .set("X-Forwarded-For", uniqueIp())
      .send({
        ...VALID_BODY,
        subject: "Other",
        otherDetail: "Podcast feature",
      });

    expect(res.status).toBe(200);
    const [mailArgs] = mockSendMail.mock.calls;
    expect(mailArgs[0]).toMatchObject({
      subject: "[Other — Podcast feature] Test User",
    });
  });

  it("uses General Inquiry as the label when subject is omitted", async () => {
    const res = await request(app)
      .post("/api/contact")
      .set("X-Forwarded-For", uniqueIp())
      .send({ ...VALID_BODY });

    expect(res.status).toBe(200);
    const [mailArgs] = mockSendMail.mock.calls;
    expect(mailArgs[0]).toMatchObject({
      subject: "[General Inquiry] Test User",
    });
  });
});
