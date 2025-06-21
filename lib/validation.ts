// Form validation utilities
export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export class FormValidator {
  // Validate email format
  static isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
  }

  // Validate phone number (optional field)
  static isValidPhone(phone: string): boolean {
    if (!phone || phone.trim() === '') return true; // Optional field
    const phoneRegex = /^[\+]?[1-9][\d\s\-\(\)]{7,15}$/;
    return phoneRegex.test(phone.trim());
  }

  // Sanitize input to prevent XSS
  static sanitizeInput(input: string): string {
    return input
      .trim()
      .replace(/[<>]/g, '') // Remove potential HTML tags
      .substring(0, 1000); // Limit length
  }

  // Validate contact form data
  static validateContactForm(data: any): ValidationResult {
    const errors: Record<string, string> = {};

    // Required fields validation
    if (!data.fullName || data.fullName.trim().length < 2) {
      errors.fullName = 'Full name must be at least 2 characters long';
    }

    if (!data.email || !this.isValidEmail(data.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (data.phone && !this.isValidPhone(data.phone)) {
      errors.phone = 'Please enter a valid phone number';
    }

    if (!data.enquiryType || data.enquiryType.trim() === '') {
      errors.enquiryType = 'Please select an enquiry type';
    }

    if (!data.subject || data.subject.trim().length < 5) {
      errors.subject = 'Subject must be at least 5 characters long';
    }

    if (!data.message || data.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long';
    }

    if (data.message && data.message.length > 2000) {
      errors.message = 'Message must be less than 2000 characters';
    }

    // Honeypot check (spam prevention)
    if (data.honeypot && data.honeypot.trim() !== '') {
      errors.honeypot = 'Spam detected';
    }

    return {
      isValid: Object.keys(errors).length === 0,
      errors,
    };
  }

  // Rate limiting check
  static checkRateLimit(ip: string, submissions: Map<string, number[]>): boolean {
    const now = Date.now();
    const windowMs = 60000; // 1 minute
    const maxSubmissions = 3; // Max 3 submissions per minute

    const userSubmissions = submissions.get(ip) || [];
    const recentSubmissions = userSubmissions.filter(time => now - time < windowMs);

    if (recentSubmissions.length >= maxSubmissions) {
      return false; // Rate limited
    }

    recentSubmissions.push(now);
    submissions.set(ip, recentSubmissions);
    return true; // Not rate limited
  }
}