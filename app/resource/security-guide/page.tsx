'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Shield, AlertTriangle, CheckCircle, Flame, Zap, Lock, Eye } from 'lucide-react';
import Link from 'next/link';

export default function SecurityGuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-yellow-900 text-white py-20 relative overflow-hidden">
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
            <Shield className="h-5 w-5 text-red-400 animate-pulse" />
            <span className="text-red-400 font-medium">Security Guide</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent neon-text">
              Smart Contract Security
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive security practices and common vulnerabilities in smart contracts. 
            Protect your protocols with battle-tested security measures and audit techniques.
          </p>
        </div>

        {/* Security Overview */}
        <div className="space-y-8">
          <Card className="bg-gray-800/50 backdrop-blur-lg border-red-500/30 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center text-red-400">
                <AlertTriangle className="mr-3 h-6 w-6" />
                Critical Security Principles
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Smart contract security is paramount in DeFi and Web3 applications. 
                A single vulnerability can lead to millions in losses. Follow these fundamental principles.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Defense in depth strategy</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Fail-safe defaults</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Principle of least privilege</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Comprehensive testing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Regular security audits</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Emergency pause mechanisms</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Common Vulnerabilities */}
          <Card className="bg-gray-800/50 backdrop-blur-lg border-yellow-500/30 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-xl text-yellow-400">Common Vulnerabilities & Attacks</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/30">
                  <h3 className="text-lg font-semibold mb-3 text-red-400 flex items-center">
                    <AlertTriangle className="mr-2 h-5 w-5" />
                    Reentrancy Attacks
                  </h3>
                  <p className="text-sm text-gray-300 mb-3">
                    Malicious contracts calling back into your contract before state updates complete.
                  </p>
                  <div className="bg-gray-900/50 p-3 rounded border border-gray-700">
                    <h4 className="font-semibold mb-1 text-red-400">Prevention:</h4>
                    <ul className="text-xs text-gray-300 space-y-1">
                      <li>• Use checks-effects-interactions pattern</li>
                      <li>• Implement reentrancy guards</li>
                      <li>• Update state before external calls</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-orange-500/10 p-4 rounded-lg border border-orange-500/30">
                  <h3 className="text-lg font-semibold mb-3 text-orange-400 flex items-center">
                    <AlertTriangle className="mr-2 h-5 w-5" />
                    Integer Overflow/Underflow
                  </h3>
                  <p className="text-sm text-gray-300 mb-3">
                    Arithmetic operations that exceed variable limits causing unexpected behavior.
                  </p>
                  <div className="bg-gray-900/50 p-3 rounded border border-gray-700">
                    <h4 className="font-semibold mb-1 text-orange-400">Prevention:</h4>
                    <ul className="text-xs text-gray-300 space-y-1">
                      <li>• Use SafeMath libraries</li>
                      <li>• Solidity 0.8+ built-in checks</li>
                      <li>• Validate input ranges</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-purple-500/10 p-4 rounded-lg border border-purple-500/30">
                  <h3 className="text-lg font-semibold mb-3 text-purple-400 flex items-center">
                    <AlertTriangle className="mr-2 h-5 w-5" />
                    Access Control Issues
                  </h3>
                  <p className="text-sm text-gray-300 mb-3">
                    Improper permission management allowing unauthorized access to critical functions.
                  </p>
                  <div className="bg-gray-900/50 p-3 rounded border border-gray-700">
                    <h4 className="font-semibold mb-1 text-purple-400">Prevention:</h4>
                    <ul className="text-xs text-gray-300 space-y-1">
                      <li>• Use OpenZeppelin AccessControl</li>
                      <li>• Implement role-based permissions</li>
                      <li>• Regular permission audits</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/30">
                  <h3 className="text-lg font-semibold mb-3 text-blue-400 flex items-center">
                    <AlertTriangle className="mr-2 h-5 w-5" />
                    Oracle Manipulation
                  </h3>
                  <p className="text-sm text-gray-300 mb-3">
                    Attacks on price feeds and external data sources to manipulate contract behavior.
                  </p>
                  <div className="bg-gray-900/50 p-3 rounded border border-gray-700">
                    <h4 className="font-semibold mb-1 text-blue-400">Prevention:</h4>
                    <ul className="text-xs text-gray-300 space-y-1">
                      <li>• Use multiple oracle sources</li>
                      <li>• Implement price deviation checks</li>
                      <li>• Time-weighted average prices</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Security Tools */}
          <Card className="bg-gray-800/50 backdrop-blur-lg border-green-500/30 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-xl flex items-center text-green-400">
                <Eye className="mr-3 h-6 w-6" />
                Security Tools & Analysis
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Leverage automated tools and manual review processes to identify vulnerabilities 
                before deployment. Combine multiple approaches for comprehensive security coverage.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/30">
                  <h4 className="font-semibold mb-3 text-green-400">Static Analysis</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Slither analyzer</li>
                    <li>• MythX security platform</li>
                    <li>• Securify scanner</li>
                    <li>• Solhint linter</li>
                  </ul>
                </div>
                
                <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/30">
                  <h4 className="font-semibold mb-3 text-blue-400">Dynamic Testing</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Echidna fuzzing</li>
                    <li>• Manticore symbolic execution</li>
                    <li>• Foundry property testing</li>
                    <li>• Custom test suites</li>
                  </ul>
                </div>
                
                <div className="bg-purple-500/10 p-4 rounded-lg border border-purple-500/30">
                  <h4 className="font-semibold mb-3 text-purple-400">Manual Review</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Code review checklists</li>
                    <li>• Architecture analysis</li>
                    <li>• Business logic validation</li>
                    <li>• Professional audits</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Best Practices */}
          <Card className="bg-gray-800/50 backdrop-blur-lg border-cyan-500/30 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-xl text-cyan-400">Development Best Practices</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Follow these proven development practices to build secure smart contracts from the ground up. 
                Security should be considered at every stage of development.
              </p>
              
              <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                <h4 className="font-semibold mb-3 text-cyan-400">Secure Development Lifecycle:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold mb-2 text-cyan-300">Design Phase:</h5>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Threat modeling</li>
                      <li>• Security requirements</li>
                      <li>• Risk assessment</li>
                      <li>• Architecture review</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2 text-cyan-300">Implementation:</h5>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Secure coding standards</li>
                      <li>• Code review process</li>
                      <li>• Automated testing</li>
                      <li>• Continuous integration</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2 text-cyan-300">Testing Phase:</h5>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Unit test coverage</li>
                      <li>• Integration testing</li>
                      <li>• Security testing</li>
                      <li>• Penetration testing</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2 text-cyan-300">Deployment:</h5>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Testnet validation</li>
                      <li>• Gradual rollout</li>
                      <li>• Monitoring setup</li>
                      <li>• Incident response plan</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Audit Checklist */}
          <Card className="bg-gray-800/50 backdrop-blur-lg border-orange-500/30 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-xl flex items-center text-orange-400">
                <Lock className="mr-3 h-6 w-6" />
                Security Audit Checklist
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Use this comprehensive checklist to evaluate smart contract security before deployment. 
                Each item should be thoroughly reviewed and tested.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-orange-400">Code Quality:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-gray-300">No compiler warnings</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-gray-300">Consistent coding style</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-gray-300">Comprehensive documentation</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-gray-300">Gas optimization</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-orange-400">Security Checks:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-gray-300">Reentrancy protection</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-gray-300">Access control validation</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-gray-300">Input validation</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-gray-300">Emergency mechanisms</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/source-code">
              <Button size="lg" className="bg-gradient-to-r from-red-600 to-yellow-600 hover:from-red-500 hover:to-yellow-500 text-white px-8 py-4 text-lg font-semibold rounded-xl cyber-glow transition-all duration-300 transform hover:scale-105">
                <Flame className="mr-2 h-5 w-5" />
                Get Secure Templates
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-2 border-red-500 text-red-400 hover:bg-red-500 hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105">
                <Zap className="mr-2 h-5 w-5" />
                Security Audit Service
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}