import { Router, type IRouter, Request, Response } from "express";
import nodemailer from "nodemailer";

const router: IRouter = Router();

const transporter = nodemailer.createTransport({
  host: process.env.MAILTRAP_HOST,
  port: Number(process.env.MAILTRAP_PORT),
  auth: {
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASS,
  },
});

// Simple rate limiting - max 3 submissions per IP per hour
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + 60 * 60 * 1000 });
    return false;
  }
  if (entry.count >= 3) return true;
  entry.count++;
  return false;
}

router.post("/contact", async (req: Request, res: Response) => {
  const ip = req.ip || "unknown";

  if (isRateLimited(ip)) {
    res.status(429).json({ error: "Too many requests. Try again later." });
    return;
  }

  const { name, email, message, inquiry, honeypot } = req.body;

  // Honeypot - bots fill this, humans don't
  if (honeypot) {
    res.status(200).json({ success: true });
    return;
  }

  if (!name || !email || !message) {
    res.status(400).json({ error: "Name, email and message are required." });
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    res.status(400).json({ error: "Invalid email address." });
    return;
  }

  if (message.length > 2000) {
    res.status(400).json({ error: "Message too long." });
    return;
  }

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <hello@sirlano.com>`,
      to: "hello@sirlano.com",
      replyTo: email,
      subject: `[Portfolio] ${inquiry || "General Inquiry"} from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nInquiry: ${inquiry}\n\n${message}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Inquiry:</strong> ${inquiry || "General"}</p>
        <hr/>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    res.status(500).json({ error: "Failed to send message. Try again later." });
  }
});

export default router;
