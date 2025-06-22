'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { CreditCard, Wallet, User, Mail, Phone, ShoppingCart, X, CheckCircle, AlertCircle, Loader2, Flame } from 'lucide-react';
import { Product } from '@/lib/products';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
}

interface CustomerInfo {
  fullName: string;
  email: string;
  phone: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  general?: string;
}

export function PaymentModal({ isOpen, onClose, product }: PaymentModalProps) {
  const [paymentMethod, setPaymentMethod] = useState<'stripe' | 'cryptomus' | null>(null);
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    fullName: '',
    email: '',
    phone: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingStep, setProcessingStep] = useState('');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!customerInfo.fullName.trim() || customerInfo.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters';
    }

    if (!customerInfo.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(customerInfo.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!customerInfo.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\+]?[1-9][\d\s\-\(\)]{7,15}$/.test(customerInfo.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!paymentMethod) {
      newErrors.general = 'Please select a payment method';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof CustomerInfo, value: string) => {
    setCustomerInfo(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handlePayment = async () => {
    if (!validateForm()) return;

    setIsProcessing(true);
    setErrors({});

    try {
      setProcessingStep('Creating order...');

      const orderData = {
        productId: product.id,
        productTitle: product.title,
        amount: parseFloat(product.price.replace('$', '')),
        paymentMethod,
        customerInfo,
        productData: {
          category: product.category,
          features: product.features
        }
      };

      const response = await fetch('/api/payments/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Payment creation failed');
      }

      if (paymentMethod === 'stripe') {
        setProcessingStep('Redirecting to Stripe...');
        // Redirect to Stripe Checkout
        window.location.href = result.checkoutUrl;
      } else if (paymentMethod === 'cryptomus') {
        setProcessingStep('Redirecting to crypto payment...');
        // Redirect to Cryptomus payment page
        window.location.href = result.paymentUrl;
      }

    } catch (error) {
      console.error('Payment error:', error);
      setErrors({ 
        general: error instanceof Error ? error.message : 'Payment processing failed. Please try again.' 
      });
      setIsProcessing(false);
      setProcessingStep('');
    }
  };

  const resetModal = () => {
    setPaymentMethod(null);
    setCustomerInfo({ fullName: '', email: '', phone: '' });
    setErrors({});
    setIsProcessing(false);
    setProcessingStep('');
  };

  const handleClose = () => {
    if (!isProcessing) {
      resetModal();
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl bg-gray-900 border-red-500/30 text-white">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-red-600 to-orange-600 p-2 rounded-full">
                <ShoppingCart className="h-6 w-6 text-white" />
              </div>
              <div>
                <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                  Complete Your Purchase
                </DialogTitle>
                <DialogDescription className="text-gray-300">
                  Secure payment processing for your Web3 solution
                </DialogDescription>
              </div>
            </div>
            {!isProcessing && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleClose}
                className="text-gray-400 hover:text-white"
              >
                <X className="h-5 w-5" />
              </Button>
            )}
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Product Summary */}
          <Card className="bg-gray-800/50 border-orange-500/30">
            <CardHeader className="pb-4">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg text-orange-400">{product.title}</CardTitle>
                  <CardDescription className="text-gray-300 mt-1">
                    {product.description}
                  </CardDescription>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                    {product.price}
                  </div>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30 mt-1">
                    One-time Payment
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {product.features.slice(0, 4).map((feature, index) => (
                  <Badge key={index} variant="secondary" className="text-xs bg-gray-700/50 text-gray-300">
                    {feature}
                  </Badge>
                ))}
                {product.features.length > 4 && (
                  <Badge variant="secondary" className="text-xs bg-gray-700/50 text-gray-300">
                    +{product.features.length - 4} more
                  </Badge>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Customer Information */}
          <Card className="bg-gray-800/50 border-red-500/30">
            <CardHeader>
              <CardTitle className="text-lg flex items-center text-red-400">
                <User className="mr-2 h-5 w-5" />
                Customer Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="fullName" className="text-gray-300">Full Name *</Label>
                <Input
                  id="fullName"
                  value={customerInfo.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className="bg-gray-700/50 border-gray-600 text-white mt-1"
                  placeholder="Enter your full name"
                  disabled={isProcessing}
                />
                {errors.fullName && <p className="text-red-400 text-sm mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <Label htmlFor="email" className="text-gray-300">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={customerInfo.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="bg-gray-700/50 border-gray-600 text-white mt-1"
                  placeholder="Enter your email address"
                  disabled={isProcessing}
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <Label htmlFor="phone" className="text-gray-300">Phone Number *</Label>
                <Input
                  id="phone"
                  value={customerInfo.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="bg-gray-700/50 border-gray-600 text-white mt-1"
                  placeholder="Enter your phone number"
                  disabled={isProcessing}
                />
                {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
              </div>
            </CardContent>
          </Card>

          {/* Payment Method Selection */}
          <Card className="bg-gray-800/50 border-blue-500/30">
            <CardHeader>
              <CardTitle className="text-lg flex items-center text-blue-400">
                <Wallet className="mr-2 h-5 w-5" />
                Payment Method
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Stripe Payment */}
                <div
                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                    paymentMethod === 'stripe'
                      ? 'border-blue-500 bg-blue-500/10'
                      : 'border-gray-600 hover:border-blue-400'
                  } ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''}`}
                  onClick={() => !isProcessing && setPaymentMethod('stripe')}
                >
                  <div className="flex items-center space-x-3">
                    <CreditCard className="h-8 w-8 text-blue-400" />
                    <div>
                      <h3 className="font-semibold text-white">Credit/Debit Card</h3>
                      <p className="text-sm text-gray-400">Secure payment via Stripe</p>
                    </div>
                  </div>
                  {paymentMethod === 'stripe' && (
                    <div className="mt-3 flex items-center text-blue-400">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      <span className="text-sm">Selected</span>
                    </div>
                  )}
                </div>

                {/* Cryptomus Payment */}
                <div
                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                    paymentMethod === 'cryptomus'
                      ? 'border-orange-500 bg-orange-500/10'
                      : 'border-gray-600 hover:border-orange-400'
                  } ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''}`}
                  onClick={() => !isProcessing && setPaymentMethod('cryptomus')}
                >
                  <div className="flex items-center space-x-3">
                    <Flame className="h-8 w-8 text-orange-400" />
                    <div>
                      <h3 className="font-semibold text-white">Cryptocurrency</h3>
                      <p className="text-sm text-gray-400">Pay with USDT, BTC, ETH</p>
                    </div>
                  </div>
                  {paymentMethod === 'cryptomus' && (
                    <div className="mt-3 flex items-center text-orange-400">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      <span className="text-sm">Selected</span>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Error Display */}
          {errors.general && (
            <Card className="bg-red-500/10 border-red-500/30">
              <CardContent className="p-4">
                <div className="flex items-center space-x-2 text-red-400">
                  <AlertCircle className="h-5 w-5" />
                  <span>{errors.general}</span>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Processing Status */}
          {isProcessing && (
            <Card className="bg-blue-500/10 border-blue-500/30">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3 text-blue-400">
                  <Loader2 className="h-5 w-5 animate-spin" />
                  <span>{processingStep}</span>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button
              variant="outline"
              onClick={handleClose}
              disabled={isProcessing}
              className="flex-1 border-gray-600 text-gray-300 hover:border-red-400 hover:text-red-400"
            >
              Cancel
            </Button>
            <Button
              onClick={handlePayment}
              disabled={isProcessing || !paymentMethod}
              className="flex-1 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-500 hover:to-blue-500 text-white"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Complete Purchase {product.price}
                </>
              )}
            </Button>
          </div>

          {/* Security Notice */}
          <div className="text-center text-sm text-gray-400">
            <p>🔒 Your payment information is secure and encrypted</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}