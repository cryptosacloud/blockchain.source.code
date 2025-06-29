'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Code, Terminal, Download, CheckCircle, Flame, Zap, Shield, Copy, ExternalLink, Database, Mail, CreditCard, Cpu } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const installationSteps = [
  {
    id: 1,
    title: 'Prerequisites',
    description: 'Install required software and tools',
    icon: Shield,
    color: 'red',
    commands: [
      'node --version  # Should be 18+',
      'npm --version   # Should be 8+',
      'git --version   # For version control'
    ],
    requirements: [
      'Node.js 18 or higher',
      'npm package manager',
      'Git for version control',
      'Code editor (VS Code recommended)'
    ]
  },
  {
    id: 2,
    title: 'Clone Repository',
    description: 'Download the source code',
    icon: Download,
    color: 'orange',
    commands: [
      'git clone https://github.com/your-repo/revolution-web3-store.git',
      'cd revolution-web3-store'
    ],
    note: 'Replace with your actual repository URL'
  },
  {
    id: 3,
    title: 'Install Dependencies',
    description: 'Install all required packages',
    icon: Terminal,
    color: 'yellow',
    commands: [
      'npm install',
      '# This will install all dependencies from package.json'
    ],
    note: 'This may take a few minutes depending on your internet connection'
  },
  {
    id: 4,
    title: 'Environment Setup',
    description: 'Configure environment variables',
    icon: Code,
    color: 'green',
    commands: [
      'cp .env.example .env',
      '# Edit .env file with your configuration'
    ],
    configSections: [
      {
        title: 'Database Configuration',
        vars: [
          'DATABASE_URL="mysql://username:password@localhost:3306/revolution_web3"',
          'DB_HOST="localhost"',
          'DB_PORT="3306"',
          'DB_NAME="revolution_web3"'
        ]
      },
      {
        title: 'Email Configuration (SMTP)',
        vars: [
          'SMTP_HOST="smtp.gmail.com"',
          'SMTP_PORT="587"',
          'SMTP_USER="your_email@gmail.com"',
          'SMTP_PASSWORD="your_app_password"'
        ]
      }
    ]
  },
  {
    id: 5,
    title: 'Database Setup',
    description: 'Create and configure database',
    icon: Database,
    color: 'blue',
    commands: [
      'mysql -u root -p -e "CREATE DATABASE revolution_web3;"',
      'mysql -u username -p revolution_web3 < supabase/migrations/20250621215202_delicate_cloud.sql',
      'mysql -u username -p revolution_web3 < supabase/migrations/20250622103215_wooden_snowflake.sql'
    ],
    note: 'Replace username with your MySQL username'
  },
  {
    id: 6,
    title: 'Build & Run',
    description: 'Start the development server',
    icon: Zap,
    color: 'purple',
    commands: [
      'npm run build',
      'npm run dev'
    ],
    note: 'The application will be available at http://localhost:3000'
  }
];

const optionalFeatures = [
  {
    title: 'Payment Integration',
    description: 'Add Stripe and Cryptomus for payments',
    icon: CreditCard,
    color: 'green',
    steps: [
      'Create Stripe account at stripe.com',
      'Get API keys from Stripe Dashboard',
      'Create Cryptomus account at cryptomus.com',
      'Add payment keys to .env file'
    ]
  },
  {
    title: 'Email Service',
    description: 'Configure SMTP for contact forms',
    icon: Mail,
    color: 'blue',
    steps: [
      'Enable 2FA on Gmail account',
      'Generate App Password in Google settings',
      'Add SMTP credentials to .env',
      'Test email delivery'
    ]
  },
  {
    title: 'Production Deployment',
    description: 'Deploy to hosting platform',
    icon: ExternalLink,
    color: 'purple',
    steps: [
      'Choose hosting platform (Vercel, Netlify)',
      'Configure environment variables',
      'Set up domain and SSL',
      'Configure webhooks for payments'
    ]
  }
];

