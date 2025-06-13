'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Gift, Cpu, Zap, Shield } from 'lucide-react';

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
    <section className="py-24 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Card className="bg-gray-800/50 backdrop-blur-lg border-cyan-500/30 text-white rounded-3xl overflow-hidden cyber-glow">
          <CardHeader className="text-center pb-8">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-cyan-600 to-purple-600 p-4 rounded-full cyber-glow">
                <Gift className="h-10 w-10 text-white" />
              </div>
            </div>
            <CardTitle className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent neon-text">
                Get Free Blockchain Resources
              </span>
            </CardTitle>
            <CardDescription className="text-xl text-gray-300 leading-relaxed">
              Join 50,000+ developers and get exclusive access to free source code, tutorials, 
              and the latest Web3 development resources delivered to your 
              <span className="text-cyan-400 font-semibold"> neural interface</span>.
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
                className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white py-4 text-lg font-semibold rounded-xl cyber-glow transition-all duration-300 transform hover:scale-105"
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
                    Get Now - It's Free!
                  </>
                )}
              </Button>
            </form>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-gray-700/30 backdrop-blur-lg rounded-2xl p-6 border border-cyan-500/20 holographic">
                <Cpu className="h-8 w-8 text-cyan-400 mx-auto mb-4" />
                <h4 className="font-semibold mb-2 text-cyan-400">Free Source Code</h4>
                <p className="text-sm text-gray-300">Get access to premium project templates from the future</p>
              </div>
              <div className="bg-gray-700/30 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20 holographic">
                <Zap className="h-8 w-8 text-purple-400 mx-auto mb-4" />
                <h4 className="font-semibold mb-2 text-purple-400">Weekly Tutorials</h4>
                <p className="text-sm text-gray-300">Step-by-step blockchain development guides</p>
              </div>
              <div className="bg-gray-700/30 backdrop-blur-lg rounded-2xl p-6 border border-green-500/20 holographic">
                <Shield className="h-8 w-8 text-green-400 mx-auto mb-4" />
                <h4 className="font-semibold mb-2 text-green-400">Industry Updates</h4>
                <p className="text-sm text-gray-300">Latest trends and opportunities in the metaverse</p>
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