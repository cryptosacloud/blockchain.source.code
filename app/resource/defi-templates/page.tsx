'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Code, CheckCircle, Flame, Zap, Shield, Cpu } from 'lucide-react';
import Link from 'next/link';

export default function DeFiTemplatesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-blue-900 text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/resource">
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:border-green-400 hover:text-green-400 rounded-xl">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Resources
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gray-800/50 backdrop-blur-lg border border-green-500/30 rounded-full px-6 py-3 mb-8">
            <Code className="h-5 w-5 text-green-400 animate-pulse" />
            <span className="text-green-400 font-medium">Code Templates</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent neon-text">
              DeFi Protocol Templates
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready-to-use templates for building DeFi applications and protocols. 
            Accelerate your development with battle-tested, audited smart contracts.
          </p>
        </div>

        {/* Template Categories */}
        <div className="space-y-8">
          <Card className="bg-gray-800/50 backdrop-blur-lg border-green-500/30 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center text-green-400">
                <Cpu className="mr-3 h-6 w-6" />
                Available Templates
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/30">
                  <h3 className="text-lg font-semibold mb-3 text-green-400">Automated Market Makers</h3>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>• Uniswap V2/V3 style DEX</li>
                    <li>• Constant product formula</li>
                    <li>• Liquidity pool management</li>
                    <li>• Fee collection mechanisms</li>
                    <li>• Flash loan integration</li>
                  </ul>
                </div>
                
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/30">
                  <h3 className="text-lg font-semibold mb-3 text-blue-400">Lending Protocols</h3>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>• Compound-style lending</li>
                    <li>• Interest rate models</li>
                    <li>• Collateral management</li>
                    <li>• Liquidation mechanisms</li>
                    <li>• Risk assessment tools</li>
                  </ul>
                </div>
                
                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/30">
                  <h3 className="text-lg font-semibold mb-3 text-purple-400">Yield Farming</h3>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>• Staking reward systems</li>
                    <li>• Multi-token rewards</li>
                    <li>• Time-locked staking</li>
                    <li>• Penalty mechanisms</li>
                    <li>• Governance integration</li>
                  </ul>
                </div>
                
                <div className="bg-orange-500/10 p-6 rounded-lg border border-orange-500/30">
                  <h3 className="text-lg font-semibold mb-3 text-orange-400">Derivatives</h3>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>• Options protocols</li>
                    <li>• Futures contracts</li>
                    <li>• Synthetic assets</li>
                    <li>• Oracle integration</li>
                    <li>• Settlement mechanisms</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Featured Template */}
          <Card className="bg-gray-800/50 backdrop-blur-lg border-blue-500/30 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-xl text-blue-400">Featured: Uniswap V3 Clone Template</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Complete implementation of a Uniswap V3 style automated market maker with concentrated liquidity, 
                multiple fee tiers, and advanced position management. Includes both smart contracts and frontend interface.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                  <h4 className="font-semibold mb-2 text-blue-400">Smart Contract Features:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Concentrated liquidity positions</li>
                    <li>• Multiple fee tiers (0.05%, 0.3%, 1%)</li>
                    <li>• Price oracle integration</li>
                    <li>• Flash loan functionality</li>
                    <li>• Gas-optimized operations</li>
                  </ul>
                </div>
                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                  <h4 className="font-semibold mb-2 text-blue-400">Frontend Features:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• React-based trading interface</li>
                    <li>• Real-time price charts</li>
                    <li>• Liquidity position management</li>
                    <li>• Multi-wallet support</li>
                    <li>• Mobile responsive design</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Security Features */}
          <Card className="bg-gray-800/50 backdrop-blur-lg border-red-500/30 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-xl flex items-center text-red-400">
                <Shield className="mr-3 h-6 w-6" />
                Security & Auditing
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                All DeFi templates undergo rigorous security auditing and testing. 
                Each template includes comprehensive test suites and security documentation.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/30 text-center">
                  <Shield className="h-8 w-8 text-red-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-red-400">Security Audited</h4>
                  <p className="text-xs text-gray-400">Professional audit reports</p>
                </div>
                <div className="bg-yellow-500/10 p-4 rounded-lg border border-yellow-500/30 text-center">
                  <CheckCircle className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-yellow-400">Test Coverage</h4>
                  <p className="text-xs text-gray-400">95%+ test coverage</p>
                </div>
                <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/30 text-center">
                  <Zap className="h-8 w-8 text-green-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-green-400">Gas Optimized</h4>
                  <p className="text-xs text-gray-400">Minimal gas usage</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Implementation Guide */}
          <Card className="bg-gray-800/50 backdrop-blur-lg border-purple-500/30 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-xl text-purple-400">Implementation Guide</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Each template comes with detailed implementation guides, deployment scripts, 
                and configuration examples for different networks and use cases.
              </p>
              
              <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                <h4 className="font-semibold mb-2 text-purple-400">What's Included:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Complete smart contract source code</li>
                    <li>• Deployment and migration scripts</li>
                    <li>• Comprehensive test suites</li>
                    <li>• Frontend integration examples</li>
                  </ul>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Documentation and API reference</li>
                    <li>• Configuration for multiple networks</li>
                    <li>• Security best practices guide</li>
                    <li>• Upgrade and maintenance procedures</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Supported Networks */}
          <Card className="bg-gray-800/50 backdrop-blur-lg border-cyan-500/30 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-xl text-cyan-400">Supported Networks</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 leading-relaxed mb-4">
                Templates are configured for deployment on multiple blockchain networks 
                with network-specific optimizations and configurations.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-cyan-500/10 p-3 rounded-lg border border-cyan-500/30 text-center">
                  <h4 className="font-semibold text-cyan-400">Ethereum</h4>
                  <p className="text-xs text-gray-400">Mainnet & Testnets</p>
                </div>
                <div className="bg-yellow-500/10 p-3 rounded-lg border border-yellow-500/30 text-center">
                  <h4 className="font-semibold text-yellow-400">BSC</h4>
                  <p className="text-xs text-gray-400">Binance Smart Chain</p>
                </div>
                <div className="bg-purple-500/10 p-3 rounded-lg border border-purple-500/30 text-center">
                  <h4 className="font-semibold text-purple-400">Polygon</h4>
                  <p className="text-xs text-gray-400">Layer 2 Solution</p>
                </div>
                <div className="bg-blue-500/10 p-3 rounded-lg border border-blue-500/30 text-center">
                  <h4 className="font-semibold text-blue-400">Arbitrum</h4>
                  <p className="text-xs text-gray-400">Optimistic Rollup</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/source-code">
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-500 hover:to-blue-500 text-white px-8 py-4 text-lg font-semibold rounded-xl cyber-glow transition-all duration-300 transform hover:scale-105">
                <Flame className="mr-2 h-5 w-5" />
                Browse DeFi Templates
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105">
                <Zap className="mr-2 h-5 w-5" />
                Custom Development
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}