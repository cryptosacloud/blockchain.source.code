import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';
import crypto from 'crypto';

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = headers().get('sign');

    if (!signature) {
      return NextResponse.json(
        { error: 'Missing cryptomus signature' },
        { status: 400 }
      );
    }

    // Verify webhook signature
    const expectedSignature = crypto
      .createHmac('sha256', process.env.CRYPTOMUS_WEBHOOK_SECRET || process.env.CRYPTOMUS_API_KEY || '')
      .update(body)
      .digest('hex');

    if (signature !== expectedSignature) {
      console.error('Invalid Cryptomus signature');
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 401 }
      );
    }

    const event = JSON.parse(body);
    console.log('Cryptomus webhook received:', event);

    // Handle different event types
    switch (event.type) {
      case 'payment':
        await handlePaymentEvent(event);
        break;
      
      default:
        console.log(`Unhandled Cryptomus event type: ${event.type}`);
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

async function handlePaymentEvent(event: any) {
  try {
    const paymentData = event.data || event;
    const status = paymentData.status || paymentData.payment_status;
    const orderId = paymentData.order_id;
    
    console.log('Processing Cryptomus payment:', {
      orderId,
      status,
      amount: paymentData.amount,
      currency: paymentData.currency,
      txid: paymentData.txid
    });

    switch (status) {
      case 'paid':
      case 'paid_over':
        // Payment completed successfully
        await updateOrderStatus(orderId, 'completed', {
          cryptomusUuid: paymentData.uuid,
          paymentStatus: 'paid',
          amountPaid: parseFloat(paymentData.amount),
          currency: paymentData.currency,
          txid: paymentData.txid,
          paymentMethod: 'cryptomus',
          paidAt: paymentData.created_at
        });

        // Send confirmation email
        const additionalData = JSON.parse(paymentData.additional_data || '{}');
        if (additionalData.customerEmail) {
          await sendConfirmationEmail(additionalData.customerEmail, {
            productTitle: additionalData.productTitle || 'Web3 Solution',
            customerName: additionalData.customerName,
            orderId: orderId,
            amount: paymentData.amount,
            currency: paymentData.currency
          });
        }
        break;

      case 'cancel':
      case 'fail':
        // Payment failed or cancelled
        await updateOrderStatus(orderId, 'failed', {
          cryptomusUuid: paymentData.uuid,
          paymentStatus: status,
          failureReason: paymentData.fail_reason || 'Payment cancelled'
        });
        break;

      case 'process':
      case 'check':
        // Payment is being processed
        await updateOrderStatus(orderId, 'processing', {
          cryptomusUuid: paymentData.uuid,
          paymentStatus: status
        });
        break;

      case 'wrong_amount':
        // Wrong amount paid
        await updateOrderStatus(orderId, 'failed', {
          cryptomusUuid: paymentData.uuid,
          paymentStatus: status,
          failureReason: 'Incorrect payment amount'
        });
        break;

      default:
        console.log(`Unhandled payment status: ${status}`);
    }

  } catch (error) {
    console.error('Error handling Cryptomus payment event:', error);
  }
}

// Database operations (simplified for demo)
async function updateOrderStatus(orderId: string, status: string, additionalData?: any) {
  try {
    console.log('Updating order status:', {
      orderId,
      status,
      additionalData,
      updatedAt: new Date().toISOString()
    });

    // In a real implementation, this would update your database
    // const db = await getDbConnection();
    // await db.query(
    //   'UPDATE orders SET status = ?, payment_data = ?, updated_at = NOW() WHERE order_id = ?',
    //   [status, JSON.stringify(additionalData), orderId]
    // );

  } catch (error) {
    console.error('Error updating order status:', error);
  }
}

// Email service (simplified for demo)
async function sendConfirmationEmail(customerEmail: string, metadata: any) {
  try {
    console.log('Sending crypto payment confirmation email:', {
      to: customerEmail,
      productTitle: metadata?.productTitle,
      customerName: metadata?.customerName,
      amount: metadata?.amount,
      currency: metadata?.currency
    });

    // In a real implementation, this would send an email
    // const emailService = new EmailService();
    // await emailService.sendCryptoPaymentConfirmation({
    //   to: customerEmail,
    //   productTitle: metadata?.productTitle,
    //   customerName: metadata?.customerName,
    //   amount: metadata?.amount,
    //   currency: metadata?.currency,
    //   downloadLink: generateDownloadLink(metadata?.productId)
    // });

  } catch (error) {
    console.error('Error sending confirmation email:', error);
  }
}