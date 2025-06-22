import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = headers().get('stripe-signature');

    if (!signature) {
      return NextResponse.json(
        { error: 'Missing stripe signature' },
        { status: 400 }
      );
    }

    // In production, verify the webhook signature
    // const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
    // const event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET);

    // For demo purposes, we'll parse the body as JSON
    const event = JSON.parse(body);

    console.log('Stripe webhook received:', event.type);

    switch (event.type) {
      case 'checkout.session.completed':
        const session = event.data.object;
        console.log('Payment succeeded:', {
          sessionId: session.id,
          customerEmail: session.customer_email,
          amountTotal: session.amount_total,
          metadata: session.metadata
        });

        // Update order status in database
        await updateOrderStatus(session.metadata?.orderId, 'completed', {
          stripeSessionId: session.id,
          paymentStatus: 'paid',
          amountPaid: session.amount_total / 100, // Convert from cents
          customerEmail: session.customer_email,
          paymentMethod: 'stripe'
        });

        // Send confirmation email to customer
        await sendConfirmationEmail(session.customer_email, session.metadata);

        break;
      
      case 'checkout.session.expired':
        const expiredSession = event.data.object;
        console.log('Payment session expired:', expiredSession.id);
        
        await updateOrderStatus(expiredSession.metadata?.orderId, 'expired');
        break;
      
      case 'payment_intent.payment_failed':
        const failedPayment = event.data.object;
        console.log('Payment failed:', failedPayment.id);
        
        await updateOrderStatus(failedPayment.metadata?.orderId, 'failed', {
          failureReason: failedPayment.last_payment_error?.message
        });
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

// Database operations (simplified for demo)
async function updateOrderStatus(orderId: string, status: string, additionalData?: any) {
  try {
    // In a real implementation, this would update your database
    console.log('Updating order status:', {
      orderId,
      status,
      additionalData,
      updatedAt: new Date().toISOString()
    });

    // Example database update:
    // const db = await getDbConnection();
    // await db.query(
    //   'UPDATE orders SET status = ?, payment_data = ?, updated_at = NOW() WHERE id = ?',
    //   [status, JSON.stringify(additionalData), orderId]
    // );

  } catch (error) {
    console.error('Error updating order status:', error);
  }
}

// Email service (simplified for demo)
async function sendConfirmationEmail(customerEmail: string, metadata: any) {
  try {
    console.log('Sending confirmation email:', {
      to: customerEmail,
      productTitle: metadata?.productTitle,
      customerName: metadata?.customerName
    });

    // In a real implementation, this would send an email
    // const emailService = new EmailService();
    // await emailService.sendPurchaseConfirmation({
    //   to: customerEmail,
    //   productTitle: metadata?.productTitle,
    //   customerName: metadata?.customerName,
    //   downloadLink: generateDownloadLink(metadata?.productId)
    // });

  } catch (error) {
    console.error('Error sending confirmation email:', error);
  }
}