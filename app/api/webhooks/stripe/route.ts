import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = headers().get('stripe-signature');

    // Verify webhook signature
    // const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
    // const event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET);

    // For demo purposes, we'll parse the body as JSON
    const event = JSON.parse(body);

    switch (event.type) {
      case 'payment_intent.succeeded':
        // Update booking status to 'paid'
        console.log('Payment succeeded:', event.data.object);
        // updateBookingStatus(event.data.object.metadata.bookingId, 'paid');
        break;
      
      case 'payment_intent.payment_failed':
        // Update booking status to 'failed'
        console.log('Payment failed:', event.data.object);
        // updateBookingStatus(event.data.object.metadata.bookingId, 'failed');
        break;
      
      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Stripe webhook error:', error);
    return NextResponse.json(
      { error: 'Webhook error' },
      { status: 400 }
    );
  }
}