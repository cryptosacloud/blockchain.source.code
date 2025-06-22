import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';

// Stripe integration
async function createStripeCheckout(orderData: any) {
  try {
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
    
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: orderData.productTitle,
              description: `${orderData.productData.category} - Revolutionary Web3 Solution`,
              images: ['https://images.pexels.com/photos/7567522/pexels-photo-7567522.jpeg?auto=compress&cs=tinysrgb&w=400'],
            },
            unit_amount: Math.round(orderData.amount * 100), // Convert to cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/payment/success?session_id={CHECKOUT_SESSION_ID}&product_id=${orderData.productId}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/payment/cancelled`,
      customer_email: orderData.customerInfo.email,
      metadata: {
        productId: orderData.productId.toString(),
        productTitle: orderData.productTitle,
        customerName: orderData.customerInfo.fullName,
        customerPhone: orderData.customerInfo.phone,
      },
    });

    return {
      success: true,
      checkoutUrl: session.url,
      sessionId: session.id,
    };
  } catch (error) {
    console.error('Stripe checkout creation error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Stripe payment creation failed',
    };
  }
}

// Cryptomus integration
async function createCryptomusInvoice(orderData: any) {
  try {
    const crypto = require('crypto');
    
    const invoiceData = {
      amount: orderData.amount.toString(),
      currency: 'USD',
      order_id: `order_${Date.now()}_${orderData.productId}`,
      url_return: `${process.env.NEXT_PUBLIC_BASE_URL}/payment/success?product_id=${orderData.productId}`,
      url_callback: `${process.env.NEXT_PUBLIC_BASE_URL}/api/webhooks/cryptomus`,
      is_payment_multiple: false,
      lifetime: 3600, // 1 hour
      to_currency: 'USDT',
      subtitle: orderData.productTitle,
      additional_data: JSON.stringify({
        productId: orderData.productId,
        customerEmail: orderData.customerInfo.email,
        customerName: orderData.customerInfo.fullName,
        customerPhone: orderData.customerInfo.phone,
      }),
    };

    const dataString = JSON.stringify(invoiceData);
    const signature = crypto
      .createHmac('sha256', process.env.CRYPTOMUS_API_KEY)
      .update(dataString)
      .digest('hex');

    const response = await fetch('https://api.cryptomus.com/v1/payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'merchant': process.env.CRYPTOMUS_MERCHANT_ID || '',
        'sign': signature,
      },
      body: dataString,
    });

    const result = await response.json();

    if (result.state === 0) {
      return {
        success: true,
        paymentUrl: result.result.url,
        invoiceId: result.result.uuid,
        qrCode: result.result.qr,
      };
    } else {
      return {
        success: false,
        error: result.message || 'Cryptomus payment creation failed',
      };
    }
  } catch (error) {
    console.error('Cryptomus invoice creation error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Crypto payment creation failed',
    };
  }
}

// Database operations (simplified for demo)
async function createOrder(orderData: any, paymentData: any) {
  try {
    // In a real implementation, this would save to your database
    const order = {
      id: Date.now(),
      productId: orderData.productId,
      productTitle: orderData.productTitle,
      amount: orderData.amount,
      paymentMethod: orderData.paymentMethod,
      customerInfo: orderData.customerInfo,
      paymentData: paymentData,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };

    console.log('Order created:', order);
    return order;
  } catch (error) {
    console.error('Database error creating order:', error);
    throw new Error('Failed to create order');
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const requiredFields = ['productId', 'productTitle', 'amount', 'paymentMethod', 'customerInfo'];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `${field} is required` },
          { status: 400 }
        );
      }
    }

    // Validate customer info
    const { fullName, email, phone } = body.customerInfo;
    if (!fullName || !email || !phone) {
      return NextResponse.json(
        { error: 'Complete customer information is required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate amount
    if (typeof body.amount !== 'number' || body.amount <= 0) {
      return NextResponse.json(
        { error: 'Invalid amount' },
        { status: 400 }
      );
    }

    // Validate payment method
    if (!['stripe', 'cryptomus'].includes(body.paymentMethod)) {
      return NextResponse.json(
        { error: 'Invalid payment method' },
        { status: 400 }
      );
    }

    let paymentResult;

    // Create payment based on method
    if (body.paymentMethod === 'stripe') {
      paymentResult = await createStripeCheckout(body);
    } else if (body.paymentMethod === 'cryptomus') {
      paymentResult = await createCryptomusInvoice(body);
    }

    if (!paymentResult?.success) {
      return NextResponse.json(
        { error: paymentResult?.error || 'Payment creation failed' },
        { status: 500 }
      );
    }

    // Create order in database
    const order = await createOrder(body, paymentResult);

    return NextResponse.json({
      orderId: order.id,
      ...paymentResult,
    });

  } catch (error) {
    console.error('Payment creation error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}