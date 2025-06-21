'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, Cpu, Zap, ShoppingCart, Flame } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  price: string;
  features: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'NFT Marketplace',
    description: 'Complete NFT marketplace with minting, trading, and auction features. Built with React, Solidity, and IPFS integration.',
    image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'NFT',
    price: '$299',
    features: ['Smart Contracts', 'IPFS Storage', 'Wallet Integration', 'Auction System']
  },
  {
    id: 2,
    title: 'Uniswap Clone',
    description: 'Decentralized exchange (DEX) with automated market maker (AMM) functionality and liquidity pools.',
    image: 'https://images.pexels.com/photos/7567522/pexels-photo-7567522.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'DeFi',
    price: '$399',
    features: ['AMM Protocol', 'Liquidity Pools', 'Token Swapping', 'Yield Farming']
  },
  {
    id: 3,
    title: 'Voting DApp',
    description: 'Transparent and secure voting application using blockchain technology for elections and governance.',
    image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Governance',
    price: '$199',
    features: ['Secure Voting', 'Result Transparency', 'Voter Verification', 'Real-time Updates']
  },
  {
    id: 4,
    title: 'Supply Chain Management',
    description: 'Track products from manufacturing to delivery with immutable blockchain records and QR code integration.',
    image: 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Enterprise',
    price: '$499',
    features: ['Product Tracking', 'QR Integration', 'Multi-party Access', 'Audit Trail']
  },
  {
    id: 5,
    title: 'Secure File Storage',
    description: 'Decentralized file storage system with encryption, access control, and IPFS integration.',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Storage',
    price: '$249',
    features: ['File Encryption', 'Access Control', 'IPFS Storage', 'Version Control']
  },
  {
    id: 6,
    title: 'Insurance Claims DApp',
    description: 'Automated insurance claims processing with smart contracts and parametric insurance features.',
    image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Insurance',
    price: '$349',
    features: ['Automated Claims', 'Smart Contracts', 'Oracle Integration', 'Parametric Insurance']
  },
  {
    id: 7,
    title: 'Digital Identity Verification',
    description: 'Self-sovereign identity solution with verifiable credentials and zero-knowledge proofs.',
    image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Identity',
    price: '$299',
    features: ['Self-Sovereign ID', 'Verifiable Credentials', 'Zero-Knowledge Proofs', 'Privacy Protection']
  },
  {
    id: 8,
    title: 'Real Estate Tokenization',
    description: 'Tokenize real estate properties with fractional ownership and automated rent distribution.',
    image: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Real Estate',
    price: '$449',
    features: ['Property Tokenization', 'Fractional Ownership', 'Rent Distribution', 'Legal Compliance']
  },
  {
    id: 9,
    title: 'Crowdfunding Platform',
    description: 'Decentralized crowdfunding with milestone-based fund release and investor protection.',
    image: 'https://images.pexels.com/photos/3483098/pexels-photo-3483098.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Crowdfunding',
    price: '$329',
    features: ['Milestone Funding', 'Investor Protection', 'Project Verification', 'Refund Mechanism']
  },
  {
    id: 10,
    title: 'Custom EVM Blockchain',
    description: 'Build a customized EVM-based Proof-of-Stake blockchain compatible with Ethereum, BSC, and Polygon.',
    image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Blockchain',
    price: '$1299',
    features: ['Validator Staking', 'ERC20/721/1155 Support', 'Testnet Setup', 'Full Source Code']
  },
  {
    id: 11,
    title: 'Blockchain Faucet Website',
    description: 'Create a custom faucet dApp that lets users claim tokens for free with captcha and anti-bot protection.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Tools',
    price: '$199',
    features: ['Multi-chain Support', 'Captcha Protection', 'Wallet Integration', 'Rate Limiting']
  },
  {
    id: 12,
    title: 'Blockchain Explorer',
    description: 'Build a custom blockchain explorer to track transactions, wallets, and tokens on your network.',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Tools',
    price: '$399',
    features: ['Transaction Tracking', 'Wallet Analytics', 'Token Support', 'Custom Styling']
  },
  {
    id: 13,
    title: 'Token Generator',
    description: 'Secure, easy-to-use token creation script for Ethereum, BSC, Solana, or your own chain.',
    image: 'https://images.pexels.com/photos/7567522/pexels-photo-7567522.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Tools',
    price: '$149',
    features: ['Multi-chain Support', 'One-click Generation', 'Security Audited', 'Custom Parameters']
  },
  {
    id: 14,
    title: 'Blockchain Development Assistant',
    description: 'End-to-end blockchain development assistance including smart contracts, audits, and dApps.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Services',
    price: '$99/hr',
    features: ['Smart Contract Dev', 'Security Audits', 'dApp Development', 'Tokenomics']
  },
  {
    id: 15,
    title: 'Solana SPL Token',
    description: 'Create and deploy your custom SPL token on Solana with metadata setup and wallet integration.',
    image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Solana',
    price: '$199',
    features: ['SPL Token Creation', 'Metadata Setup', 'Phantom Integration', 'Minting Controls']
  },
  {
    id: 16,
    title: 'Staking DApp',
    description: 'Professional staking dApp where users can stake tokens and earn rewards with customizable UI.',
    image: 'https://images.pexels.com/photos/7567522/pexels-photo-7567522.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'DeFi',
    price: '$449',
    features: ['Token Staking', 'Reward Distribution', 'Multi-chain Support', 'Custom UI']
  },
  {
    id: 17,
    title: 'Complete NFT Marketplace',
    description: 'Full-featured NFT marketplace on Ethereum, BSC, or Solana with minting and auction support.',
    image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'NFT',
    price: '$699',
    features: ['Minting Platform', 'Auction System', '13 Page Script', 'Multi-chain Support']
  },
  {
    id: 18,
    title: 'ICO DApp',
    description: 'Complete ICO dApp with token sales, whitelisting, vesting, and wallet connection.',
    image: 'https://images.pexels.com/photos/3483098/pexels-photo-3483098.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'ICO',
    price: '$549',
    features: ['Token Sales', 'Whitelisting', 'Vesting Schedule', 'Multi-chain Support']
  },
  {
    id: 19,
    title: 'Blockchain Chat DApp',
    description: 'Secure Web3-based decentralized chat application with wallet login and encrypted messaging.',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Social',
    price: '$399',
    features: ['Wallet Login', 'Encrypted Messages', 'On-chain Data', 'Real-time Chat']
  },
  {
    id: 20,
    title: 'Full Uniswap Clone',
    description: 'Complete Uniswap clone with liquidity pools, swaps, staking, and farming features.',
    image: 'https://images.pexels.com/photos/7567522/pexels-photo-7567522.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'DeFi',
    price: '$799',
    features: ['Liquidity Pools', 'Token Swaps', 'Yield Farming', 'Responsive Design']
  },
  {
    id: 21,
    title: 'MetaMask Clone Extension',
    description: 'Secure Chrome extension wallet with Web3 integration for your blockchain or token project.',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Tools',
    price: '$899',
    features: ['Chrome Extension', 'Web3 Integration', 'Secure Wallet', 'Custom Branding']
  },
  {
    id: 22,
    title: 'ChatGPT Web3 Chat Clone',
    description: 'AI-powered Web3 chat interface with wallet authentication and token-gated access.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'AI',
    price: '$649',
    features: ['AI Integration', 'Wallet Auth', 'Token Gating', 'Tipping System']
  },
  {
    id: 23,
    title: 'Smart Contract Auditing DApp',
    description: 'AI-powered dApp for auditing Solidity smart contracts with vulnerability detection.',
    image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'AI',
    price: '$749',
    features: ['AI Auditing', 'Vulnerability Detection', 'Report Generation', 'Syntax Checks']
  },
  {
    id: 24,
    title: 'Crypto Trading Bot DApp',
    description: 'Frontend dApp for automated trading strategies with CEX/DEX APIs and Web3 wallet automation.',
    image: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Trading',
    price: '$999',
    features: ['Trading Strategies', 'API Integration', 'Wallet Automation', 'Risk Management']
  },
  {
    id: 25,
    title: 'Crypto Airdrop DApp',
    description: 'Interactive airdrop dApp with task completion, anti-bot protection, and referral options.',
    image: 'https://images.pexels.com/photos/3483098/pexels-photo-3483098.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Tools',
    price: '$349',
    features: ['Task Completion', 'Anti-bot Protection', 'Referral System', 'Wallet Integration']
  },
  {
    id: 26,
    title: 'Solana Token Airdrop DApp',
    description: 'Fast SPL token airdrop dApp with wallet authentication and eligibility checks.',
    image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Solana',
    price: '$299',
    features: ['SPL Token Support', 'Eligibility Checks', 'Phantom Wallet', 'Fast Distribution']
  },
  {
    id: 27,
    title: 'Web3 Facebook Clone',
    description: 'Decentralized social network with posts, likes, profiles, and wallet-based login.',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Social',
    price: '$899',
    features: ['Social Features', 'Wallet Login', 'Decentralized Posts', 'Profile System']
  },
  {
    id: 28,
    title: 'Web3 Tools Suite',
    description: 'Complete Web3 tools suite with wallet connector, token creator, staking, ICO, and NFT marketplace.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Tools',
    price: '$1499',
    features: ['Multiple Tools', 'Next.js Built', 'Multi-chain Support', 'Complete Suite']
  },
  {
    id: 29,
    title: 'Solana NFT Marketplace',
    description: 'NFT marketplace on Solana with minting, buying, listing, and Phantom wallet support.',
    image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Solana',
    price: '$599',
    features: ['Solana Native', 'NFT Minting', 'Phantom Integration', 'Gaming Support']
  },
  {
    id: 30,
    title: 'AI Chrome Extension',
    description: 'Custom Chrome extension powered by ChatGPT or Gemini for automation and trading signals.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'AI',
    price: '$449',
    features: ['AI Powered', 'Chrome Extension', 'Custom Tasks', 'Backend Integration']
  },
  {
    id: 31,
    title: 'Multi-Chain Crypto Exchange',
    description: 'Centralized or hybrid exchange platform with multi-chain support across 15+ blockchains.',
    image: 'https://images.pexels.com/photos/7567522/pexels-photo-7567522.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Exchange',
    price: '$2499',
    features: ['15+ Blockchains', 'Order Book', 'Liquidity System', 'Security Layers']
  },
  {
    id: 32,
    title: 'Crypto Hedge Fund DApp',
    description: 'Decentralized hedge fund platform with investment pools, portfolio management, and transparent returns.',
    image: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'DeFi',
    price: '$1299',
    features: ['Investment Pools', 'Portfolio Management', 'Transparent Returns', 'Smart Contracts']
  },
  {
    id: 33,
    title: 'ETH Arbitrage Trading DApp',
    description: 'DApp that scans ETH exchanges for arbitrage opportunities with real-time alerts and execution.',
    image: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Trading',
    price: '$899',
    features: ['Arbitrage Scanner', 'Real-time Alerts', 'Auto Execution', 'Multi-exchange']
  },
  {
    id: 34,
    title: 'Advanced Web3 Wallet Connector',
    description: 'Powerful Web3 wallet connector supporting MetaMask, WalletConnect, Coinbase across multiple networks.',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Tools',
    price: '$299',
    features: ['Multiple Wallets', 'Multi-network', 'Easy Integration', 'Custom Networks']
  },
  {
    id: 35,
    title: 'AI Solidity Code Editor',
    description: 'AI-powered Solidity IDE with real-time contract audits, improvements, and risk highlighting.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'AI',
    price: '$799',
    features: ['AI Powered', 'Real-time Audits', 'Code Suggestions', 'Risk Analysis']
  },
  {
    id: 36,
    title: 'Solana SaaS DApp',
    description: 'Scalable SaaS platform on Solana with subscription services and token-gated access.',
    image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Solana',
    price: '$1199',
    features: ['SaaS Platform', 'Subscription Model', 'Token Gating', 'Scalable Backend']
  },
  {
    id: 37,
    title: 'AI Image Generator App',
    description: 'AI art platform using Stable Diffusion or DALL·E with optional Web3 payments integration.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'AI',
    price: '$999',
    features: ['AI Art Generation', 'Multiple Models', 'Web3 Payments', 'Custom Styling']
  }
];

