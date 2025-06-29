'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Flame, Zap, Shield, Cpu, Mail, CreditCard, ExternalLink, Users, Clock, Star } from 'lucide-react';
import Link from 'next/link';

const serviceFeatures = [
  {
    id: 1,
    title: 'Complete Server Setup',
    description: 'We handle all server configuration, database setup, and environment optimization.',
    icon: Shield,
    color: 'red',
    benefits: [
      'Professional server configuration',
      'Database setup and optimization',
      'SSL certificate installation',
      'Security hardening'
    ]
  },
  {
    id: 2,
    title: 'Script Installation',
    description: 'All purchased scripts are installed, configured, and tested on your server.',
    icon: Cpu,
    color: 'orange',
    benefits: [
      'Complete script installation',
      'Configuration optimization',
      'Testing and validation',
      'Performance tuning'
    ]
  },
  {
    id: 3,
    title: 'Payment Integration',
    description: 'Full payment gateway setup including Stripe and cryptocurrency processors.',
    icon: CreditCard,
    color: 'green',
    benefits: [
      'Stripe payment setup',
      'Cryptocurrency integration',
      'Webhook configuration',
      'Transaction testing'
    ]
  },
  {
    id: 4,
    title: 'Email Configuration',
    description: 'SMTP setup for contact forms, notifications, and automated emails.',
    icon: Mail,
    color: 'blue',
    benefits: [
      'SMTP server configuration',
      'Email template setup',
      'Delivery optimization',
      'Spam prevention'
    ]
  }
];

const packages = [
  {
    id: 1,
    name: 'Basic Setup',
    price: 'FREE',
    originalPrice: '$299',
    description: 'Complete installation of any single script purchase',
    features: [
      'Server setup and configuration',
      'Script installation and testing',
      'Basic security configuration',
      'Email support for 7 days'
    ],
    popular: false,
    color: 'blue'
  },
  {
    id: 2,
    name: 'Premium Setup',
    price: 'FREE',
    originalPrice: '$599',
    description: 'Advanced setup with multiple scripts and optimization',
    features: [
      'Everything in Basic Setup',
      'Multiple script installation',
      'Payment gateway integration',
      'Performance optimization',
      'Priority support for 30 days'
    ],
    popular: true,
    color: 'orange'
  },
  {
    id: 3,
    name: 'Enterprise Setup',
    price: 'FREE',
    originalPrice: '$999',
    description: 'Complete enterprise solution with custom configuration',
    features: [
      'Everything in Premium Setup',
      'Custom domain configuration',
      'Advanced security setup',
      'Load balancing configuration',
      'Dedicated support for 90 days'
    ],
    popular: false,
    color: 'purple'
  }
];

const testimonials = [
  {
    name: 'Alex Chen',
    role: 'Blockchain Developer',
    content: 'The free installation service saved me weeks of setup time. Everything was configured perfectly!',
    rating: 5
  },
  {
    name: 'Sarah Johnson',
    role: 'Startup Founder',
    content: 'Professional setup with zero hassle. My NFT marketplace was live in 24 hours.',
    rating: 5
  },
  {
    name: 'Mike Rodriguez',
    role: 'DeFi Project Lead',
    content: 'Exceptional service! They handled everything from server setup to payment integration.',
    rating: 5
  }
];

