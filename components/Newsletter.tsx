'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Gift, Cpu, Zap, Shield, Flame } from 'lucide-react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-red-900 to-orange-900 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Card className="bg-gray-800/50 backdrop-blur-lg border-red-500/30 text-white rounded-3xl overflow-hidden cyber-glow">
          <CardHeader className="text-center pb-8">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-red-600 to-orange-600 p-4 rounded-full cyber-glow">
                <Gift className="h-10 w-10 text-white" />
              </div>
            </div>
            <CardTitle className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent neon-text">
                Get Free Revolutionary Resources
              </span>
            </CardTitle>
            <CardDescription className="text-xl text-gray-300 leading-relaxed">
              Join 50,000+ developers and get exclusive access to free design templates, tutorials, 
              and the latest Web3 development resources delivered to your 
              <span className="text-red-400 font-semibold"> revolutionary interface</span>.
            </CardDescription>
          </CardHeader>
          
          <CardContent className="px-8 pb-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 rounded-xl h-12 cyber-glow"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 rounded-xl h-12 cyber-glow"
                    required
                  />
                </div>
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white py-4 text-lg font-semibold rounded-xl cyber-glow transition-all duration-300 transform hover:scale-105"
                disabled={isSubmitted}
              >
                {isSubmitted ? (
                  <>
                    <Shield className="mr-2 h-5 w-5" />
                    Data Transmitted Successfully!
                  </>
                ) : (
                  <>
                    <Mail className="mr-2 h-5 w-5" />
                    Join the Revolution - It's Free!
                  </>
                )}
              </Button>
            </form>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-gray-700/30 backdrop-blur-lg rounded-2xl p-6 border border-red-500/20 holographic">
                <Flame className="h-8 w-8 text-red-400 mx-auto mb-4" />
                <h4 className="font-semibold mb-2 text-red-400">Free Templates</h4>
                <p className="text-sm text-gray-300">Get access to revolutionary design templates from the future</p>
              </div>
              <div className="bg-gray-700/30 backdrop-blur-lg rounded-2xl p-6 border border-orange-500/20 holographic">
                <Zap className="h-8 w-8 text-orange-400 mx-auto mb-4" />
                <h4 className="font-semibold mb-2 text-orange-400">Weekly Tutorials</h4>
                <p className="text-sm text-gray-300">Step-by-step Web3 development guides</p>
              </div>
              <div className="bg-gray-700/30 backdrop-blur-lg rounded-2xl p-6 border border-yellow-500/20 holographic">
                <Shield className="h-8 w-8 text-yellow-400 mx-auto mb-4" />
                <h4 className="font-semibold mb-2 text-yellow-400">Industry Updates</h4>
                <p className="text-sm text-gray-300">Latest trends and opportunities in the Web3 revolution</p>
              </div>
            </div>

            <p className="text-center text-sm text-gray-400 mt-8">
              No spam, unsubscribe at any time. We respect your digital privacy.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}