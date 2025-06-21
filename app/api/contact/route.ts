import { NextRequest, NextResponse } from 'next/server';
import { DatabaseManager, ContactSubmission } from '@/lib/database';
import { EmailService } from '@/lib/email';
import { FormValidator } from '@/lib/validation';

// Rate limiting storage (in production, use Redis or similar)
const rateLimitMap = new Map<string, number[]>();

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const clientIP = request.headers.get('x-forwarded-for') || 
                    request.headers.get('x-real-ip') || 
                    'unknown';

    // Check rate limiting
    if (!FormValidator.checkRateLimit(clientIP, rateLimitMap)) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait before submitting again.' },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Validate form data
    const validation = FormValidator.validateContactForm(body);
    if (!validation.isValid) {
      return NextResponse.json(
        { error: 'Validation failed', details: validation.errors },
        { status: 400 }
      );
    }

    // Sanitize input data
    const sanitizedData: ContactSubmission = {
      fullName: FormValidator.sanitizeInput(body.fullName),
      email: FormValidator.sanitizeInput(body.email.toLowerCase()),
      phone: body.phone ? FormValidator.sanitizeInput(body.phone) : undefined,
      enquiryType: FormValidator.sanitizeInput(body.enquiryType),
      subject: FormValidator.sanitizeInput(body.subject),
      message: FormValidator.sanitizeInput(body.message),
      ipAddress: clientIP,
      userAgent: request.headers.get('user-agent') || undefined,
    };

    // Save to database
    let submissionId: number;
    try {
      submissionId = await DatabaseManager.createContactSubmission(sanitizedData);
    } catch (dbError) {
      console.error('Database error:', dbError);
      return NextResponse.json(
        { error: 'Failed to save your message. Please try again.' },
        { status: 500 }
      );
    }

    // Send emails (don't fail the request if emails fail)
    const emailPromises = [
      EmailService.sendUserConfirmation(sanitizedData),
      EmailService.sendAdminNotification(sanitizedData),
    ];

    try {
      const [userEmailSent, adminEmailSent] = await Promise.all(emailPromises);
      
      if (!userEmailSent) {
        console.error('Failed to send user confirmation email');
      }
      
      if (!adminEmailSent) {
        console.error('Failed to send admin notification email');
      }
    } catch (emailError) {
      console.error('Email sending error:', emailError);
      // Don't fail the request if emails fail
    }

    return NextResponse.json({
      success: true,
      message: 'Your message has been sent successfully!',
      submissionId,
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}

// Health check endpoint
export async function GET() {
  try {
    // Test database connection
    const dbConnected = await DatabaseManager.testConnection();
    
    // Test email configuration
    const emailConfigured = await EmailService.testEmailConfig();

    return NextResponse.json({
      status: 'ok',
      database: dbConnected ? 'connected' : 'disconnected',
      email: emailConfigured ? 'configured' : 'not configured',
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      { status: 'error', message: 'Health check failed' },
      { status: 500 }
    );
  }
}