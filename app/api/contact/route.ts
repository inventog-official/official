import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, company, message } = await req.json();

    // Send email to the contact team
    const contactTeamEmail = await resend.emails.send({
      from: 'contact@inventog.com',
      to: 'inventogofficial@gmail.com',
      subject: 'New Contact Form Submission',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // Send thank-you email to the user
    const thankYouEmail = await resend.emails.send({
      from: 'contact@inventog.com',
      to: email,
      subject: 'Thank You for Contacting Us',
      html: `
        <h2>Thank You, ${firstName}!</h2>
        <p>We have received your message and will get back to you shortly.</p>
        <p><strong>Your Message:</strong></p>
        <p>${message}</p>
        <p>Best regards,</p>
        <p>The Inventog Team</p>
      `,
    });

    return Response.json({ contactTeamEmail, thankYouEmail });
  } catch (error) {
    return Response.json({ error: error instanceof Error ? error.message : 'An unknown error occurred' }, { status: 500 });
  }
}