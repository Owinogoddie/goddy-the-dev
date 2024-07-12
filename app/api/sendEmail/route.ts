import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { name, email, message, date } = await req.json();

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  let subject = '';
  let text = '';

  if (date) {
    // This is a calendar booking
    subject = `New appointment booking from ${name}`;
    text = `
      Name: ${name}
      Email: ${email}
      Date: ${new Date(date).toLocaleString()}
    `;
  } else {
    // This is a contact form submission
    subject = `New contact form submission from ${name}`;
    text = `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `;
  }

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      subject: subject,
      text: text,
    });

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
  }
}