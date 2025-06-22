'use client';

import { ArrowLeft, X, RefreshCw, MessageCircle, Flame } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function CancelledPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-orange-900 text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cancelled Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-red-800/50 backdrop-blur-lg border border-red-500/30 rounded-full px-6 py-3 mb-8">
            <X className="h-5 w-5 text-red-400 animate-pulse" />
            <span className="text-red-400 font-medium">Payment Cancelled</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent neon-text">
              Payment Cancelled
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Your payment was cancelled and no charges have been made to your account.
            The revolutionary solution is still waiting for you!
          </p>
        </div>

        {/* Main Card */}
        <Card className="bg-gray-800/50 backdrop-blur-lg border-red-500/30 rounded-2xl mb-8">
          <CardHeader className="text-center">
            <div className="bg-red-500/20 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <X className="h-10 w-10 text-red-400" />
            </div>
            <CardTitle className="text-2xl text-red-400">Transaction Cancelled</CardTitle>
            <CardDescription className="text-gray-300 text-lg">
              Don't worry - you can try again anytime. Your revolutionary Web3 solution is still available.
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* What Happened */}
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
              <h3 className="font-semibold mb-2 text-red-400">What happened?</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Payment process was cancelled by user</li>
                <li>• No charges were made to your payment method</li>
                <li>• Your selected product is still available for purchase</li>
                <li>• All your information remains secure</li>
              </ul>
            </div>

            {/* Next Steps */}
            <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
              <h3 className="font-semibold mb-2 text-orange-400">What's next?</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Try the payment process again</li>
                <li>• Choose a different payment method</li>
                <li>• Contact our support team if you need help</li>
                <li>• Browse other revolutionary solutions</li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link href="/source-code">
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-500 hover:to-blue-500 text-white py-4 text-lg font-semibold rounded-xl cyber-glow transition-all duration-300 transform hover:scale-105"
                  >
                    <RefreshCw className="mr-2 h-5 w-5" />
                    Try Again
                  </Button>
                </Link>
                
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Get Help
                  </Button>
                </Link>
              </div>
              
              <Link href="/">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-gray-600 text-gray-300 hover:border-red-400 hover:text-red-400 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
                >
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Return to Home
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Support Information */}
        <Card className="bg-gray-800/50 backdrop-blur-lg border-gray-700/50 rounded-2xl">
          <CardHeader>
            <CardTitle className="text-xl flex items-center text-orange-400">
              <Flame className="mr-3 h-6 w-6" />
              Need Revolutionary Support?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 mb-4">
              Our revolutionary support team is here to help you complete your purchase and get started with your Web3 solution.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-700/30 rounded-lg p-4">
                <h4 className="font-semibold mb-2 text-orange-400">Contact Options</h4>
                <div className="text-sm text-gray-300 space-y-1">
                  <p>📧 hello@revolutionweb3.store</p>
                  <p>💬 Live chat support</p>
                  <p>⚡ 24/7 availability</p>
                </div>
              </div>
              
              <div className="bg-gray-700/30 rounded-lg p-4">
                <h4 className="font-semibold mb-2 text-green-400">Common Solutions</h4>
                <div className="text-sm text-gray-300 space-y-1">
                  <p>• Check payment method details</p>
                  <p>• Try a different browser</p>
                  <p>• Disable ad blockers</p>
                  <p>• Use alternative payment method</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security Notice */}
        <div className="text-center mt-8">
          <div className="bg-gray-800/30 backdrop-blur-lg border border-gray-700/50 rounded-xl p-4">
            <p className="text-sm text-gray-400">
              🔒 Your payment information is always secure and encrypted. 
              No sensitive data is stored when payments are cancelled.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}