import nodemailer from 'nodemailer';
import { ContactSubmission } from './database';

// Email configuration
const emailConfig = {
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER || '',
    pass: process.env.SMTP_PASSWORD || '',
  },
  tls: {
    rejectUnauthorized: process.env.SMTP_TLS_REJECT_UNAUTHORIZED !== 'false',
  },
};

// Create reusable transporter
const createTransporter = () => {
  return nodemailer.createTransporter(emailConfig);
};

export class EmailService {
  // Send confirmation email to user
  static async sendUserConfirmation(submission: ContactSubmission): Promise<boolean> {
    try {
      const transporter = createTransporter();
      
      const userEmailHtml = `
        <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%); color: white; border-radius: 15px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.3);">
          <div style="background: linear-gradient(90deg, #ef4444, #f97316); padding: 30px; text-align: center;">
            <h1 style="margin: 0; font-size: 28px; font-weight: bold;">⚡ Message Received!</h1>
          </div>
          
          <div style="padding: 40px 30px;">
            <p style="font-size: 18px; margin-bottom: 20px;">Hi <strong>${submission.fullName}</strong>,</p>
            
            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 25px;">
              Thank you for reaching out to <strong style="color: #ef4444;">Revolution Web3 Design Store</strong>! 
              We've received your enquiry and our revolutionary experts are already reviewing your message.
            </p>
            
            <div style="background: rgba(239,68,68,0.1); padding: 25px; border-radius: 12px; margin: 25px 0; border-left: 4px solid #ef4444;">
              <h3 style="color: #ef4444; margin-top: 0; font-size: 20px;">Your Enquiry Summary:</h3>
              <div style="font-size: 14px; line-height: 1.8;">
                <p><strong>Type:</strong> ${submission.enquiryType}</p>
                <p><strong>Subject:</strong> ${submission.subject}</p>
                <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
              </div>
            </div>
            
            <h3 style="color: #f97316; font-size: 20px; margin-bottom: 15px;">What happens next?</h3>
            <ul style="line-height: 2; font-size: 15px; padding-left: 20px;">
              <li>🔍 Our team will review your enquiry within 24 hours</li>
              <li>📧 You'll receive a detailed response via email</li>
              <li>💬 For complex projects, we may schedule a consultation call</li>
              <li>🚀 We'll provide custom recommendations for your needs</li>
            </ul>
            
            <div style="background: rgba(249,115,22,0.1); padding: 20px; border-radius: 12px; margin: 25px 0; border-left: 4px solid #f97316;">
              <h4 style="color: #f97316; margin-top: 0; font-size: 16px;">Need immediate assistance?</h4>
              <p style="margin-bottom: 0; font-size: 14px;">For urgent matters, reply to this email with "URGENT" in the subject line, and we'll prioritize your request.</p>
            </div>
            
            <p style="font-size: 16px; margin-top: 30px;">
              Best regards,<br>
              <strong style="color: #ef4444;">Revolution Web3 Design Store Team</strong><br>
              <span style="font-size: 14px; color: #ccc;">🌐 Building the future of Web3</span>
            </p>
          </div>
          
          <div style="background: rgba(255,255,255,0.1); padding: 20px; text-align: center; font-size: 12px; color: #ccc;">
            <p style="margin: 0;">© ${new Date().getFullYear()} Revolution Web3 Design Store. All rights reserved.</p>
          </div>
        </div>
      `;

      const mailOptions = {
        from: `"Revolution Web3 Design Store" <${process.env.SMTP_USER}>`,
        to: submission.email,
        subject: '⚡ Your message has been received - Revolution Web3 Design Store',
        html: userEmailHtml,
      };

      await transporter.sendMail(mailOptions);
      return true;
    } catch (error) {
      console.error('Error sending user confirmation email:', error);
      return false;
    }
  }

  // Send notification email to admin
  static async sendAdminNotification(submission: ContactSubmission): Promise<boolean> {
    try {
      const transporter = createTransporter();
      
      const adminEmailHtml = `
        <div style="font-family: 'Inter', Arial, sans-serif; max-width: 700px; margin: 0 auto; background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%); color: white; border-radius: 15px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.3);">
          <div style="background: linear-gradient(90deg, #ef4444, #f97316); padding: 25px; text-align: center;">
            <h1 style="margin: 0; font-size: 26px; font-weight: bold;">🔥 New Contact Enquiry</h1>
          </div>
          
          <div style="padding: 35px;">
            <div style="background: rgba(255,255,255,0.1); padding: 25px; border-radius: 12px; margin-bottom: 25px;">
              <h2 style="color: #ef4444; margin-top: 0; font-size: 22px;">Contact Details</h2>
              <div style="font-size: 15px; line-height: 1.8;">
                <p><strong>Name:</strong> ${submission.fullName}</p>
                <p><strong>Email:</strong> <a href="mailto:${submission.email}" style="color: #f97316;">${submission.email}</a></p>
                <p><strong>Phone:</strong> ${submission.phone || 'Not provided'}</p>
                <p><strong>Enquiry Type:</strong> <span style="color: #f97316;">${submission.enquiryType}</span></p>
              </div>
            </div>
            
            <div style="background: rgba(255,255,255,0.1); padding: 25px; border-radius: 12px; margin-bottom: 25px;">
              <h2 style="color: #f97316; margin-top: 0; font-size: 22px;">Subject</h2>
              <p style="font-size: 16px; font-weight: 500;">${submission.subject}</p>
            </div>
            
            <div style="background: rgba(255,255,255,0.1); padding: 25px; border-radius: 12px; margin-bottom: 25px;">
              <h2 style="color: #ef4444; margin-top: 0; font-size: 22px;">Message</h2>
              <p style="line-height: 1.7; font-size: 15px; white-space: pre-wrap;">${submission.message}</p>
            </div>
            
            <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 12px;">
              <h3 style="color: #ccc; margin-top: 0; font-size: 16px;">Technical Details</h3>
              <div style="font-size: 13px; color: #aaa; line-height: 1.6;">
                <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
                <p><strong>IP Address:</strong> ${submission.ipAddress || 'Not available'}</p>
                <p><strong>User Agent:</strong> ${submission.userAgent || 'Not available'}</p>
              </div>
            </div>
            
            <div style="margin-top: 30px; text-align: center;">
              <a href="mailto:${submission.email}?subject=Re: ${submission.subject}" 
                 style="display: inline-block; background: linear-gradient(90deg, #ef4444, #f97316); color: white; padding: 12px 25px; text-decoration: none; border-radius: 8px; font-weight: bold;">
                Reply to ${submission.fullName}
              </a>
            </div>
          </div>
        </div>
      `;

      const mailOptions = {
        from: `"Revolution Web3 Contact Form" <${process.env.SMTP_USER}>`,
        to: process.env.ADMIN_EMAIL || process.env.SMTP_USER,
        subject: `🔥 New Contact Enquiry: ${submission.subject}`,
        html: adminEmailHtml,
        replyTo: submission.email,
      };

      await transporter.sendMail(mailOptions);
      return true;
    } catch (error) {
      console.error('Error sending admin notification email:', error);
      return false;
    }
  }

  // Test email configuration
  static async testEmailConfig(): Promise<boolean> {
    try {
      const transporter = createTransporter();
      await transporter.verify();
      return true;
    } catch (error) {
      console.error('Email configuration test failed:', error);
      return false;
    }
  }
}