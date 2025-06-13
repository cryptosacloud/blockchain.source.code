'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, User, MessageSquare, Send, CheckCircle, Cpu, Zap, Shield } from 'lucide-react';

const enquiryTypes = [
  { value: 'general', label: 'General Enquiry' },
  { value: 'custom-development', label: 'Custom Development' },
  { value: 'consultation', label: 'Consultation' },
  { value: 'support', label: 'Technical Support' },
  { value: 'partnership', label: 'Partnership' },
  { value: 'pricing', label: 'Pricing Information' },
  { value: 'other', label: 'Other' },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    enquiryType: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.enquiryType) newErrors.enquiryType = 'Enquiry type is required';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (formData.message.length > 2000) newErrors.message = 'Message must be less than 2000 characters';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
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
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          enquiryType: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error(result.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error sending your message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center p-4">
        <Card className="max-w-md w-full bg-gray-800/50 backdrop-blur-lg border-green-500/30 text-white rounded-2xl cyber-glow">
          <CardHeader className="text-center">
            <div className="bg-green-500/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-green-400" />
            </div>
            <CardTitle className="text-2xl text-green-400">Message Sent!</CardTitle>
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gray-800/50 backdrop-blur-lg border border-cyan-500/30 rounded-full px-6 py-3 mb-8">
            <Cpu className="h-5 w-5 text-cyan-400 animate-pulse" />
            <span className="text-cyan-400 font-medium">Contact Interface</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent neon-text">
              Get In Touch
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Have a question about our blockchain development services? 
            Need a custom solution for your project? Send us a message and our 
            <span className="text-purple-400 font-semibold"> cyberpunk experts </span> 
            will get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-gray-800/50 backdrop-blur-lg border-cyan-500/30 text-white rounded-2xl">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <MessageSquare className="mr-3 h-6 w-6 text-cyan-400" />
                  Send Us a Message
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Fill out the form below and we'll respond to your enquiry as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="fullName" className="text-cyan-400 flex items-center mb-2">
                        <User className="mr-2 h-4 w-4" />
                        Full Name *
                      </Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 rounded-xl cyber-glow"
                        placeholder="Enter your full name"
                      />
                      {errors.fullName && <p className="text-red-400 text-sm mt-1">{errors.fullName}</p>}
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-cyan-400 flex items-center mb-2">
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
                      />
                      {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-cyan-400 flex items-center mb-2">
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
                  </div>

                  {/* Enquiry Type */}
                  <div>
                    <Label className="text-cyan-400 flex items-center mb-2">
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
                    <Label htmlFor="subject" className="text-cyan-400 flex items-center mb-2">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 rounded-xl cyber-glow"
                      placeholder="Brief description of your enquiry"
                    />
                    {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <Label htmlFor="message" className="text-cyan-400 flex items-center mb-2">
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
                    />
                    <div className="flex justify-between items-center mt-1">
                      {errors.message && <p className="text-red-400 text-sm">{errors.message}</p>}
                      <p className="text-gray-400 text-sm ml-auto">{formData.message.length}/2000</p>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white py-4 text-lg font-semibold rounded-xl cyber-glow transition-all duration-300 transform hover:scale-105"
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
            <Card className="bg-gray-800/50 backdrop-blur-lg border-purple-500/30 text-white rounded-2xl sticky top-8">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Shield className="mr-3 h-5 w-5 text-purple-400" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-cyan-500/20 p-2 rounded-lg">
                      <Mail className="h-5 w-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="text-white">hello@blockchaincoders.dev</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="bg-purple-500/20 p-2 rounded-lg">
                      <Phone className="h-5 w-5 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Response Time</p>
                      <p className="text-white">Within 24 hours</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-600 pt-6">
                  <h4 className="text-lg font-semibold mb-4 text-purple-400">What to Expect</h4>
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

                <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 p-4 rounded-xl border border-cyan-500/20">
                  <h4 className="font-semibold mb-2 text-cyan-400">Need Immediate Help?</h4>
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