/**
 * Tests for POST /api/contact
 *
 * Verifies server-side validation of the inquiry type (subject) field,
 * using INQUIRY_TYPE_VALUES as the single source of truth.
 */

import { describe, it, expect, beforeEach, vi } from "vitest";
import request from "supertest";
import app from "../app";
import { INQUIRY_TYPE_VALUES } from "@workspace/api-zod";

// Prevent real email delivery during tests
vi.mock("nodemailer", () => ({
  default: {
    createTransport: () => ({
      sendMail: vi.fn().mockResolvedValue({ messageId: "test-id" }),
    }),
  },
}));

// Provide the required env var so the handler doesn't short-circuit with 500
beforeEach(() => {
  process.env["GMAIL_APP_PASSWORD"] = "test-password";
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
