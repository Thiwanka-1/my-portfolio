import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create and configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // Use TLS
  auth: {
    user: process.env.EMAIL_ADDRESS, // Your email address
    pass: process.env.GMAIL_PASSKEY, // Gmail App Password
  },
});

// HTML email template
const generateEmailTemplate = (name, email, userMessage) => `
  <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; background-color: #f4f4f4;">
    <div style="max-width: 600px; margin: auto; background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
      <h2 style="color: #007BFF;">New Contact Message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <blockquote style="border-left: 4px solid #007BFF; padding-left: 10px; margin-left: 0;">
        ${userMessage}
      </blockquote>
      <p style="font-size: 12px; color: #888;">Click reply to respond to the sender.</p>
    </div>
  </div>
`;

// Helper function to send an email
async function sendEmail(payload) {
  const { name, email, message: userMessage } = payload;

  const mailOptions = {
    from: 'Portfolio Contact Form', // Sender name
    to: process.env.EMAIL_ADDRESS,  // Your email address
    subject: `New Contact Message from ${name}`, 
    html: generateEmailTemplate(name, email, userMessage), 
    replyTo: email, 
  };

  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error('Error while sending email:', error.message);
    return false;
  }
}

export async function POST(request) {
  try {
    const payload = await request.json();
    const emailSuccess = await sendEmail(payload);

    if (emailSuccess) {
      return NextResponse.json({
        success: true,
        message: 'Your message has been sent successfully!',
      }, { status: 200 });
    } else {
      return NextResponse.json({
        success: false,
        message: 'Failed to send your message. Please try again later.',
      }, { status: 500 });
    }
  } catch (error) {
    console.error('API Error:', error.message);
    return NextResponse.json({
      success: false,
      message: 'An error occurred. Please try again later.',
    }, { status: 500 });
  }
}
