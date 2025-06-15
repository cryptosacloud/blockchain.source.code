// Payment Processing Utilities

interface BookingData {
  fullName: string;
  email: string;
  phone: string;
  serviceType: string;
  date: string;
  time: string;
  amount: number;
  bookingId: string;
}

// Stripe Payment Processor
export class StripeProcessor {
  private stripe: any;

  constructor() {
    // Initialize Stripe with secret key from environment
    if (typeof window === 'undefined') {
      this.stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
    }
  }

  async createPaymentIntent(bookingData: BookingData) {
    try {
      const paymentIntent = await this.stripe.paymentIntents.create({
        amount: Math.round(bookingData.amount * 100), // Convert to cents
        currency: 'usd',
        metadata: {
          bookingId: bookingData.bookingId,
          customerEmail: bookingData.email,
          serviceType: bookingData.serviceType,
        },
        receipt_email: bookingData.email,
        description: `Blockchain Service: ${bookingData.serviceType}`,
      });

      return {
        success: true,
        clientSecret: paymentIntent.client_secret,
        paymentIntentId: paymentIntent.id,
      };
    } catch (error) {
      console.error('Stripe payment creation error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'An unknown error occurred',
      };
    }
  }

  async confirmPayment(paymentIntentId: string) {
    try {
      const paymentIntent = await this.stripe.paymentIntents.retrieve(paymentIntentId);
      return {
        success: paymentIntent.status === 'succeeded',
        status: paymentIntent.status,
        paymentIntent,
      };
    } catch (error) {
      console.error('Stripe payment confirmation error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'An unknown error occurred',
      };
    }
  }
}

// Cryptomus Payment Processor
export class CryptomusProcessor {
  private apiKey: string;
  private merchantId: string;
  private baseUrl: string;

  constructor() {
    this.apiKey = process.env.CRYPTOMUS_API_KEY || '';
    this.merchantId = process.env.CRYPTOMUS_MERCHANT_ID || '';
    this.baseUrl = 'https://api.cryptomus.com/v1';
  }

  private generateSignature(data: string): string {
    const crypto = require('crypto');
    return crypto
      .createHmac('sha256', this.apiKey)
      .update(data)
      .digest('hex');
  }

  async createInvoice(bookingData: BookingData) {
    try {
      const invoiceData = {
        amount: bookingData.amount.toString(),
        currency: 'USD',
        order_id: bookingData.bookingId,
        url_return: `${process.env.NEXT_PUBLIC_BASE_URL}/payment/success`,
        url_callback: `${process.env.NEXT_PUBLIC_BASE_URL}/api/webhooks/cryptomus`,
        is_payment_multiple: false,
        lifetime: 3600, // 1 hour
        to_currency: 'USDT', // Default to USDT
        subtitle: `Blockchain Service: ${bookingData.serviceType}`,
        additional_data: JSON.stringify({
          customerEmail: bookingData.email,
          customerName: bookingData.fullName,
          serviceType: bookingData.serviceType,
        }),
      };

      const dataString = JSON.stringify(invoiceData);
      const signature = this.generateSignature(dataString);

      const response = await fetch(`${this.baseUrl}/payment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'merchant': this.merchantId,
          'sign': signature,
        },
        body: dataString,
      });

      const result = await response.json();

      if (result.state === 0) {
        return {
          success: true,
          invoiceId: result.result.uuid,
          paymentUrl: result.result.url,
          qrCode: result.result.qr,
        };
      } else {
        return {
          success: false,
          error: result.message || 'Failed to create crypto invoice',
        };
      }
    } catch (error) {
      console.error('Cryptomus invoice creation error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'An unknown error occurred',
      };
    }
  }

  async checkPaymentStatus(invoiceId: string) {
    try {
      const data = { uuid: invoiceId };
      const dataString = JSON.stringify(data);
      const signature = this.generateSignature(dataString);

      const response = await fetch(`${this.baseUrl}/payment/info`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'merchant': this.merchantId,
          'sign': signature,
        },
        body: dataString,
      });

      const result = await response.json();

      if (result.state === 0) {
        return {
          success: true,
          status: result.result.payment_status,
          paymentInfo: result.result,
        };
      } else {
        return {
          success: false,
          error: result.message || 'Failed to check payment status',
        };
      }
    } catch (error) {
      console.error('Cryptomus status check error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'An unknown error occurred',
      };
    }
  }
}

// Database operations
export class DatabaseManager {
  async createBooking(bookingData: BookingData) {
    // This would typically use your database connection
    // For demo purposes, we'll simulate the database operation
    
    const booking = {
      id: Date.now(),
      ...bookingData,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };

    // In a real implementation:
    // const db = await getDbConnection();
    // const result = await db.query(
    //   'INSERT INTO bookings (full_name, email, phone, service_type, booking_date, booking_time, notes, payment_method, amount, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    //   [bookingData.fullName, bookingData.email, bookingData.phone, bookingData.serviceType, bookingData.date, bookingData.time, bookingData.notes, bookingData.paymentMethod, bookingData.amount, 'pending']
    // );

    console.log('Booking created:', booking);
    return booking;
  }

  async updateBookingStatus(bookingId: string, status: string) {
    // In a real implementation:
    // const db = await getDbConnection();
    // await db.query('UPDATE bookings SET status = ?, updated_at = NOW() WHERE id = ?', [status, bookingId]);
    
    console.log(`Booking ${bookingId} status updated to: ${status}`);
  }

  async createTransaction(transactionData: any) {
    // In a real implementation:
    // const db = await getDbConnection();
    // const result = await db.query(
    //   'INSERT INTO transactions (booking_id, payment_method, transaction_id, amount, status, payment_data) VALUES (?, ?, ?, ?, ?, ?)',
    //   [transactionData.bookingId, transactionData.paymentMethod, transactionData.transactionId, transactionData.amount, transactionData.status, JSON.stringify(transactionData.paymentData)]
    // );

    console.log('Transaction created:', transactionData);
  }
}

// Security utilities
export class SecurityManager {
  static sanitizeInput(input: string): string {
    return input.trim().replace(/[<>]/g, '');
  }

  static validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  static validatePhone(phone: string): boolean {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
  }

  static generateCSRFToken(): string {
    const crypto = require('crypto');
    return crypto.randomBytes(32).toString('hex');
  }

  static verifyCSRFToken(token: string, sessionToken: string): boolean {
    return token === sessionToken;
  }
}

// Rate limiting
export class RateLimiter {
  private static requests = new Map<string, number[]>();

  static isRateLimited(ip: string, maxRequests: number = 5, windowMs: number = 60000): boolean {
    const now = Date.now();
    const requests = this.requests.get(ip) || [];
    
    // Remove old requests outside the window
    const validRequests = requests.filter(time => now - time < windowMs);
    
    if (validRequests.length >= maxRequests) {
      return true;
    }
    
    validRequests.push(now);
    this.requests.set(ip, validRequests);
    
    return false;
  }
}