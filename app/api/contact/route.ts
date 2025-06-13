import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const requiredFields = ['fullName', 'email', 'enquiryType', 'subject', 'message'];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `${field} is required` },
          { status: 400 }
        );
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate message length
    if (body.message.length > 2000) {
      return NextResponse.json(
        { error: 'Message too long' },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedData = {
      fullName: body.fullName.trim(),
      email: body.email.trim().toLowerCase(),
      phone: body.phone ? body.phone.trim() : '',
      enquiryType: body.enquiryType,
      subject: body.subject.trim(),
      message: body.message.trim(),
      timestamp: new Date().toISOString()
    };

    // Create transporter
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Email to admin
    const adminEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%); color: white; border-radius: 10px; overflow: hidden;">
        <div style="background: linear-gradient(90deg, #00d4ff, #9d4edd); padding: 20px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">🚀 New Contact Enquiry</h1>
        </div>
        
        <div style="padding: 30px;">
          <div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #00d4ff; margin-top: 0;">Contact Details</h2>
            <p><strong>Name:</strong> ${sanitizedData.fullName}</p>
            <p><strong>Email:</strong> ${sanitizedData.email}</p>
            <p><strong>Phone:</strong> ${sanitizedData.phone || 'Not provided'}</p>
            <p><strong>Enquiry Type:</strong> ${sanitizedData.enquiryType}</p>
          </div>
          
          <div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #9d4edd; margin-top: 0;">Subject</h2>
            <p>${sanitizedData.subject}</p>
          </div>
          
          <div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 8px;">
            <h2 style="color: #00d4ff; margin-top: 0;">Message</h2>
            <p style="line-height: 1.6;">${sanitizedData.message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background: rgba(0,212,255,0.1); border-left: 4px solid #00d4ff; border-radius: 4px;">
            <p style="margin: 0; font-size: 14px; color: #ccc;">
              <strong>Received:</strong> ${new Date(sanitizedData.timestamp).toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    `;

    // Email to customer (auto-reply)
    const customerEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%); color: white; border-radius: 10px; overflow: hidden;">
        <div style="background: linear-gradient(90deg, #00d4ff, #9d4edd); padding: 20px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">⚡ Message Received!</h1>
        </div>
        
        <div style="padding: 30px;">
          <p>Hi ${sanitizedData.fullName},</p>
          
          <p>Thank you for reaching out to <strong>The Blockchain Coders</strong>! We've received your enquiry and our cyberpunk experts are already reviewing your message.</p>
          
          <div style="background: rgba(0,212,255,0.1); padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #00d4ff;">
            <h3 style="color: #00d4ff; margin-top: 0;">Your Enquiry Summary:</h3>
            <p><strong>Type:</strong> ${sanitizedData.enquiryType}</p>
            <p><strong>Subject:</strong> ${sanitizedData.subject}</p>
            <p><strong>Submitted:</strong> ${new Date(sanitizedData.timestamp).toLocaleString()}</p>
          </div>
          
          <h3 style="color: #9d4edd;">What happens next?</h3>
          <ul style="line-height: 1.8;">
            <li>🔍 Our team will review your enquiry within 24 hours</li>
            <li>📧 You'll receive a detailed response via email</li>
            <li>💬 For complex projects, we may schedule a consultation call</li>
            <li>🚀 We'll provide custom recommendations for your needs</li>
          </ul>
          
          <div style="background: rgba(157,78,221,0.1); padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #9d4edd;">
            <h4 style="color: #9d4edd; margin-top: 0;">Need immediate assistance?</h4>
            <p style="margin-bottom: 0;">For urgent matters, reply to this email with "URGENT" in the subject line, and we'll prioritize your request.</p>
          </div>
          
          <p>Best regards,<br>
          <strong>The Blockchain Coders Team</strong><br>
          🌐 Building the future of Web3</p>
        </div>
        
        <div style="background: rgba(255,255,255,0.1); padding: 20px; text-align: center; font-size: 14px; color: #ccc;">
          <p style="margin: 0;">© 2024 The Blockchain Coders. All rights reserved.</p>
        </div>
      </div>
    `;

    // Send email to admin
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: 'hello@blockchaincoders.dev',
      subject: `🚀 New Contact Enquiry: ${sanitizedData.subject}`,
      html: adminEmailHtml,
      replyTo: sanitizedData.email,
    });

    // Send auto-reply to customer
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: sanitizedData.email,
      subject: '⚡ Your message has been received - The Blockchain Coders',
      html: customerEmailHtml,
    });

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}