export default function InstallationPage() {
  const getColorClasses = (color: string) => {
    const colors = {
      red: 'border-red-500/30 text-red-400',
      orange: 'border-orange-500/30 text-orange-400',
      yellow: 'border-yellow-500/30 text-yellow-400',
      green: 'border-green-500/30 text-green-400',
      blue: 'border-blue-500/30 text-blue-400',
      purple: 'border-purple-500/30 text-purple-400'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-orange-900 text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gray-800/50 backdrop-blur-lg border border-green-500/30 rounded-full px-6 py-3 mb-8">
            <CheckCircle className="h-5 w-5 text-green-400 animate-pulse" />
            <span className="text-green-400 font-medium">100% Free Installation Service</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent neon-text">
              Free Professional Setup
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We provide completely free server setup and installation with every script purchase. 
            Our expert team handles everything so you can focus on your business, not technical setup.
          </p>
        </div>

        {/* Value Proposition */}
        <Card className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-2xl mb-16">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="bg-green-500/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-green-400">100% Free</h3>
                <p className="text-gray-300">No hidden costs or setup fees. Completely free with any purchase.</p>
              </div>
              <div>
                <div className="bg-blue-500/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-blue-400">24-48 Hours</h3>
                <p className="text-gray-300">Your script will be live and ready within 24-48 hours of purchase.</p>
              </div>
              <div>
                <div className="bg-purple-500/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-purple-400">Expert Team</h3>
                <p className="text-gray-300">Professional developers with years of blockchain experience.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Service Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              What's Included in Your Free Setup
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceFeatures.map((feature) => {
              const Icon = feature.icon;
              const colorClasses = getColorClasses(feature.color);
              
              return (
                <Card key={feature.id} className={`bg-gray-800/50 backdrop-blur-lg border ${colorClasses.split(' ')[0]} rounded-2xl`}>
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className={`bg-${feature.color}-500/20 p-3 rounded-full`}>
                        <Icon className={`h-6 w-6 ${colorClasses.split(' ')[1]}`} />
                      </div>
                      <div>
                        <CardTitle className={`text-xl ${colorClasses.split(' ')[1]}`}>
                          {feature.title}
                        </CardTitle>
                        <CardDescription className="text-gray-300">
                          {feature.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Setup Packages */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Free Setup Packages
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <Card key={pkg.id} className={`bg-gray-800/50 backdrop-blur-lg border-${pkg.color}-500/30 rounded-2xl relative ${pkg.popular ? 'ring-2 ring-orange-500/50' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-orange-600 to-red-600 text-white border-0 px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className={`text-2xl text-${pkg.color}-400`}>{pkg.name}</CardTitle>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-green-400">{pkg.price}</div>
                    <div className="text-lg text-gray-400 line-through">{pkg.originalPrice}</div>
                  </div>
                  <CardDescription className="text-gray-300">
                    {pkg.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6">
                    <Link href="/source-code">
                      <Button className={`w-full bg-gradient-to-r from-${pkg.color}-600 to-${pkg.color === 'blue' ? 'purple' : pkg.color === 'orange' ? 'red' : 'pink'}-600 hover:from-${pkg.color}-500 hover:to-${pkg.color === 'blue' ? 'purple' : pkg.color === 'orange' ? 'red' : 'pink'}-500 text-white py-3 text-lg font-semibold rounded-xl cyber-glow transition-all duration-300 transform hover:scale-105`}>
                        Get Started Free
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Process Timeline */}
        <Card className="bg-gray-800/50 backdrop-blur-lg border-cyan-500/30 rounded-2xl mb-16">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-cyan-400">
              Simple 4-Step Process
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-cyan-500/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-cyan-400 font-bold text-xl">1</span>
                </div>
                <h4 className="font-semibold text-cyan-400 mb-2">Purchase Script</h4>
                <p className="text-sm text-gray-300">Choose and purchase any script from our collection</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-500/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-green-400 font-bold text-xl">2</span>
                </div>
                <h4 className="font-semibold text-green-400 mb-2">Provide Details</h4>
                <p className="text-sm text-gray-300">Share your server details and requirements</p>
              </div>
              
              <div className="text-center">
                <div className="bg-orange-500/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-orange-400 font-bold text-xl">3</span>
                </div>
                <h4 className="font-semibold text-orange-400 mb-2">We Install</h4>
                <p className="text-sm text-gray-300">Our team handles complete setup and configuration</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-500/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-purple-400 font-bold text-xl">4</span>
                </div>
                <h4 className="font-semibold text-purple-400 mb-2">Go Live</h4>
                <p className="text-sm text-gray-300">Your script is live and ready for business</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              What Our Customers Say
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gray-800/50 backdrop-blur-lg border-yellow-500/30 rounded-2xl">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Support Information */}
        <Card className="bg-gray-800/50 backdrop-blur-lg border-green-500/30 rounded-2xl mb-16">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center text-green-400">
              <Cpu className="mr-3 h-6 w-6" />
              Ongoing Support Included
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-green-400">Free Support Includes:</h4>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li>• Initial setup and configuration</li>
                  <li>• Testing and validation</li>
                  <li>• Basic troubleshooting</li>
                  <li>• Email support for setup period</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-green-400">Extended Support Available:</h4>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li>• Priority technical support</li>
                  <li>• Custom modifications</li>
                  <li>• Performance optimization</li>
                  <li>• Ongoing maintenance packages</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Ready to Get Started?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Choose any script and get professional installation completely free. 
            No technical knowledge required!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/source-code">
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-500 hover:to-blue-500 text-white px-8 py-4 text-lg font-semibold rounded-xl cyber-glow transition-all duration-300 transform hover:scale-105">
                <Flame className="mr-2 h-5 w-5" />
                Browse Scripts
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105">
                <Mail className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}