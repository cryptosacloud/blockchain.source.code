'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Video, Code, CheckCircle, Flame, Zap, Shield, Palette, Cpu } from 'lucide-react';
import Link from 'next/link';

export default function NFTDevelopmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/resource">
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:border-purple-400 hover:text-purple-400 rounded-xl">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Resources
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gray-800/50 backdrop-blur-lg border border-purple-500/30 rounded-full px-6 py-3 mb-8">
            <Palette className="h-5 w-5 text-purple-400 animate-pulse" />
            <span className="text-purple-400 font-medium">NFT Masterclass</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent neon-text">
              NFT Development Masterclass
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Complete course on building NFT marketplaces and minting platforms. 
            Master the art of creating, trading, and managing non-fungible tokens.
          </p>
        </div>

        {/* Course Overview */}
        <div className="space-y-8">
          <Card className="bg-gray-800/50 backdrop-blur-lg border-purple-500/30 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center text-purple-400">
                <Cpu className="mr-3 h-6 w-6" />
                Masterclass Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                This comprehensive masterclass covers the entire NFT ecosystem, from smart contract development 
                to marketplace creation and advanced trading features. Build production-ready NFT platforms.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-purple-500/10 p-4 rounded-lg border border-purple-500/30">
                  <h4 className="font-semibold mb-2 text-purple-400">Duration</h4>
                  <p className="text-gray-300">20+ hours of content</p>
                </div>
                <div className="bg-pink-500/10 p-4 rounded-lg border border-pink-500/30">
                  <h4 className="font-semibold mb-2 text-pink-400">Projects</h4>
                  <p className="text-gray-300">5 complete NFT platforms</p>
                </div>
                <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/30">
                  <h4 className="font-semibold mb-2 text-blue-400">Standards</h4>
                  <p className="text-gray-300">ERC-721, ERC-1155, ERC-2981</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Course Modules */}
          <Card className="bg-gray-800/50 backdrop-blur-lg border-pink-500/30 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-xl text-pink-400">Module 1: NFT Fundamentals</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Understand the core concepts of NFTs, token standards, and the underlying technology. 
                Learn about metadata, IPFS storage, and the economics of digital ownership.
              </p>
              
              <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                <h4 className="font-semibold mb-2 text-pink-400">Key Concepts:</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Understanding NFT token standards (ERC-721, ERC-1155)</li>
                  <li>• Metadata structure and IPFS integration</li>
                  <li>• Digital ownership and provenance</li>
                  <li>• NFT marketplaces and trading mechanics</li>
                  <li>• Royalties and creator economics</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 backdrop-blur-lg border-blue-500/30 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-xl text-blue-400">Module 2: Smart Contract Development</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Build secure and efficient NFT smart contracts using OpenZeppelin libraries. 
                Implement minting, burning, and transfer functionality with proper access controls.
              </p>
              
              <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                <h4 className="font-semibold mb-2 text-blue-400">Technical Skills:</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• ERC-721 and ERC-1155 implementation</li>
                  <li>• Minting mechanisms and access control</li>
                  <li>• Royalty standards (ERC-2981)</li>
                  <li>• Gas optimization techniques</li>
                  <li>• Security best practices</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 backdrop-blur-lg border-green-500/30 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-xl text-green-400">Module 3: Marketplace Development</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Create a full-featured NFT marketplace with listing, bidding, and auction functionality. 
                Implement advanced features like collections, filters, and recommendation systems.
              </p>
              
              <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                <h4 className="font-semibold mb-2 text-green-400">Marketplace Features:</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Fixed price and auction listings</li>
                  <li>• Bidding and offer systems</li>
                  <li>• Collection management</li>
                  <li>• Search and filtering</li>
                  <li>• User profiles and favorites</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Advanced Features */}
          <Card className="bg-gray-800/50 backdrop-blur-lg border-orange-500/30 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-xl text-orange-400">Module 4: Advanced NFT Features</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Explore cutting-edge NFT features including dynamic NFTs, fractionalization, 
                gaming integration, and cross-chain compatibility.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                  <h4 className="font-semibold mb-2 text-orange-400">Advanced Concepts:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Dynamic and evolving NFTs</li>
                    <li>• Fractionalized ownership</li>
                    <li>• Gaming and utility NFTs</li>
                    <li>• Cross-chain bridges</li>
                  </ul>
                </div>
                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                  <h4 className="font-semibold mb-2 text-orange-400">Integration:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Social media integration</li>
                    <li>• Analytics and tracking</li>
                    <li>• Mobile app development</li>
                    <li>• API development</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Project Showcase */}
          <Card className="bg-gray-800/50 backdrop-blur-lg border-cyan-500/30 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-xl text-cyan-400">Hands-on Projects</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Build real-world NFT applications throughout the course. Each project builds upon 
                previous knowledge and introduces new concepts and technologies.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-cyan-500/10 p-4 rounded-lg border border-cyan-500/30">
                  <h4 className="font-semibold mb-2 text-cyan-400">Project 1: Art NFT Collection</h4>
                  <p className="text-sm text-gray-300">Create and deploy a generative art NFT collection with rarity traits and metadata.</p>
                </div>
                <div className="bg-purple-500/10 p-4 rounded-lg border border-purple-500/30">
                  <h4 className="font-semibold mb-2 text-purple-400">Project 2: NFT Marketplace</h4>
                  <p className="text-sm text-gray-300">Build a complete marketplace with listing, bidding, and auction functionality.</p>
                </div>
                <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/30">
                  <h4 className="font-semibold mb-2 text-green-400">Project 3: Gaming NFTs</h4>
                  <p className="text-sm text-gray-300">Develop utility NFTs for gaming with stats, upgrades, and in-game functionality.</p>
                </div>
                <div className="bg-orange-500/10 p-4 rounded-lg border border-orange-500/30">
                  <h4 className="font-semibold mb-2 text-orange-400">Project 4: Music NFT Platform</h4>
                  <p className="text-sm text-gray-300">Create a platform for musicians to mint and sell music NFTs with royalty splits.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tools & Technologies */}
          <Card className="bg-gray-800/50 backdrop-blur-lg border-yellow-500/30 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-xl flex items-center text-yellow-400">
                <Shield className="mr-3 h-6 w-6" />
                Tools & Technologies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-yellow-400">Smart Contracts:</h4>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>• Solidity programming</li>
                    <li>• OpenZeppelin libraries</li>
                    <li>• Hardhat development framework</li>
                    <li>• Ethers.js integration</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-yellow-400">Frontend:</h4>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>• React.js and Next.js</li>
                    <li>• Web3 wallet integration</li>
                    <li>• IPFS and Pinata</li>
                    <li>• Responsive design</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-yellow-400">Infrastructure:</h4>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>• IPFS for metadata storage</li>
                    <li>• The Graph for indexing</li>
                    <li>• Moralis for backend</li>
                    <li>• Vercel for deployment</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Certification */}
          <Card className="bg-gray-800/50 backdrop-blur-lg border-red-500/30 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-xl text-red-400">Certification & Career Path</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Complete the masterclass and earn your NFT Developer certification. 
                Join our exclusive community and access career opportunities in the NFT space.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/30">
                  <h4 className="font-semibold mb-2 text-red-400">Certification Benefits:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Industry-recognized certificate</li>
                    <li>• Portfolio project showcase</li>
                    <li>• LinkedIn skill verification</li>
                    <li>• Access to job board</li>
                  </ul>
                </div>
                <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/30">
                  <h4 className="font-semibold mb-2 text-red-400">Career Opportunities:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• NFT platform developer</li>
                    <li>• Blockchain consultant</li>
                    <li>• Smart contract auditor</li>
                    <li>• Web3 product manager</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/source-code">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-8 py-4 text-lg font-semibold rounded-xl cyber-glow transition-all duration-300 transform hover:scale-105">
                <Flame className="mr-2 h-5 w-5" />
                Get NFT Templates
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105">
                <Zap className="mr-2 h-5 w-5" />
                Enroll Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}