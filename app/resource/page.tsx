import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Video, Code, FileText, ExternalLink, Cpu, Zap, Shield, Flame } from 'lucide-react';
import Link from 'next/link';

const resources = [
  {
    id: 1,
    title: 'Solidity Fundamentals',
    description: 'Complete guide to Solidity programming language with examples and best practices.',
    type: 'Documentation',
    category: 'Smart Contracts',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400',
    icon: FileText,
    href: '/resource/solidity-fundamentals'
  },
  {
    id: 2,
    title: 'Web3.js Tutorial Series',
    description: 'Learn how to interact with Ethereum blockchain using Web3.js library.',
    type: 'Tutorial Series',
    category: 'Frontend',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
    icon: Video,
    href: '/resource/web3js-tutorial'
  },
  {
    id: 3,
    title: 'DeFi Protocol Templates',
    description: 'Ready-to-use templates for building DeFi applications and protocols.',
    type: 'Code Template',
    category: 'DeFi',
    image: 'https://images.pexels.com/photos/7567522/pexels-photo-7567522.jpeg?auto=compress&cs=tinysrgb&w=400',
    icon: Code,
    href: '/resource/defi-templates'
  },
  {
    id: 4,
    title: 'Smart Contract Security Guide',
    description: 'Comprehensive security practices and common vulnerabilities in smart contracts.',
    type: 'Guide',
    category: 'Security',
    image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=400',
    icon: BookOpen,
    href: '/resource/security-guide'
  },
  {
    id: 5,
    title: 'NFT Development Masterclass',
    description: 'Complete course on building NFT marketplaces and minting platforms.',
    type: 'Masterclass',
    category: 'NFT',
    image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=400',
    icon: Video,
    href: '/resource/nft-development'
  },
  {
    id: 6,
    title: 'Blockchain Architecture Patterns',
    description: 'Design patterns and architectural best practices for blockchain applications.',
    type: 'Documentation',
    category: 'Architecture',
    image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=400',
    icon: FileText,
    href: '/resource/blockchain-architecture'
  }
];

export default function ResourcePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-red-900 to-orange-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-gray-800/50 backdrop-blur-lg border border-red-500/30 rounded-full px-6 py-3 mb-8">
              <Flame className="h-5 w-5 text-red-400 animate-pulse" />
              <span className="text-red-400 font-medium">Resource Database</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent neon-text">
                Revolutionary Web3
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent neon-text">
                Resources
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Access our comprehensive collection of tutorials, documentation, templates, and guides 
              to accelerate your Web3 development journey into the 
              <span className="text-orange-400 font-semibold"> revolutionary frontier</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource) => {
              const Icon = resource.icon;
              return (
                <Card key={resource.id} className="group bg-gray-800/50 backdrop-blur-lg border-gray-700/50 hover:border-red-400/50 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 rounded-2xl overflow-hidden holographic">
                  <div className="relative overflow-hidden">
                    <img
                      src={resource.image}
                      alt={resource.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gradient-to-r from-red-600 to-orange-600 text-white border-0">
                        {resource.category}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-gray-800/90 backdrop-blur-lg p-2 rounded-full border border-red-500/30">
                        <Icon className="h-5 w-5 text-red-400" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <Flame className="h-6 w-6 text-orange-400 animate-pulse" />
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                        {resource.title}
                      </CardTitle>
                      <Badge variant="outline" className="text-xs border-gray-600 text-gray-300">
                        {resource.type}
                      </Badge>
                    </div>
                    <CardDescription className="text-gray-300 leading-relaxed">
                      {resource.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link href={resource.href}>
                      <Button className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white rounded-xl">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Resource
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Resources Section */}
      <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gray-800/50 backdrop-blur-lg border border-orange-500/30 rounded-full px-6 py-3 mb-8">
              <Shield className="h-5 w-5 text-orange-400 animate-pulse" />
              <span className="text-orange-400 font-medium">Learning Arsenal</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent neon-text">
                Additional Learning Resources
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Expand your knowledge with our curated collection of external resources and 
              <span className="text-red-400 font-semibold"> revolutionary tools</span>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-8 bg-gray-800/50 backdrop-blur-lg border-red-500/30 rounded-2xl holographic group hover:border-red-400/50 transition-all duration-300">
              <BookOpen className="h-16 w-16 text-red-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-semibold mb-4 text-red-400">Documentation</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Comprehensive guides and API references from the revolution</p>
            </Card>
            <Card className="text-center p-8 bg-gray-800/50 backdrop-blur-lg border-orange-500/30 rounded-2xl holographic group hover:border-orange-400/50 transition-all duration-300">
              <Video className="h-16 w-16 text-orange-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-semibold mb-4 text-orange-400">Video Tutorials</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Step-by-step video courses and revolutionary workshops</p>
            </Card>
            <Card className="text-center p-8 bg-gray-800/50 backdrop-blur-lg border-green-500/30 rounded-2xl holographic group hover:border-green-400/50 transition-all duration-300">
              <Code className="h-16 w-16 text-green-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-semibold mb-4 text-green-400">Code Examples</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Ready-to-use code snippets and revolutionary templates</p>
            </Card>
            <Card className="text-center p-8 bg-gray-800/50 backdrop-blur-lg border-yellow-500/30 rounded-2xl holographic group hover:border-yellow-400/50 transition-all duration-300">
              <FileText className="h-16 w-16 text-yellow-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-semibold mb-4 text-yellow-400">Best Practices</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Industry standards and revolutionary security guidelines</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}