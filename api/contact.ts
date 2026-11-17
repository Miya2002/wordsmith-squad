
import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    const {
      name,
      email,
      phone,
      service,
      genre,
      budget,
      description,
    } = req.body || {};

    // Validate required fields
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof service !== "string" ||
      typeof description !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !service.trim() ||
      !description.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: "Please complete all required fields.",
      });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address.",
      });
    }

    if (description.trim().length < 20) {
      return res.status(400).json({
        success: false,
        message: "Project description must contain at least 20 characters.",
      });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.RESEND_FROM_EMAIL;

    if (!apiKey || !toEmail || !fromEmail) {
      console.error("Email environment variables are missing.");

      return res.status(500).json({
        success: false,
        message: "Email service is not configured.",
      });
    }

    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email.trim(),
      subject: `New Project Inquiry: ${service.trim()}`,
      text: `
NEW WORDSMITH SQUAD PROJECT INQUIRY

Full Name: ${name.trim()}
Email Address: ${email.trim()}
Phone Number: ${phone || "Not provided"}

Service Required: ${service.trim()}
Book Genre: ${genre || "Not specified"}
Estimated Budget: ${budget || "Not specified"}

PROJECT DESCRIPTION:
${description.trim()}

Sent through the Wordsmith Squad website.
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return res.status(500).json({
        success: false,
        message: "Unable to send your inquiry. Please try again.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Your inquiry has been sent successfully.",
      id: data?.id,
    });

  } catch (error) {
    console.error("Contact API error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong while sending your inquiry.",
    });
  }
}
