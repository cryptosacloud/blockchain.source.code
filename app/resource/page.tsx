import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Video, Code, FileText, Download, ExternalLink, Cpu, Zap, Shield } from 'lucide-react';

const resources = [
  {
    id: 1,
    title: 'Solidity Fundamentals',
    description: 'Complete guide to Solidity programming language with examples and best practices.',
    type: 'Documentation',
    category: 'Smart Contracts',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400',
    icon: FileText,
    downloadable: true
  },
  {
    id: 2,
    title: 'Web3.js Tutorial Series',
    description: 'Learn how to interact with Ethereum blockchain using Web3.js library.',
    type: 'Video Course',
    category: 'Frontend',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
    icon: Video,
    downloadable: false
  },
  {
    id: 3,
    title: 'DeFi Protocol Templates',
    description: 'Ready-to-use templates for building DeFi applications and protocols.',
    type: 'Code Template',
    category: 'DeFi',
    image: 'https://images.pexels.com/photos/7567522/pexels-photo-7567522.jpeg?auto=compress&cs=tinysrgb&w=400',
    icon: Code,
    downloadable: true
  },
  {
    id: 4,
    title: 'Smart Contract Security Guide',
    description: 'Comprehensive security practices and common vulnerabilities in smart contracts.',
    type: 'Guide',
    category: 'Security',
    image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=400',
    icon: BookOpen,
    downloadable: true
  },
  {
    id: 5,
    title: 'NFT Development Masterclass',
    description: 'Complete course on building NFT marketplaces and minting platforms.',
    type: 'Video Course',
    category: 'NFT',
    image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=400',
    icon: Video,
    downloadable: false
  },
  {
    id: 6,
    title: 'Blockchain Architecture Patterns',
    description: 'Design patterns and architectural best practices for blockchain applications.',
    type: 'Documentation',
    category: 'Architecture',
    image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=400',
    icon: FileText,
    downloadable: true
  }
];

export default function ResourcePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-gray-800/50 backdrop-blur-lg border border-cyan-500/30 rounded-full px-6 py-3 mb-8">
              <Cpu className="h-5 w-5 text-cyan-400 animate-pulse" />
              <span className="text-cyan-400 font-medium">Resource Database</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent neon-text">
                Blockchain Development
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent neon-text">
                Resources
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Access our comprehensive collection of tutorials, documentation, templates, and guides 
              to accelerate your blockchain development journey into the 
              <span className="text-purple-400 font-semibold"> digital frontier</span>.
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
                <Card key={resource.id} className="group bg-gray-800/50 backdrop-blur-lg border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 rounded-2xl overflow-hidden holographic">
                  <div className="relative overflow-hidden">
                    <img
                      src={resource.image}
                      alt={resource.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white border-0">
                        {resource.category}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-gray-800/90 backdrop-blur-lg p-2 rounded-full border border-cyan-500/30">
                        <Icon className="h-5 w-5 text-cyan-400" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <Zap className="h-6 w-6 text-purple-400 animate-pulse" />
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
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
                    <div className="flex gap-2">
                      <Button className="flex-1 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white rounded-xl">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Resource
                      </Button>
                      {resource.downloadable && (
                        <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400 rounded-xl">
                          <Download className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
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
            <div className="inline-flex items-center space-x-2 bg-gray-800/50 backdrop-blur-lg border border-purple-500/30 rounded-full px-6 py-3 mb-8">
              <Shield className="h-5 w-5 text-purple-400 animate-pulse" />
              <span className="text-purple-400 font-medium">Learning Arsenal</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent neon-text">
                Additional Learning Resources
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Expand your knowledge with our curated collection of external resources and 
              <span className="text-cyan-400 font-semibold"> cyberpunk tools</span>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-8 bg-gray-800/50 backdrop-blur-lg border-cyan-500/30 rounded-2xl holographic group hover:border-cyan-400/50 transition-all duration-300">
              <BookOpen className="h-16 w-16 text-cyan-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-semibold mb-4 text-cyan-400">Documentation</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Comprehensive guides and API references from the future</p>
            </Card>
            <Card className="text-center p-8 bg-gray-800/50 backdrop-blur-lg border-purple-500/30 rounded-2xl holographic group hover:border-purple-400/50 transition-all duration-300">
              <Video className="h-16 w-16 text-purple-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-semibold mb-4 text-purple-400">Video Tutorials</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Step-by-step video courses and holographic workshops</p>
            </Card>
            <Card className="text-center p-8 bg-gray-800/50 backdrop-blur-lg border-green-500/30 rounded-2xl holographic group hover:border-green-400/50 transition-all duration-300">
              <Code className="h-16 w-16 text-green-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-semibold mb-4 text-green-400">Code Examples</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Ready-to-use code snippets and quantum templates</p>
            </Card>
            <Card className="text-center p-8 bg-gray-800/50 backdrop-blur-lg border-orange-500/30 rounded-2xl holographic group hover:border-orange-400/50 transition-all duration-300">
              <FileText className="h-16 w-16 text-orange-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-semibold mb-4 text-orange-400">Best Practices</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Industry standards and cybersecurity guidelines</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}