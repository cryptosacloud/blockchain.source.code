'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ShoppingCart, Star, Check, Code, Zap, Shield, Flame, Cpu } from 'lucide-react';
import Link from 'next/link';
import { products } from '@/lib/products';
import { PaymentModal } from '@/components/PaymentModal';

interface ProductPageProps {
  params: {
    id: string;
  };
}

// Generate static params for all products
export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default function ProductPage({ params }: ProductPageProps) {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const product = products.find(p => p.id === parseInt(params.id));

  if (!product) {
    notFound();
  }

  const handleBuyNow = () => {
    setIsPaymentModalOpen(true);
  };

  const closePaymentModal = () => {
    setIsPaymentModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-orange-900 text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/source-code">
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:border-red-400 hover:text-red-400 rounded-xl">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Source Code
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image and Gallery */}
          <div className="space-y-6">
            <Card className="bg-gray-800/50 backdrop-blur-lg border-red-500/30 rounded-2xl overflow-hidden">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                <Badge className="absolute top-4 right-4 bg-gradient-to-r from-red-600 to-orange-600 text-white border-0">
                  {product.category}
                </Badge>
                <div className="absolute bottom-4 left-4">
                  <Flame className="h-8 w-8 text-red-400 animate-pulse" />
                </div>
              </div>
            </Card>

            {/* Technical Specifications */}
            <Card className="bg-gray-800/50 backdrop-blur-lg border-orange-500/30 rounded-2xl">
              <CardHeader>
                <CardTitle className="text-xl flex items-center text-orange-400">
                  <Cpu className="mr-3 h-6 w-6" />
                  Technical Specifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-400">Technology Stack</p>
                    <p className="text-white font-medium">React, Solidity, Web3.js</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Blockchain</p>
                    <p className="text-white font-medium">Ethereum, BSC, Polygon</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">License</p>
                    <p className="text-white font-medium">Commercial Use</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Support</p>
                    <p className="text-white font-medium">6 Months Included</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Product Header */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <span className="text-gray-300">(4.9/5 from 127 reviews)</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent neon-text">
                  {product.title}
                </span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                {product.description}
              </p>
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  {product.price}
                </span>
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                  One-time Payment
                </Badge>
              </div>
            </div>

            {/* Features */}
            <Card className="bg-gray-800/50 backdrop-blur-lg border-green-500/30 rounded-2xl">
              <CardHeader>
                <CardTitle className="text-xl flex items-center text-green-400">
                  <Shield className="mr-3 h-6 w-6" />
                  What's Included
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Additional Features */}
            <Card className="bg-gray-800/50 backdrop-blur-lg border-blue-500/30 rounded-2xl">
              <CardHeader>
                <CardTitle className="text-xl flex items-center text-blue-400">
                  <Zap className="mr-3 h-6 w-6" />
                  Revolutionary Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-blue-400 flex-shrink-0" />
                    <span className="text-gray-300">Complete source code with documentation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-blue-400 flex-shrink-0" />
                    <span className="text-gray-300">Smart contracts audited for security</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-blue-400 flex-shrink-0" />
                    <span className="text-gray-300">Deployment scripts and instructions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-blue-400 flex-shrink-0" />
                    <span className="text-gray-300">6 months of technical support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-blue-400 flex-shrink-0" />
                    <span className="text-gray-300">Commercial license included</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-blue-400 flex-shrink-0" />
                    <span className="text-gray-300">Free updates for 1 year</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Purchase Actions */}
            <div className="space-y-4">
              <Button
                onClick={handleBuyNow}
                size="lg"
                className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-500 hover:to-blue-500 text-white py-4 text-lg font-semibold rounded-xl cyber-glow transition-all duration-300 transform hover:scale-105"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Buy Now - {product.price}
              </Button>
            </div>

            {/* Guarantee */}
            <Card className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Shield className="h-6 w-6 text-green-400" />
                  <h3 className="text-lg font-semibold text-green-400">30-Day Money Back Guarantee</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  Not satisfied with your purchase? Get a full refund within 30 days, no questions asked.
                  We stand behind the quality of our revolutionary Web3 solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Detailed Description */}
        <div className="mt-16">
          <Card className="bg-gray-800/50 backdrop-blur-lg border-gray-700/50 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center text-white">
                <Code className="mr-3 h-6 w-6 text-red-400" />
                Detailed Description
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-invert max-w-none">
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  This revolutionary {product.title.toLowerCase()} represents the cutting edge of Web3 technology, 
                  designed and built by our team of expert blockchain developers. Every line of code has been 
                  crafted with security, scalability, and user experience in mind.
                </p>
                <p>
                  The codebase follows industry best practices and includes comprehensive documentation, 
                  making it easy for developers of all skill levels to understand, customize, and deploy. 
                  Whether you're building for Ethereum, Binance Smart Chain, or Polygon, this solution 
                  provides the flexibility you need.
                </p>
                <p>
                  Our {product.category.toLowerCase()} solution includes smart contracts that have been 
                  thoroughly tested and audited for security vulnerabilities. The frontend is built with 
                  modern React components and integrates seamlessly with popular Web3 wallets like MetaMask, 
                  WalletConnect, and Coinbase Wallet.
                </p>
                <p>
                  With your purchase, you'll receive not just the source code, but also deployment scripts, 
                  configuration files, and step-by-step instructions to get your project live quickly. 
                  Our technical support team is available to help you through any challenges you might encounter.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Payment Modal */}
      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={closePaymentModal}
        product={product}
      />
    </div>
  );
}