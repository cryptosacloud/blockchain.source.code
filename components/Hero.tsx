import { Button } from '@/components/ui/button';
import { Code, Zap, Shield, Cpu, Globe, Lock } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-24 overflow-hidden particle-bg">
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-gray-800/50 backdrop-blur-lg border border-cyan-500/30 rounded-full px-6 py-3 mb-6">
              <Cpu className="h-5 w-5 text-cyan-400 animate-pulse" />
              <span className="text-cyan-400 font-medium">Next-Gen Blockchain Development</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent neon-text">
              Premium Blockchain
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent neon-text">
              Source Code
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Get production-ready source code for cutting-edge blockchain and Web3 projects. 
            Build the future of decentralized applications with our comprehensive collection of 
            <span className="text-cyan-400 font-semibold"> cyberpunk-grade </span> solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button size="lg" className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-10 py-4 text-lg font-semibold rounded-xl cyber-glow transition-all duration-300 transform hover:scale-105">
              <Code className="mr-2 h-5 w-5" />
              Browse Source Code
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-10 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 animated-border">
              <Globe className="mr-2 h-5 w-5" />
              View Live Demos
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="text-center group">
              <div className="bg-gray-800/50 backdrop-blur-lg border border-cyan-500/30 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300 holographic">
                <Code className="h-16 w-16 text-cyan-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">Production Ready</h3>
                <p className="text-gray-300 leading-relaxed">Clean, well-documented code ready for deployment in the metaverse</p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-gray-800/50 backdrop-blur-lg border border-purple-500/30 rounded-2xl p-8 hover:border-purple-400/50 transition-all duration-300 holographic">
                <Zap className="h-16 w-16 text-purple-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold mb-4 text-purple-400">Latest Tech Stack</h3>
                <p className="text-gray-300 leading-relaxed">Built with quantum-grade frameworks and cyberpunk best practices</p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-gray-800/50 backdrop-blur-lg border border-green-500/30 rounded-2xl p-8 hover:border-green-400/50 transition-all duration-300 holographic">
                <Shield className="h-16 w-16 text-green-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold mb-4 text-green-400">Security First</h3>
                <p className="text-gray-300 leading-relaxed">Military-grade audited smart contracts and secure implementations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}