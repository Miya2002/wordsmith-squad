
import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

// Wordsmith Squad - secure email API
// Runs on Vercel, not in the static Hostinger frontend.

const ALLOWED_ORIGINS = new Set([
  "https://wordsmithsquad.com",
  "https://www.wordsmithsquad.com",
  "http://localhost:5173",
]);

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_BODY_LENGTH = 12000;

type Inquiry = {
  name: string;
  email: string;
  phone: string;
  service: string;
  genre: string;
  budget: string;
  description: string;
};

function clean(value: unknown, limit = 1000): string {
  return typeof value === "string"
    ? value.trim().slice(0, limit)
    : "";
}

function getStringFields(body: Record<string, unknown>): Inquiry {
  return {
    name: clean(body.name, 120),
    email: clean(body.email, 254),
    phone: clean(body.phone, 40),
    service: clean(body.service, 120),
    genre: clean(body.genre, 120),
    budget: clean(body.budget, 100),
    description: clean(body.description, 6000),
  };
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  const origin = req.headers.origin;

  // Allow requests from your website and local development.
  if (origin && ALLOWED_ORIGINS.has(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Vary", "Origin");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "POST, OPTIONS"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type"
    );
  }

  res.setHeader("Cache-Control", "no-store");
  res.setHeader("X-Content-Type-Options", "nosniff");

  // Handle browser preflight requests.
  if (req.method === "OPTIONS") {
    if (!origin || !ALLOWED_ORIGINS.has(origin)) {
      return res.status(403).json({
        success: false,
        message: "Origin is not permitted.",
      });
    }

    return res.status(204).end();
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST, OPTIONS");

    return res.status(405).json({
      success: false,
      message: "Method not allowed.",
    });
  }

  // Reject browser requests from unauthorized origins.
  if (origin && !ALLOWED_ORIGINS.has(origin)) {
    return res.status(403).json({
      success: false,
      message: "This website origin is not authorized.",
    });
  }

  try {
    const contentType = String(
      req.headers["content-type"] || ""
    );

    if (!contentType.includes("application/json")) {
      return res.status(415).json({
        success: false,
        message: "Content-Type must be application/json.",
      });
    }

    const body =
      typeof req.body === "string"
        ? JSON.parse(req.body)
        : req.body;

    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return res.status(400).json({
        success: false,
        message: "Invalid form submission.",
      });
    }

    const payload = JSON.stringify(body);

    if (payload.length > MAX_BODY_LENGTH) {
      return res.status(413).json({
        success: false,
        message: "Your inquiry is too long.",
      });
    }

    // Honeypot field, if one is sent by the form.
    if (typeof body.website === "string" && body.website.trim()) {
      return res.status(200).json({
        success: true,
        message: "Your inquiry has been submitted.",
      });
    }

    const inquiry = getStringFields(body);

    if (
      inquiry.name.length < 2 ||
      !EMAIL_REGEX.test(inquiry.email) ||
      !inquiry.service ||
      inquiry.description.length < 20
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Please enter your name, a valid email, service, and a project description of at least 20 characters.",
      });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;

    // Corrected variable name, with backwards compatibility.
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL ||
      process.env.RESEND_FROM_EMAIL;

    if (!apiKey || !toEmail || !fromEmail) {
      console.error(
        "Missing Resend API configuration."
      );

      return res.status(503).json({
        success: false,
        message:
          "Our email service is temporarily unavailable. Please contact us directly.",
      });
    }

    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: inquiry.email,
      subject: `New Wordsmith Squad Inquiry - ${inquiry.service}`,
      text: [
        "NEW WORDSMITH SQUAD PROJECT INQUIRY",
        "",
        `Full Name: ${inquiry.name}`,
        `Email: ${inquiry.email}`,
        `Phone: ${inquiry.phone || "Not provided"}`,
        "",
        `Service: ${inquiry.service}`,
        `Genre: ${inquiry.genre || "Not specified"}`,
        `Budget: ${inquiry.budget || "Not specified"}`,
        "",
        "PROJECT DESCRIPTION:",
        inquiry.description,
        "",
        "Submitted through wordsmithsquad.com",
      ].join("\n"),
    });

    if (error) {
      console.error("Resend delivery error:", error);

      return res.status(502).json({
        success: false,
        message:
          "We couldn't deliver your inquiry right now. Please try again.",
      });
    }

    if (!data?.id) {
      return res.status(502).json({
        success: false,
        message:
          "We couldn't confirm email delivery. Please try again.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Your inquiry has been submitted successfully.",
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return res.status(500).json({
      success: false,
      message:
        "An unexpected error occurred while sending your inquiry.",
    });
  }
}
