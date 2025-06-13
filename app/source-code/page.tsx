import { SourceCodeGallery } from '@/components/SourceCodeGallery';
import { TopProjectIdeas } from '@/components/TopProjectIdeas';
import { Newsletter } from '@/components/Newsletter';

export default function SourceCodePage() {
  return (
    <>
      <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-gray-800/50 backdrop-blur-lg border border-cyan-500/30 rounded-full px-6 py-3 mb-8">
              <span className="text-cyan-400 font-medium">Source Code Matrix</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent neon-text">
                Source Code Collection
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Get production-ready source code for top blockchain and Web3 projects. 
              Build the future of decentralized applications with our comprehensive collection of 
              <span className="text-purple-400 font-semibold"> cyberpunk-grade </span> solutions.
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