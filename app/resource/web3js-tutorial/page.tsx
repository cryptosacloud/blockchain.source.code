'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Video, Code, CheckCircle, Flame, Zap, Shield, Play } from 'lucide-react';
import Link from 'next/link';

export default function Web3jsTutorialPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/resource">
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:border-blue-400 hover:text-blue-400 rounded-xl">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Resources
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gray-800/50 backdrop-blur-lg border border-blue-500/30 rounded-full px-6 py-3 mb-8">
            <Video className="h-5 w-5 text-blue-400 animate-pulse" />
            <span className="text-blue-400 font-medium">Tutorial Series</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent neon-text">
              Web3.js Tutorial Series
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Learn how to interact with the Ethereum blockchain using Web3.js library. 
            Build powerful dApps with comprehensive tutorials and practical examples.
          </p>
        </div>

        {/* Course Overview */}
        <div className="space-y-8">
          <Card className="bg-gray-800/50 backdrop-blur-lg border-blue-500/30 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center text-blue-400">
                <Play className="mr-3 h-6 w-6" />
                Course Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                This comprehensive tutorial series covers everything you need to know about Web3.js, 
                from basic blockchain interactions to building complex decentralized applications. 
                Perfect for developers looking to enter the Web3 space.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/30">
                  <h4 className="font-semibold mb-2 text-blue-400">Duration</h4>
                  <p className="text-gray-300">12 hours of content</p>
                </div>
                <div className="bg-purple-500/10 p-4 rounded-lg border border-purple-500/30">
                  <h4 className="font-semibold mb-2 text-purple-400">Level</h4>
                  <p className="text-gray-300">Beginner to Advanced</p>
                </div>
                <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/30">
                  <h4 className="font-semibold mb-2 text-green-400">Projects</h4>
                  <p className="text-gray-300">8 hands-on projects</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tutorial Modules */}
          <Card className="bg-gray-800/50 backdrop-blur-lg border-purple-500/30 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-xl text-purple-400">Module 1: Web3.js Fundamentals</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Get started with Web3.js by learning the core concepts and setting up your development environment. 
                Understand how to connect to Ethereum networks and perform basic operations.
              </p>
              
              <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                <h4 className="font-semibold mb-2 text-purple-400">Topics Covered:</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Installing and configuring Web3.js</li>
                  <li>• Connecting to Ethereum networks (Mainnet, Testnets)</li>
                  <li>• Understanding providers and signers</li>
                  <li>• Reading blockchain data (blocks, transactions)</li>
                  <li>• Working with accounts and wallets</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 backdrop-blur-lg border-green-500/30 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-xl text-green-400">Module 2: Smart Contract Interaction</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Learn how to interact with smart contracts using Web3.js. Deploy contracts, call functions, 
                and handle events in your JavaScript applications.
              </p>
              
              <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                <h4 className="font-semibold mb-2 text-green-400">Practical Skills:</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Loading and deploying smart contracts</li>
                  <li>• Calling contract functions (read/write)</li>
                  <li>• Handling transaction receipts and events</li>
                  <li>• Working with contract ABIs</li>
                  <li>• Gas estimation and optimization</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 backdrop-blur-lg border-orange-500/30 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-xl text-orange-400">Module 3: Building dApps</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Put your knowledge into practice by building complete decentralized applications. 
                Learn frontend integration, user experience patterns, and production deployment strategies.
              </p>
              
              <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                <h4 className="font-semibold mb-2 text-orange-400">Project Examples:</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Token wallet application</li>
                  <li>• NFT marketplace frontend</li>
                  <li>• DeFi dashboard</li>
                  <li>• Voting dApp</li>
                  <li>• Multi-signature wallet interface</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Advanced Topics */}
          <Card className="bg-gray-800/50 backdrop-blur-lg border-red-500/30 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-xl text-red-400">Module 4: Advanced Web3 Development</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Master advanced Web3.js techniques including batch operations, event filtering, 
                multi-chain support, and performance optimization for production applications.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                  <h4 className="font-semibold mb-2 text-red-400">Advanced Features:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Batch transactions and multicall</li>
                    <li>• Event filtering and indexing</li>
                    <li>• WebSocket connections</li>
                    <li>• Error handling and retries</li>
                  </ul>
                </div>
                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                  <h4 className="font-semibold mb-2 text-red-400">Production Ready:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Multi-chain architecture</li>
                    <li>• Caching and performance</li>
                    <li>• Security best practices</li>
                    <li>• Testing strategies</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Prerequisites */}
          <Card className="bg-gray-800/50 backdrop-blur-lg border-yellow-500/30 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-xl flex items-center text-yellow-400">
                <Shield className="mr-3 h-6 w-6" />
                Prerequisites & Setup
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-yellow-400">Required Skills:</h4>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>• JavaScript ES6+ proficiency</li>
                    <li>• Basic understanding of blockchain</li>
                    <li>• HTML/CSS knowledge</li>
                    <li>• Node.js and npm experience</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-yellow-400">Development Setup:</h4>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>• Node.js 16+ and npm</li>
                    <li>• MetaMask browser extension</li>
                    <li>• Code editor with JavaScript support</li>
                    <li>• Access to Ethereum testnet</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Learning Path */}
          <Card className="bg-gray-800/50 backdrop-blur-lg border-cyan-500/30 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-xl text-cyan-400">Learning Path & Certification</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Follow our structured learning path to master Web3.js development. 
                Complete projects and assessments to earn your Web3 Developer certification.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="bg-cyan-500/20 p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <span className="text-cyan-400 font-bold">1</span>
                  </div>
                  <h4 className="font-semibold text-cyan-400">Fundamentals</h4>
                  <p className="text-xs text-gray-400">Learn the basics</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-500/20 p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <span className="text-green-400 font-bold">2</span>
                  </div>
                  <h4 className="font-semibold text-green-400">Practice</h4>
                  <p className="text-xs text-gray-400">Build projects</p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-500/20 p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <span className="text-orange-400 font-bold">3</span>
                  </div>
                  <h4 className="font-semibold text-orange-400">Advanced</h4>
                  <p className="text-xs text-gray-400">Master techniques</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-500/20 p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-purple-400" />
                  </div>
                  <h4 className="font-semibold text-purple-400">Certified</h4>
                  <p className="text-xs text-gray-400">Get certified</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/source-code">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-4 text-lg font-semibold rounded-xl cyber-glow transition-all duration-300 transform hover:scale-105">
                <Flame className="mr-2 h-5 w-5" />
                Get Web3 Templates
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105">
                <Zap className="mr-2 h-5 w-5" />
                Start Learning
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}