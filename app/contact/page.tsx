'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, User, MessageSquare, Send, CheckCircle, Cpu, Zap, Shield, Flame } from 'lucide-react';

const enquiryTypes = [
  { value: 'general', label: 'General Enquiry' },
  { value: 'custom-development', label: 'Custom Development' },
  { value: 'consultation', label: 'Consultation' },
  { value: 'support', label: 'Technical Support' },
  { value: 'partnership', label: 'Partnership' },
  { value: 'pricing', label: 'Pricing Information' },
  { value: 'other', label: 'Other' },
];

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  enquiryType: string;
  subject: string;
  message: string;
  honeypot: string; // Hidden field for spam prevention
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  enquiryType?: string;
  subject?: string;
  message?: string;
  general?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    enquiryType: '',
    subject: '',
    message: '',
    honeypot: '', // Hidden honeypot field
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: FormErrors = {};
    
    // Client-side validation
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters long';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (formData.phone && !/^[\+]?[1-9][\d\s\-\(\)]{7,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.enquiryType) {
      newErrors.enquiryType = 'Enquiry type is required';
    }
    
    if (!formData.subject.trim() || formData.subject.trim().length < 5) {
      newErrors.subject = 'Subject must be at least 5 characters long';
    }
    
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
    
    if (formData.message.length > 2000) {
      newErrors.message = 'Message must be less than 2000 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    setErrors({});
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      
      if (response.ok) {
        setIsSubmitted(true);
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          enquiryType: '',
          subject: '',
          message: '',
          honeypot: '',
        });
      } else {
        // Handle validation errors from server
        if (result.details) {
          setErrors(result.details);
        } else {
          setErrors({ general: result.error || 'Failed to send message' });
        }
      }
    } catch (error) {
      console.error('Error:', error);
      setErrors({ general: 'Network error. Please check your connection and try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-orange-900 flex items-center justify-center p-4">
        <Card className="max-w-md w-full bg-gray-800/50 backdrop-blur-lg border-green-500/30 text-white rounded-2xl cyber-glow">
          <CardHeader className="text-center">
            <div className="bg-green-500/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-green-400" />
            </div>
            <CardTitle className="text-2xl text-green-400">Message Sent Successfully!</CardTitle>
            <CardDescription className="text-gray-300">
              Thank you for your enquiry. We'll get back to you within 24 hours.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              onClick={() => setIsSubmitted(false)}
              className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-500 hover:to-blue-500"
            >
              Send Another Message
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-orange-900 text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gray-800/50 backdrop-blur-lg border border-red-500/30 rounded-full px-6 py-3 mb-8">
            <Flame className="h-5 w-5 text-red-400 animate-pulse" />
            <span className="text-red-400 font-medium">Contact Interface</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent neon-text">
              Get In Touch
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Have a question about our revolutionary Web3 design services? 
            Need a custom solution for your project? Send us a message and our 
            <span className="text-orange-400 font-semibold"> revolutionary experts </span> 
            will get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-gray-800/50 backdrop-blur-lg border-red-500/30 text-white rounded-2xl">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <MessageSquare className="mr-3 h-6 w-6 text-red-400" />
                  Send Us a Message
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Fill out the form below and we'll respond to your enquiry as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                {errors.general && (
                  <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 mb-6">
                    <p className="text-red-400 text-sm">{errors.general}</p>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot field - hidden from users */}
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={(e) => handleInputChange('honeypot', e.target.value)}
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="fullName" className="text-red-400 flex items-center mb-2">
                        <User className="mr-2 h-4 w-4" />
                        Full Name *
                      </Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 rounded-xl cyber-glow"
                        placeholder="Enter your full name"
                        required
                      />
                      {errors.fullName && <p className="text-red-400 text-sm mt-1">{errors.fullName}</p>}
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-red-400 flex items-center mb-2">
                        <Mail className="mr-2 h-4 w-4" />
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 rounded-xl cyber-glow"
                        placeholder="Enter your email"
                        required
                      />
                      {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-red-400 flex items-center mb-2">
                      <Phone className="mr-2 h-4 w-4" />
                      Phone Number (Optional)
                    </Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 rounded-xl cyber-glow"
                      placeholder="Enter your phone number"
                    />
                    {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
                  </div>

                  {/* Enquiry Type */}
                  <div>
                    <Label className="text-red-400 flex items-center mb-2">
                      <Zap className="mr-2 h-4 w-4" />
                      Enquiry Type *
                    </Label>
                    <Select value={formData.enquiryType} onValueChange={(value) => handleInputChange('enquiryType', value)}>
                      <SelectTrigger className="bg-gray-700/50 border-gray-600 text-white rounded-xl cyber-glow">
                        <SelectValue placeholder="Select enquiry type" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-600">
                        {enquiryTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value} className="text-white hover:bg-gray-700">
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.enquiryType && <p className="text-red-400 text-sm mt-1">{errors.enquiryType}</p>}
                  </div>

                  {/* Subject */}
                  <div>
                    <Label htmlFor="subject" className="text-red-400 flex items-center mb-2">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 rounded-xl cyber-glow"
                      placeholder="Brief description of your enquiry"
                      required
                    />
                    {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <Label htmlFor="message" className="text-red-400 flex items-center mb-2">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      maxLength={2000}
                      className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 rounded-xl cyber-glow min-h-[120px]"
                      placeholder="Tell us about your project, requirements, or questions..."
                      required
                    />
                    <div className="flex justify-between items-center mt-1">
                      {errors.message && <p className="text-red-400 text-sm">{errors.message}</p>}
                      <p className="text-gray-400 text-sm ml-auto">{formData.message.length}/2000</p>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white py-4 text-lg font-semibold rounded-xl cyber-glow transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Transmitting...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card className="bg-gray-800/50 backdrop-blur-lg border-orange-500/30 text-white rounded-2xl sticky top-8">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Shield className="mr-3 h-5 w-5 text-orange-400" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-red-500/20 p-2 rounded-lg">
                      <Mail className="h-5 w-5 text-red-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="text-white">hello@revolutionweb3.store</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="bg-orange-500/20 p-2 rounded-lg">
                      <Phone className="h-5 w-5 text-orange-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Response Time</p>
                      <p className="text-white">Within 24 hours</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-600 pt-6">
                  <h4 className="text-lg font-semibold mb-4 text-orange-400">What to Expect</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-sm text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span>Quick response within 24 hours</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span>Detailed project consultation</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span>Custom solution recommendations</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span>Transparent pricing information</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 p-4 rounded-xl border border-red-500/20">
                  <h4 className="font-semibold mb-2 text-red-400">Need Immediate Help?</h4>
                  <p className="text-sm text-gray-300 mb-3">
                    For urgent technical support or time-sensitive projects, mention "URGENT" in your subject line.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}