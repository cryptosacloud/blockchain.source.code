import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';
import crypto from 'crypto';

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = headers().get('x-cryptomus-signature');

    // Verify webhook signature
    const expectedSignature = crypto
      .createHmac('sha256', process.env.CRYPTOMUS_WEBHOOK_SECRET || '')
      .update(body)
      .digest('hex');

    if (signature !== expectedSignature) {
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 401 }
      );
    }

    const event = JSON.parse(body);

    switch (event.type) {
      case 'payment.completed':
        // Update booking status to 'paid'
        console.log('Crypto payment completed:', event.data);
        // updateBookingStatus(event.data.order_id, 'paid');
        break;
      
      case 'payment.failed':
        // Update booking status to 'failed'
        console.log('Crypto payment failed:', event.data);
        // updateBookingStatus(event.data.order_id, 'failed');
        break;
      
      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Cryptomus webhook error:', error);
    return NextResponse.json(
      { error: 'Webhook error' },
      { status: 400 }
    );
  }
}