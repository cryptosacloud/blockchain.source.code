import { SourceCodeGallery } from '@/components/SourceCodeGallery';
import { TopProjectIdeas } from '@/components/TopProjectIdeas';
import { Newsletter } from '@/components/Newsletter';
import { Flame } from 'lucide-react';

export default function SourceCodePage() {
  return (
    <>
      <div className="bg-gradient-to-br from-gray-900 via-red-900 to-orange-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-gray-800/50 backdrop-blur-lg border border-red-500/30 rounded-full px-6 py-3 mb-8">
              <Flame className="h-5 w-5 text-red-400 animate-pulse" />
              <span className="text-red-400 font-medium">Design Matrix</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent neon-text">
                Design Collection
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Get production-ready design templates for top Web3 and blockchain projects. 
              Build the future of decentralized applications with our comprehensive collection of 
              <span className="text-orange-400 font-semibold"> revolutionary-grade </span> solutions.
            </p>
          </div>
        </div>
      </div>
      <SourceCodeGallery />
      <TopProjectIdeas />
      <Newsletter />
    </>
  );
}