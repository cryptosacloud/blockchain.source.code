import { ContactSubmission } from './database';

// Email configuration interface
interface EmailConfig {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
  tls?: {
    rejectUnauthorized: boolean;
  };
}

// Get email configuration from environment variables
const getEmailConfig = (): EmailConfig => {
  return {
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER || '',
      pass: process.env.SMTP_PASSWORD || '',
    },
    tls: {
      rejectUnauthorized: process.env.SMTP_TLS_REJECT_UNAUTHORIZED !== 'false',
    },
  };
};

export class EmailService {
  // Send confirmation email to user
  static async sendUserConfirmation(submission: ContactSubmission): Promise<boolean> {
    try {
      // In a real implementation, this would use nodemailer or similar
      // For now, we'll simulate the email sending
      
      console.log('Sending user confirmation email to:', submission.email);
      console.log('Email content:', {
        to: submission.email,
        subject: '⚡ Your message has been received - Revolution Web3 Design Store',
        type: 'user_confirmation'
      });
      
      // Simulate email sending delay
      await new Promise(resolve => setTimeout(resolve, 100));
      
      return true;
    } catch (error) {
      console.error('Error sending user confirmation email:', error);
      return false;
    }
  }

  // Send notification email to admin
  static async sendAdminNotification(submission: ContactSubmission): Promise<boolean> {
    try {
      // In a real implementation, this would use nodemailer or similar
      // For now, we'll simulate the email sending
      
      console.log('Sending admin notification email');
      console.log('Email content:', {
        to: process.env.ADMIN_EMAIL || process.env.SMTP_USER,
        subject: `🔥 New Contact Enquiry: ${submission.subject}`,
        type: 'admin_notification',
        submission: submission
      });
      
      // Simulate email sending delay
      await new Promise(resolve => setTimeout(resolve, 100));
      
      return true;
    } catch (error) {
      console.error('Error sending admin notification email:', error);
      return false;
    }
  }

  // Test email configuration
  static async testEmailConfig(): Promise<boolean> {
    try {
      const config = getEmailConfig();
      
      // Basic validation of email configuration
      if (!config.auth.user || !config.auth.pass) {
        console.warn('Email configuration incomplete: missing user or password');
        return false;
      }
      
      console.log('Email configuration test passed');
      return true;
    } catch (error) {
      console.error('Email configuration test failed:', error);
      return false;
    }
  }
}