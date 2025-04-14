// app/api/send/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";
import ThankYouEmail from "@/components/emails/ThankYouEmail";
import AdminNotification from "@/components/emails/AdminNotification";
import { contactSchema } from "@/lib/validation/Email-type";

const resend = new Resend(process.env.RESEND_API_KEY);
const audienceId = process.env.RESEND_AUDIENCE_ID ?? "";

export async function POST(req: Request) {
  const body = await req.json();

  const result = contactSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json({ error: result.error.format() }, { status: 400 });
  }

  const { firstName, lastName, email, company, message, phone } = result.data;

  try {
    // Send Thank You Email to User
    await resend.emails.send({
      from: "InventOG <contact@inventog.com>",
      to: email,
      subject: "Thank You for Contacting InventOG!",
      react: ThankYouEmail({
        firstName,
        lastName,
        company: company ?? "",
        phone: phone, // Removed as 'phone' is not a known property
        email,
        message: message ?? "",
      }),
    });

    // Send Admin Notification
    await resend.emails.send({
      from: "New Contact <contact@inventog.com>",
      to: ["contact@inventog.com", "inventogofficial@gmail.com"],
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      react: AdminNotification({
        firstName,
        lastName,
        email,
        phone,
        company: company ?? "",
        message: message ?? "",
      }),
    });

    await resend.contacts.create({
      email: email,
      firstName: firstName,
      lastName: lastName,
      unsubscribed: false,
      audienceId: audienceId,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email sending failed:", err);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
