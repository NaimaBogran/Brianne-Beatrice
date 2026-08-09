import { Router, type IRouter } from "express";
import nodemailer from "nodemailer";
import { logger } from "../lib/logger";

const router: IRouter = Router();

const CONTACT_EMAIL = "bribeats@gmail.com";

// Simple in-memory rate limiter: max 5 submissions per 10 minutes per IP.
// Uses the rightmost hop from X-Forwarded-For to resist header spoofing.
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;

function getRateLimitKey(req: import("express").Request): string {
  const forwarded = req.headers["x-forwarded-for"];
  if (typeof forwarded === "string" && forwarded.trim()) {
    const hops = forwarded.split(",").map((h) => h.trim());
    const last = hops[hops.length - 1];
    if (last) return last;
  }
  return req.socket.remoteAddress ?? "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return true;
  }

  entry.count++;
  return false;
}

router.post("/contact", async (req, res) => {
  const ip = getRateLimitKey(req);

  if (isRateLimited(ip)) {
    res.status(429).json({ error: "Too many requests. Please try again later." });
    return;
  }

  const { name, email, subject, otherDetail, message, website } = req.body as {
    name?: string;
    email?: string;
    subject?: string;
    otherDetail?: string;
    message?: string;
    website?: string; // honeypot — bots fill this, humans don't
  };

  // Honeypot spam check — silently succeed so bots don't know they were caught
  if (website) {
    res.json({ success: true });
    return;
  }

  // Input validation
  if (!name?.trim()) {
    res.status(400).json({ error: "Name is required." });
    return;
  }
  if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    res.status(400).json({ error: "A valid email address is required." });
    return;
  }
  if (!message?.trim()) {
    res.status(400).json({ error: "Message is required." });
    return;
  }

  const appPassword = process.env["GMAIL_APP_PASSWORD"];
  if (!appPassword) {
    logger.error("GMAIL_APP_PASSWORD is not configured");
    res.status(500).json({
      error: `Email delivery is not configured. Please contact Brianne directly at ${CONTACT_EMAIL}.`,
    });
    return;
  }

  const safeName = name.trim().slice(0, 200);
  const safeEmail = email.trim().slice(0, 200);
  const safeInquiryType = (subject?.trim() ?? "").slice(0, 300) || "General Inquiry";
  const safeOtherDetail = (otherDetail?.trim() ?? "").slice(0, 200);
  const safeMessage = message.trim().slice(0, 5000);

  // Build the display label: for "Other", append the clarification if provided
  const inquiryLabel =
    safeInquiryType === "Other" && safeOtherDetail
      ? `Other — ${safeOtherDetail}`
      : safeInquiryType;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: CONTACT_EMAIL,
        pass: appPassword,
      },
    });

    const info = await transporter.sendMail({
      from: `"Contact Form" <${CONTACT_EMAIL}>`,
      to: CONTACT_EMAIL,
      replyTo: `"${safeName}" <${safeEmail}>`,
      subject: `[${inquiryLabel}] ${safeName}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
          <h2 style="font-size: 22px; border-bottom: 1px solid #e0e0e0; padding-bottom: 12px; margin-bottom: 20px;">
            New Message from Your Website
          </h2>
          <div style="background: #1a1a1a; color: #ffffff; display: inline-block; padding: 6px 14px; border-radius: 2px; font-size: 13px; font-weight: bold; letter-spacing: 0.05em; text-transform: uppercase; margin-bottom: 20px;">
            ${escapeHtml(inquiryLabel)}
          </div>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 120px; vertical-align: top;">Name</td>
              <td style="padding: 8px 0;">${escapeHtml(safeName)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Email</td>
              <td style="padding: 8px 0;">
                <a href="mailto:${escapeHtml(safeEmail)}" style="color: #1a1a1a;">${escapeHtml(safeEmail)}</a>
              </td>
            </tr>
          </table>
          <div style="background: #f7f7f7; border-left: 3px solid #1a1a1a; padding: 16px 20px; border-radius: 2px;">
            <p style="margin: 0; white-space: pre-wrap; line-height: 1.7;">${escapeHtml(safeMessage)}</p>
          </div>
          <p style="margin-top: 24px; color: #888; font-size: 13px;">
            Sent via your personal branding website contact form. Reply directly to respond to ${escapeHtml(safeName)}.
          </p>
        </div>
      `,
      text: `New message from your website\n\nInquiry Type: ${inquiryLabel}\nName: ${safeName}\nEmail: ${safeEmail}\n\nMessage:\n${safeMessage}\n\n--\nSent via your personal branding website. Reply to respond to ${safeName}.`,
    });

    logger.info({ messageId: info.messageId }, "Contact email sent successfully");
    res.json({ success: true });
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    logger.error({ error: errorMessage }, "Failed to send contact email");
    res.status(500).json({
      error: `Failed to send your message. Please try emailing directly at ${CONTACT_EMAIL}.`,
    });
  }
});

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

export default router;