export default function InstallationPage() {
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCommand(text);
    setTimeout(() => setCopiedCommand(null), 2000);
  };

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
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gray-800/50 backdrop-blur-lg border border-red-500/30 rounded-full px-6 py-3 mb-8">
            <Flame className="h-5 w-5 text-red-400 animate-pulse" />
            <span className="text-red-400 font-medium">Free Installation Guide</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent neon-text">
              Free Installation
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Get your revolutionary Web3 design store up and running for free. 
            Complete step-by-step installation guide with all the tools and configurations you need.
          </p>
        </div>

        {/* Quick Start */}
        <Card className="bg-gray-800/50 backdrop-blur-lg border-green-500/30 rounded-2xl mb-12">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center text-green-400">
              <Zap className="mr-3 h-6 w-6" />
              Quick Start (5 Minutes)
            </CardTitle>
            <CardDescription className="text-gray-300">
              Get started immediately with these essential commands
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
              <div className="space-y-2">
                {[
                  'git clone https://github.com/your-repo/revolution-web3-store.git',
                  'cd revolution-web3-store',
                  'npm install',
                  'cp .env.example .env',
                  'npm run dev'
                ].map((command, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-800/50 p-3 rounded border border-gray-600">
                    <code className="text-green-400 font-mono text-sm">{command}</code>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => copyToClipboard(command)}
                      className="text-gray-400 hover:text-white"
                    >
                      {copiedCommand === command ? (
                        <CheckCircle className="h-4 w-4 text-green-400" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
              <p className="text-green-400 font-semibold mb-2">🎉 That's it! Your site will be running at:</p>
              <p className="text-white font-mono">http://localhost:3000</p>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Installation Steps */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Detailed Installation Guide
            </span>
          </h2>
          
          <div className="space-y-8">
            {installationSteps.map((step, index) => {
              const Icon = step.icon;
              const colorClasses = getColorClasses(step.color);
              
              return (
                <Card key={step.id} className={`bg-gray-800/50 backdrop-blur-lg border ${colorClasses.split(' ')[0]} rounded-2xl`}>
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className={`bg-${step.color}-500/20 p-3 rounded-full`}>
                        <Icon className={`h-6 w-6 ${colorClasses.split(' ')[1]}`} />
                      </div>
                      <div>
                        <CardTitle className={`text-xl ${colorClasses.split(' ')[1]}`}>
                          Step {step.id}: {step.title}
                        </CardTitle>
                        <CardDescription className="text-gray-300">
                          {step.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {step.requirements && (
                      <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                        <h4 className={`font-semibold mb-2 ${colorClasses.split(' ')[1]}`}>Requirements:</h4>
                        <ul className="text-sm text-gray-300 space-y-1">
                          {step.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {step.commands && (
                      <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                        <h4 className={`font-semibold mb-2 ${colorClasses.split(' ')[1]}`}>Commands:</h4>
                        <div className="space-y-2">
                          {step.commands.map((command, idx) => (
                            <div key={idx} className="flex items-center justify-between bg-gray-800/50 p-3 rounded border border-gray-600">
                              <code className="text-green-400 font-mono text-sm">{command}</code>
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => copyToClipboard(command)}
                                className="text-gray-400 hover:text-white"
                              >
                                {copiedCommand === command ? (
                                  <CheckCircle className="h-4 w-4 text-green-400" />
                                ) : (
                                  <Copy className="h-4 w-4" />
                                )}
                              </Button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {step.configSections && (
                      <div className="space-y-4">
                        {step.configSections.map((section, idx) => (
                          <div key={idx} className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                            <h4 className={`font-semibold mb-2 ${colorClasses.split(' ')[1]}`}>{section.title}:</h4>
                            <div className="space-y-1">
                              {section.vars.map((variable, varIdx) => (
                                <div key={varIdx} className="flex items-center justify-between bg-gray-800/50 p-2 rounded border border-gray-600">
                                  <code className="text-blue-400 font-mono text-sm">{variable}</code>
                                  <Button
                                    size="sm"
                                    variant="ghost"
                                    onClick={() => copyToClipboard(variable)}
                                    className="text-gray-400 hover:text-white"
                                  >
                                    <Copy className="h-3 w-3" />
                                  </Button>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {step.note && (
                      <div className={`p-3 bg-${step.color}-500/10 border border-${step.color}-500/30 rounded-lg`}>
                        <p className={`text-sm ${colorClasses.split(' ')[1]}`}>
                          💡 {step.note}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Optional Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Optional Features
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {optionalFeatures.map((feature, index) => {
              const Icon = feature.icon;
              const colorClasses = getColorClasses(feature.color);
              
              return (
                <Card key={index} className={`bg-gray-800/50 backdrop-blur-lg border ${colorClasses.split(' ')[0]} rounded-2xl`}>
                  <CardHeader>
                    <div className={`bg-${feature.color}-500/20 p-3 rounded-full w-fit mb-4`}>
                      <Icon className={`h-6 w-6 ${colorClasses.split(' ')[1]}`} />
                    </div>
                    <CardTitle className={`text-lg ${colorClasses.split(' ')[1]}`}>
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-gray-300">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-gray-300 space-y-2">
                      {feature.steps.map((step, stepIdx) => (
                        <li key={stepIdx} className="flex items-start space-x-2">
                          <span className={`text-${feature.color}-400 font-bold`}>{stepIdx + 1}.</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Troubleshooting */}
        <Card className="bg-gray-800/50 backdrop-blur-lg border-yellow-500/30 rounded-2xl mb-12">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center text-yellow-400">
              <Shield className="mr-3 h-6 w-6" />
              Common Issues & Solutions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/30">
                  <h4 className="font-semibold mb-2 text-red-400">Port Already in Use</h4>
                  <p className="text-sm text-gray-300 mb-2">Error: Port 3000 is already in use</p>
                  <code className="text-green-400 text-xs">npm run dev -- --port 3001</code>
                </div>
                
                <div className="bg-orange-500/10 p-4 rounded-lg border border-orange-500/30">
                  <h4 className="font-semibold mb-2 text-orange-400">Database Connection Failed</h4>
                  <p className="text-sm text-gray-300 mb-2">Check your MySQL credentials and server status</p>
                  <code className="text-green-400 text-xs">mysql -u root -p</code>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/30">
                  <h4 className="font-semibold mb-2 text-blue-400">Module Not Found</h4>
                  <p className="text-sm text-gray-300 mb-2">Clear cache and reinstall dependencies</p>
                  <code className="text-green-400 text-xs">rm -rf node_modules && npm install</code>
                </div>
                
                <div className="bg-purple-500/10 p-4 rounded-lg border border-purple-500/30">
                  <h4 className="font-semibold mb-2 text-purple-400">Build Errors</h4>
                  <p className="text-sm text-gray-300 mb-2">Check TypeScript errors and fix them</p>
                  <code className="text-green-400 text-xs">npm run build --verbose</code>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Support */}
        <Card className="bg-gray-800/50 backdrop-blur-lg border-green-500/30 rounded-2xl">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center text-green-400">
              <Cpu className="mr-3 h-6 w-6" />
              Need Help?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-green-400">Free Support:</h4>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li>• Check the documentation in README.md</li>
                  <li>• Review the CHANGELOG.md for updates</li>
                  <li>• Search existing GitHub issues</li>
                  <li>• Join our Discord community</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-green-400">Premium Support:</h4>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li>• 1-on-1 installation assistance</li>
                  <li>• Custom configuration help</li>
                  <li>• Priority bug fixes</li>
                  <li>• Feature customization</li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-500 hover:to-blue-500 text-white px-8 py-4 text-lg font-semibold rounded-xl cyber-glow transition-all duration-300 transform hover:scale-105">
                  <Mail className="mr-2 h-5 w-5" />
                  Get Support
                </Button>
              </Link>
              <Link href="/source-code">
                <Button size="lg" variant="outline" className="border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Browse Templates
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}