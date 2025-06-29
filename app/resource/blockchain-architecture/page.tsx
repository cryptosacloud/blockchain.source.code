'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, FileText, Code, CheckCircle, Flame, Zap, Shield, Network, Layers } from 'lucide-react';
import Link from 'next/link';

export default function BlockchainArchitecturePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-cyan-900 to-blue-900 text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/resource">
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400 rounded-xl">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Resources
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gray-800/50 backdrop-blur-lg border border-cyan-500/30 rounded-full px-6 py-3 mb-8">
            <Network className="h-5 w-5 text-cyan-400 animate-pulse" />
            <span className="text-cyan-400 font-medium">Architecture Guide</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent neon-text">
              Blockchain Architecture Patterns
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Design patterns and architectural best practices for blockchain applications. 
            Build scalable, secure, and maintainable decentralized systems.
          </p>
        </div>

        {/* Architecture Overview */}
        <div className="space-y-8">
          <Card className="bg-gray-800/50 backdrop-blur-lg border-cyan-500/30 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center text-cyan-400">
                <Layers className="mr-3 h-6 w-6" />
                Architectural Principles
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Successful blockchain applications require careful architectural planning. 
                These principles guide the design of robust, scalable, and maintainable systems.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Decentralization by design</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Immutable data structures</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Consensus mechanisms</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Cryptographic security</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Transparency and auditability</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Scalability considerations</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Design Patterns */}
          <Card className="bg-gray-800/50 backdrop-blur-lg border-blue-500/30 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-xl text-blue-400">Common Design Patterns</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/30">
                  <h3 className="text-lg font-semibold mb-3 text-blue-400">Proxy Pattern</h3>
                  <p className="text-sm text-gray-300 mb-3">
                    Enable contract upgradability while maintaining state and address consistency.
                  </p>
                  <div className="bg-gray-900/50 p-3 rounded border border-gray-700">
                    <h4 className="font-semibold mb-1 text-blue-400">Use Cases:</h4>
                    <ul className="text-xs text-gray-300 space-y-1">
                      <li>• Upgradeable smart contracts</li>
                      <li>• Bug fixes and improvements</li>
                      <li>• Feature additions</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/30">
                  <h3 className="text-lg font-semibold mb-3 text-green-400">Factory Pattern</h3>
                  <p className="text-sm text-gray-300 mb-3">
                    Create multiple instances of contracts with standardized interfaces and functionality.
                  </p>
                  <div className="bg-gray-900/50 p-3 rounded border border-gray-700">
                    <h4 className="font-semibold mb-1 text-green-400">Applications:</h4>
                    <ul className="text-xs text-gray-300 space-y-1">
                      <li>• Token creation platforms</li>
                      <li>• DAO deployment systems</li>
                      <li>• Multi-tenant applications</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-purple-500/10 p-4 rounded-lg border border-purple-500/30">
                  <h3 className="text-lg font-semibold mb-3 text-purple-400">Oracle Pattern</h3>
                  <p className="text-sm text-gray-300 mb-3">
                    Integrate external data sources securely into blockchain applications.
                  </p>
                  <div className="bg-gray-900/50 p-3 rounded border border-gray-700">
                    <h4 className="font-semibold mb-1 text-purple-400">Examples:</h4>
                    <ul className="text-xs text-gray-300 space-y-1">
                      <li>• Price feeds for DeFi</li>
                      <li>• Weather data for insurance</li>
                      <li>• Sports results for betting</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-orange-500/10 p-4 rounded-lg border border-orange-500/30">
                  <h3 className="text-lg font-semibold mb-3 text-orange-400">State Channel Pattern</h3>
                  <p className="text-sm text-gray-300 mb-3">
                    Enable off-chain interactions with on-chain settlement for scalability.
                  </p>
                  <div className="bg-gray-900/50 p-3 rounded border border-gray-700">
                    <h4 className="font-semibold mb-1 text-orange-400">Benefits:</h4>
                    <ul className="text-xs text-gray-300 space-y-1">
                      <li>• Reduced gas costs</li>
                      <li>• Instant transactions</li>
                      <li>• Enhanced privacy</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Layer Architecture */}
          <Card className="bg-gray-800/50 backdrop-blur-lg border-green-500/30 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-xl text-green-400">Layered Architecture</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Organize your blockchain application into logical layers for better maintainability, 
                testability, and separation of concerns.
              </p>
              
              <div className="space-y-4">
                <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/30">
                  <h4 className="font-semibold mb-2 text-green-400">Layer 1: Blockchain Layer</h4>
                  <p className="text-sm text-gray-300 mb-2">Core blockchain infrastructure and consensus mechanisms.</p>
                  <ul className="text-xs text-gray-300 space-y-1">
                    <li>• Smart contracts and protocol logic</li>
                    <li>• Consensus algorithms and validation</li>
                    <li>• Network communication and synchronization</li>
                  </ul>
                </div>
                
                <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/30">
                  <h4 className="font-semibold mb-2 text-blue-400">Layer 2: Protocol Layer</h4>
                  <p className="text-sm text-gray-300 mb-2">Application-specific protocols and business logic.</p>
                  <ul className="text-xs text-gray-300 space-y-1">
                    <li>• Token standards and implementations</li>
                    <li>• Governance and voting mechanisms</li>
                    <li>• Economic models and incentives</li>
                  </ul>
                </div>
                
                <div className="bg-purple-500/10 p-4 rounded-lg border border-purple-500/30">
                  <h4 className="font-semibold mb-2 text-purple-400">Layer 3: Application Layer</h4>
                  <p className="text-sm text-gray-300 mb-2">User-facing applications and interfaces.</p>
                  <ul className="text-xs text-gray-300 space-y-1">
                    <li>• Web and mobile applications</li>
                    <li>• APIs and integration services</li>
                    <li>• User experience and interface design</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Scalability Solutions */}
          <Card className="bg-gray-800/50 backdrop-blur-lg border-yellow-500/30 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-xl text-yellow-400">Scalability Solutions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Address blockchain scalability challenges with proven architectural patterns 
                and scaling solutions for high-throughput applications.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-yellow-500/10 p-4 rounded-lg border border-yellow-500/30">
                  <h4 className="font-semibold mb-3 text-yellow-400">Layer 2 Solutions:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Optimistic rollups</li>
                    <li>• Zero-knowledge rollups</li>
                    <li>• State channels</li>
                    <li>• Plasma chains</li>
                  </ul>
                </div>
                <div className="bg-yellow-500/10 p-4 rounded-lg border border-yellow-500/30">
                  <h4 className="font-semibold mb-3 text-yellow-400">Sharding Strategies:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Horizontal partitioning</li>
                    <li>• Cross-shard communication</li>
                    <li>• Load balancing</li>
                    <li>• Data availability</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Security Architecture */}
          <Card className="bg-gray-800/50 backdrop-blur-lg border-red-500/30 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-xl flex items-center text-red-400">
                <Shield className="mr-3 h-6 w-6" />
                Security Architecture
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Build security into your architecture from the ground up. 
                Implement defense-in-depth strategies and secure design principles.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/30">
                  <h4 className="font-semibold mb-2 text-red-400">Access Control</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Role-based permissions</li>
                    <li>• Multi-signature wallets</li>
                    <li>• Time-locked operations</li>
                  </ul>
                </div>
                <div className="bg-orange-500/10 p-4 rounded-lg border border-orange-500/30">
                  <h4 className="font-semibold mb-2 text-orange-400">Data Protection</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Encryption at rest</li>
                    <li>• Secure communication</li>
                    <li>• Privacy preservation</li>
                  </ul>
                </div>
                <div className="bg-yellow-500/10 p-4 rounded-lg border border-yellow-500/30">
                  <h4 className="font-semibold mb-2 text-yellow-400">Monitoring</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Real-time alerts</li>
                    <li>• Anomaly detection</li>
                    <li>• Audit logging</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Implementation Guidelines */}
          <Card className="bg-gray-800/50 backdrop-blur-lg border-purple-500/30 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-xl text-purple-400">Implementation Guidelines</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Follow these guidelines to implement robust blockchain architectures 
                that can evolve with changing requirements and scale with growth.
              </p>
              
              <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                <h4 className="font-semibold mb-3 text-purple-400">Best Practices:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold mb-2 text-purple-300">Design Phase:</h5>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Define clear requirements</li>
                      <li>• Choose appropriate consensus</li>
                      <li>• Plan for scalability</li>
                      <li>• Consider interoperability</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2 text-purple-300">Development:</h5>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Modular architecture</li>
                      <li>• Comprehensive testing</li>
                      <li>• Security audits</li>
                      <li>• Performance optimization</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/source-code">
              <Button size="lg" className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-8 py-4 text-lg font-semibold rounded-xl cyber-glow transition-all duration-300 transform hover:scale-105">
                <Flame className="mr-2 h-5 w-5" />
                Get Architecture Templates
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105">
                <Zap className="mr-2 h-5 w-5" />
                Architecture Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}