// Featured products for home page (9 specific products)
const featuredProductIds = [31, 33, 20, 21, 17, 10, 11, 12, 8]; // IDs for the 9 featured products

const categories = ['All', 'NFT', 'DeFi', 'Governance', 'Enterprise', 'Storage', 'Insurance', 'Identity', 'Real Estate', 'Crowdfunding', 'Blockchain', 'Tools', 'Solana', 'ICO', 'Social', 'AI', 'Trading', 'Exchange', 'Services'];

interface SourceCodeGalleryProps {
  showFeaturedOnly?: boolean;
}

export function SourceCodeGallery({ showFeaturedOnly = false }: SourceCodeGalleryProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Use featured products for home page, all products for source code page
  const displayProjects = showFeaturedOnly 
    ? projects.filter(project => featuredProductIds.includes(project.id))
    : projects;

  const filteredProjects = displayProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleBuyNow = (project: Project) => {
    // Redirect to contact page with pre-selected service
    const serviceType = project.title.toLowerCase().replace(/\s+/g, '-');
    window.location.href = `/contact?service=${serviceType}&price=${project.price.replace('$', '')}`;
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gray-800/50 backdrop-blur-lg border border-red-500/30 rounded-full px-6 py-3 mb-8">
            <Flame className="h-5 w-5 text-red-400 animate-pulse" />
            <span className="text-red-400 font-medium">Revolutionary Collection</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent neon-text">
              Design Arsenal
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Get revolutionary Web3 design templates and blockchain source code including smart contracts, frontend, and deployment scripts.
            Each template comes with comprehensive documentation and 
            <span className="text-orange-400 font-semibold"> revolutionary tutorials</span>.
          </p>
        </div>

        {/* Search and Filter - only show on source code page */}
        {!showFeaturedOnly && (
          <div className="flex flex-col md:flex-row gap-6 mb-12">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-red-400 h-5 w-5" />
              <Input
                placeholder="Search the revolution..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 bg-gray-800/50 backdrop-blur-lg border-red-500/30 text-white placeholder:text-gray-400 rounded-xl h-12 cyber-glow"
              />
            </div>
            <div className="flex gap-3 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={`whitespace-nowrap rounded-xl transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white cyber-glow'
                      : 'border-gray-600 text-gray-300 hover:border-red-400 hover:text-red-400'
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group bg-gray-800/50 backdrop-blur-lg border-gray-700/50 hover:border-red-400/50 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 rounded-2xl overflow-hidden holographic">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                <Badge className="absolute top-4 right-4 bg-gradient-to-r from-red-600 to-orange-600 text-white border-0">
                  {project.category}
                </Badge>
                <div className="absolute bottom-4 left-4">
                  <Flame className="h-6 w-6 text-red-400 animate-pulse" />
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                    {project.title}
                  </CardTitle>
                  <span className="text-2xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                    {project.price}
                  </span>
                </div>
                <CardDescription className="text-gray-300 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pb-4">
                <div className="flex flex-wrap gap-2">
                  {project.features.map((feature, index) => (
                    <Badge key={index} variant="secondary" className="text-xs bg-gray-700/50 text-gray-300 border-gray-600">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex gap-2">
                <Button 
                  onClick={() => handleBuyNow(project)}
                  className="flex-1 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-500 hover:to-blue-500 text-white rounded-xl font-semibold transition-all duration-300 cyber-glow"
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Buy Now
                </Button>
                <Button 
                  variant="outline"
                  className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white border-0 rounded-xl font-semibold transition-all duration-300 cyber-glow"
                >
                  <Cpu className="mr-2 h-4 w-4" />
                  Preview
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-12 max-w-md mx-auto">
              <p className="text-gray-400 text-lg">No templates found in the revolution.</p>
              <p className="text-red-400 text-sm mt-2">Try adjusting your search parameters.</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}