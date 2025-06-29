'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, FileText, Code, CheckCircle, Flame, Zap, Shield } from 'lucide-react';
import Link from 'next/link';

export default function SolidityFundamentalsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-orange-900 text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/resource">
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:border-red-400 hover:text-red-400 rounded-xl">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Resources
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gray-800/50 backdrop-blur-lg border border-red-500/30 rounded-full px-6 py-3 mb-8">
            <FileText className="h-5 w-5 text-red-400 animate-pulse" />
            <span className="text-red-400 font-medium">Documentation</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent neon-text">
              Solidity Fundamentals
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Master the fundamentals of Solidity programming language with comprehensive examples, 
            best practices, and revolutionary development techniques.
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Overview */}
          <Card className="bg-gray-800/50 backdrop-blur-lg border-red-500/30 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center text-red-400">
                <Code className="mr-3 h-6 w-6" />
                What You'll Learn
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Solidity syntax and structure</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Smart contract development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Gas optimization techniques</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Security best practices</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Testing and deployment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Advanced patterns</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Content Sections */}
          <Card className="bg-gray-800/50 backdrop-blur-lg border-orange-500/30 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-xl text-orange-400">Chapter 1: Getting Started with Solidity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Solidity is a statically-typed programming language designed for developing smart contracts 
                that run on the Ethereum Virtual Machine (EVM). This chapter covers the fundamental concepts 
                you need to understand before writing your first smart contract.
              </p>
              
              <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                <h4 className="font-semibold mb-2 text-orange-400">Key Topics:</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Setting up your development environment</li>
                  <li>• Understanding the EVM and gas</li>
                  <li>• Basic syntax and data types</li>
                  <li>• Contract structure and functions</li>
                  <li>• State variables and visibility</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 backdrop-blur-lg border-green-500/30 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-xl text-green-400">Chapter 2: Smart Contract Architecture</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Learn how to design robust and scalable smart contracts using proven architectural patterns. 
                This chapter explores contract inheritance, interfaces, libraries, and modular design principles.
              </p>
              
              <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                <h4 className="font-semibold mb-2 text-green-400">Advanced Concepts:</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Contract inheritance and polymorphism</li>
                  <li>• Interface design and implementation</li>
                  <li>• Library usage and deployment</li>
                  <li>• Proxy patterns and upgradability</li>
                  <li>• Event logging and monitoring</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 backdrop-blur-lg border-blue-500/30 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-xl text-blue-400">Chapter 3: Security and Best Practices</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Security is paramount in smart contract development. This chapter covers common vulnerabilities, 
                security patterns, and best practices to protect your contracts from attacks and ensure reliable operation.
              </p>
              
              <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                <h4 className="font-semibold mb-2 text-blue-400">Security Topics:</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Reentrancy attacks and prevention</li>
                  <li>• Integer overflow/underflow protection</li>
                  <li>• Access control and authorization</li>
                  <li>• Front-running and MEV protection</li>
                  <li>• Audit checklist and testing strategies</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Code Examples */}
          <Card className="bg-gray-800/50 backdrop-blur-lg border-purple-500/30 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-xl text-purple-400">Practical Examples</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Each chapter includes hands-on examples and exercises to reinforce your learning. 
                From simple storage contracts to complex DeFi protocols, you'll build real-world applications.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                  <h4 className="font-semibold mb-2 text-purple-400">Example Projects:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Simple token contract (ERC-20)</li>
                    <li>• NFT marketplace</li>
                    <li>• Voting system</li>
                    <li>• Decentralized exchange</li>
                  </ul>
                </div>
                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                  <h4 className="font-semibold mb-2 text-purple-400">Tools Covered:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Hardhat development framework</li>
                    <li>• OpenZeppelin libraries</li>
                    <li>• Remix IDE</li>
                    <li>• Testing with Chai/Mocha</li>
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
                Prerequisites & Requirements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-yellow-400">Required Knowledge:</h4>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>• Basic programming experience (JavaScript/Python preferred)</li>
                    <li>• Understanding of blockchain concepts</li>
                    <li>• Familiarity with command line tools</li>
                    <li>• Basic knowledge of web development</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-yellow-400">Tools Needed:</h4>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>• Node.js and npm</li>
                    <li>• MetaMask wallet</li>
                    <li>• Code editor (VS Code recommended)</li>
                    <li>• Git for version control</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/source-code">
              <Button size="lg" className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white px-8 py-4 text-lg font-semibold rounded-xl cyber-glow transition-all duration-300 transform hover:scale-105">
                <Flame className="mr-2 h-5 w-5" />
                Get Source Code Templates
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105">
                <Zap className="mr-2 h-5 w-5" />
                Get Expert Help
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}