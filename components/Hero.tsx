import { Button } from '@/components/ui/button';
import { Code, Zap, Shield, Cpu, Globe, Lock, Sparkles, Flame } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-red-900 to-orange-900 text-white py-24 overflow-hidden particle-bg">
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-gray-800/50 backdrop-blur-lg border border-red-500/30 rounded-full px-6 py-3 mb-6">
              <Flame className="h-5 w-5 text-red-400 animate-pulse" />
              <span className="text-red-400 font-medium">Revolutionary Web3 Design</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent neon-text">
              Revolution Web3
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent neon-text">
              Design Store
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Ignite the Web3 revolution with cutting-edge design templates and blockchain source code. 
            Build the future of decentralized applications with our comprehensive collection of 
            <span className="text-red-400 font-semibold"> revolutionary </span> solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button size="lg" className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white px-10 py-4 text-lg font-semibold rounded-xl cyber-glow transition-all duration-300 transform hover:scale-105">
              <Code className="mr-2 h-5 w-5" />
              Browse Templates
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-10 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 animated-border">
              <Globe className="mr-2 h-5 w-5" />
              View Live Demos
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="text-center group">
              <div className="bg-gray-800/50 backdrop-blur-lg border border-red-500/30 rounded-2xl p-8 hover:border-red-400/50 transition-all duration-300 holographic">
                <Code className="h-16 w-16 text-red-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold mb-4 text-red-400">Revolutionary Code</h3>
                <p className="text-gray-300 leading-relaxed">Clean, innovative code ready to spark the Web3 revolution</p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-gray-800/50 backdrop-blur-lg border border-orange-500/30 rounded-2xl p-8 hover:border-orange-400/50 transition-all duration-300 holographic">
                <Zap className="h-16 w-16 text-orange-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold mb-4 text-orange-400">Cutting-Edge Tech</h3>
                <p className="text-gray-300 leading-relaxed">Built with revolutionary frameworks and next-gen practices</p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-gray-800/50 backdrop-blur-lg border border-yellow-500/30 rounded-2xl p-8 hover:border-yellow-400/50 transition-all duration-300 holographic">
                <Shield className="h-16 w-16 text-yellow-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold mb-4 text-yellow-400">Battle-Tested Security</h3>
                <p className="text-gray-300 leading-relaxed">Revolutionary-grade audited smart contracts and secure implementations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}