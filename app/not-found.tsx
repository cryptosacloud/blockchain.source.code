import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Zap, Flame } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-orange-900 text-white flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-8">
          <div className="inline-flex items-center space-x-2 bg-gray-800/50 backdrop-blur-lg border border-red-500/30 rounded-full px-6 py-3 mb-8">
            <Flame className="h-5 w-5 text-red-400 animate-pulse" />
            <span className="text-red-400 font-medium">404 Error</span>
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6">
          <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent neon-text">
            404
          </span>
        </h1>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Page Not Found
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 leading-relaxed">
          The revolutionary page you're looking for has been moved to another dimension. 
          Let's get you back to the 
          <span className="text-orange-400 font-semibold"> Web3 revolution</span>.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button size="lg" className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white px-8 py-4 text-lg font-semibold rounded-xl cyber-glow transition-all duration-300 transform hover:scale-105">
              <Zap className="mr-2 h-5 w-5" />
              Return Home
            </Button>
          </Link>
          <Link href="/source-code">
            <Button size="lg" variant="outline" className="border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Browse Products
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}