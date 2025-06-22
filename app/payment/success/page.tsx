'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { CheckCircle, ArrowLeft, Download, Mail, Flame, Cpu } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { products } from '@/lib/products';

export default function PaymentSuccessPage() {
  const searchParams = useSearchParams();
  const [paymentDetails, setPaymentDetails] = useState<{
    sessionId?: string;
    productId?: string;
    amount?: string;
    currency?: string;
  }>({});
  const [product, setProduct] = useState<typeof products[0] | null>(null);

  useEffect(() => {
    const sessionId = searchParams.get('session_id');
    const productId = searchParams.get('product_id');
    const amount = searchParams.get('amount');
    const currency = searchParams.get('currency');

    setPaymentDetails({
      sessionId: sessionId || undefined,
      productId: productId || undefined,
      amount: amount || undefined,
      currency: currency || undefined,
    });

    // Find the product
    if (productId) {
      const foundProduct = products.find(p => p.id === parseInt(productId));
      setProduct(foundProduct || null);
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-blue-900 text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-green-800/50 backdrop-blur-lg border border-green-500/30 rounded-full px-6 py-3 mb-8">
            <CheckCircle className="h-5 w-5 text-green-400 animate-pulse" />
            <span className="text-green-400 font-medium">Payment Successful</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent neon-text">
              Purchase Complete!
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Thank you for your purchase! Your revolutionary Web3 solution is ready for download.
            You'll receive a confirmation email with all the details shortly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Details */}
          {product && (
            <Card className="bg-gray-800/50 backdrop-blur-lg border-green-500/30 rounded-2xl">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-gradient-to-r from-green-600 to-blue-600 p-2 rounded-full">
                    <Cpu className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-green-400">Your Purchase</CardTitle>
                    <CardDescription className="text-gray-300">
                      Revolutionary Web3 solution ready for deployment
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  <Badge className="absolute top-4 right-4 bg-gradient-to-r from-green-600 to-blue-600 text-white border-0">
                    {product.category}
                  </Badge>
                  <div className="absolute bottom-4 left-4">
                    <Flame className="h-6 w-6 text-green-400 animate-pulse" />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{product.title}</h3>
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                      {product.price}
                    </span>
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                      Purchased
                    </Badge>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-green-400">What's Included:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Download & Next Steps */}
          <div className="space-y-6">
            {/* Download Section */}
            <Card className="bg-gray-800/50 backdrop-blur-lg border-blue-500/30 rounded-2xl">
              <CardHeader>
                <CardTitle className="text-xl flex items-center text-blue-400">
                  <Download className="mr-3 h-6 w-6" />
                  Download Your Files
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">
                  Your revolutionary Web3 solution is ready for download. Click the button below to access your files.
                </p>
                
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-500 hover:to-blue-500 text-white py-4 text-lg font-semibold rounded-xl cyber-glow transition-all duration-300 transform hover:scale-105"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Source Code
                </Button>

                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-blue-400">Download Includes:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Complete source code with documentation</li>
                    <li>• Smart contracts (audited and tested)</li>
                    <li>• Deployment scripts and instructions</li>
                    <li>• Configuration files and examples</li>
                    <li>• 6 months of technical support</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Email Confirmation */}
            <Card className="bg-gray-800/50 backdrop-blur-lg border-orange-500/30 rounded-2xl">
              <CardHeader>
                <CardTitle className="text-xl flex items-center text-orange-400">
                  <Mail className="mr-3 h-6 w-6" />
                  Email Confirmation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  A confirmation email with your receipt and download links has been sent to your email address.
                </p>
                
                {paymentDetails.sessionId && (
                  <div className="bg-gray-700/30 rounded-lg p-4">
                    <h4 className="font-semibold mb-2 text-orange-400">Order Details:</h4>
                    <div className="text-sm text-gray-300 space-y-1">
                      <p>Order ID: {paymentDetails.sessionId}</p>
                      {paymentDetails.amount && paymentDetails.currency && (
                        <p>Amount: {paymentDetails.currency?.toUpperCase()} {paymentDetails.amount}</p>
                      )}
                      <p>Status: Completed</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Support */}
            <Card className="bg-gray-800/50 backdrop-blur-lg border-purple-500/30 rounded-2xl">
              <CardHeader>
                <CardTitle className="text-xl text-purple-400">Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Our revolutionary support team is here to help you get started with your new Web3 solution.
                </p>
                
                <div className="space-y-3">
                  <Link href="/contact">
                    <Button variant="outline" className="w-full border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white">
                      Contact Support
                    </Button>
                  </Link>
                  
                  <div className="text-sm text-gray-400 text-center">
                    <p>📧 hello@revolutionweb3.store</p>
                    <p>⚡ 24/7 Revolutionary Support</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Link href="/source-code">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Browse More Products
            </Button>
          </Link>
          
          <Link href="/">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-4 text-lg font-semibold rounded-xl cyber-glow transition-all duration-300 transform hover:scale-105"
            >
              Return to Home
            </Button>
          </Link>
        </div>

        {/* Security Notice */}
        <div className="text-center mt-12">
          <div className="bg-gray-800/30 backdrop-blur-lg border border-gray-700/50 rounded-xl p-6 max-w-2xl mx-auto">
            <h3 className="font-semibold mb-2 text-green-400">🔒 Secure Transaction Completed</h3>
            <p className="text-sm text-gray-300">
              Your payment was processed securely. All download links are unique and expire after 30 days for security.
              Keep your confirmation email safe for future reference.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}