import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Cpu, Zap, Flame } from 'lucide-react';

const projectIdeas = [
  {
    id: 1,
    title: 'Decentralized Social Media Platform',
    description: 'Build a censorship-resistant social media platform with token rewards and NFT profile pictures.',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400',
    difficulty: 'Advanced',
    category: 'Social'
  },
  {
    id: 2,
    title: 'Cross-Chain Bridge Protocol',
    description: 'Create a secure bridge for transferring assets between different blockchain networks.',
    image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=400',
    difficulty: 'Expert',
    category: 'Infrastructure'
  },
  {
    id: 3,
    title: 'Decentralized Autonomous Organization (DAO)',
    description: 'Implement a governance system for decentralized decision-making and treasury management.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
    difficulty: 'Intermediate',
    category: 'Governance'
  },
  {
    id: 4,
    title: 'Yield Farming Protocol',
    description: 'Build a DeFi protocol for liquidity mining and automated yield optimization strategies.',
    image: 'https://images.pexels.com/photos/128867/coins-currency-investment-insurance-128867.jpeg?auto=compress&cs=tinysrgb&w=400',
    difficulty: 'Advanced',
    category: 'DeFi'
  },
  {
    id: 5,
    title: 'Blockchain-based Gaming Platform',
    description: 'Create a gaming ecosystem with play-to-earn mechanics and tradeable in-game assets.',
    image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400',
    difficulty: 'Advanced',
    category: 'Gaming'
  },
  {
    id: 6,
    title: 'Decentralized Cloud Storage',
    description: 'Build a distributed storage network with encryption and redundancy features.',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400',
    difficulty: 'Advanced',
    category: 'Storage'
  },
  {
    id: 7,
    title: 'Smart Contract Audit Tool',
    description: 'Develop an automated tool for detecting vulnerabilities in smart contracts.',
    image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=400',
    difficulty: 'Expert',
    category: 'Security'
  },
  {
    id: 8,
    title: 'Decentralized Marketplace',
    description: 'Create a peer-to-peer marketplace with escrow services and reputation systems.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400',
    difficulty: 'Intermediate',
    category: 'Marketplace'
  },
  {
    id: 9,
    title: 'Blockchain Identity Management',
    description: 'Implement a self-sovereign identity system with verifiable credentials.',
    image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=400',
    difficulty: 'Advanced',
    category: 'Identity'
  },
  {
    id: 10,
    title: 'Decentralized Finance (DeFi) Dashboard',
    description: 'Build a comprehensive dashboard for tracking DeFi investments and yields.',
    image: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=400',
    difficulty: 'Intermediate',
    category: 'DeFi'
  },
  {
    id: 11,
    title: 'NFT Fractionalization Platform',
    description: 'Allow users to buy and sell fractions of expensive NFTs through tokenization.',
    image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=400',
    difficulty: 'Advanced',
    category: 'NFT'
  },
  {
    id: 12,
    title: 'Blockchain Voting System',
    description: 'Create a transparent and tamper-proof voting system for elections and governance.',
    image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400',
    difficulty: 'Intermediate',
    category: 'Governance'
  },
  {
    id: 13,
    title: 'Decentralized Insurance Protocol',
    description: 'Build a peer-to-peer insurance platform with parametric and mutual coverage.',
    image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=400',
    difficulty: 'Advanced',
    category: 'Insurance'
  },
  {
    id: 14,
    title: 'Carbon Credit Trading Platform',
    description: 'Create a marketplace for trading verified carbon credits using blockchain technology.',
    image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400',
    difficulty: 'Intermediate',
    category: 'Sustainability'
  },
  {
    id: 15,
    title: 'Decentralized Prediction Market',
    description: 'Build a platform for betting on future events with oracle-based outcome resolution.',
    image: 'https://images.pexels.com/photos/3483098/pexels-photo-3483098.jpeg?auto=compress&cs=tinysrgb&w=400',
    difficulty: 'Advanced',
    category: 'Prediction'
  },
  {
    id: 16,
    title: 'Blockchain Supply Chain Tracker',
    description: 'Track products from origin to consumer with immutable blockchain records.',
    image: 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=400',
    difficulty: 'Intermediate',
    category: 'Supply Chain'
  },
  {
    id: 17,
    title: 'Decentralized Content Delivery Network',
    description: 'Build a distributed CDN using blockchain incentives and IPFS technology.',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400',
    difficulty: 'Expert',
    category: 'Infrastructure'
  },
  {
    id: 18,
    title: 'Smart Contract-based Escrow Service',
    description: 'Create an automated escrow system for secure peer-to-peer transactions.',
    image: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=400',
    difficulty: 'Intermediate',
    category: 'Finance'
  },
  {
    id: 19,
    title: 'Decentralized Freelancing Platform',
    description: 'Build a platform connecting freelancers and clients with crypto payments and reputation.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
    difficulty: 'Advanced',
    category: 'Marketplace'
  },
  {
    id: 20,
    title: 'Blockchain-based Certificate Verification',
    description: 'Create a system for issuing and verifying educational and professional certificates.',
    image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=400',
    difficulty: 'Intermediate',
    category: 'Education'
  }
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Beginner': return 'bg-green-500/20 text-green-400 border-green-500/30';
    case 'Intermediate': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
    case 'Advanced': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
    case 'Expert': return 'bg-red-500/20 text-red-400 border-red-500/30';
    default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
  }
};

export function TopProjectIdeas() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gray-800/50 backdrop-blur-lg border border-orange-500/30 rounded-full px-6 py-3 mb-8">
            <Flame className="h-5 w-5 text-orange-400 animate-pulse" />
            <span className="text-orange-400 font-medium">Revolutionary Ideas</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent neon-text">
              Top 20 Revolutionary
            </span>
            <br />
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent neon-text">
              Project Ideas
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Explore revolutionary Web3 project ideas with complete source code, tutorials, and implementation guides.
            Perfect for learning and building your 
            <span className="text-orange-400 font-semibold"> revolutionary Web3 portfolio</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projectIdeas.map((idea) => (
            <Card key={idea.id} className="group bg-gray-800/50 backdrop-blur-lg border-gray-700/50 hover:border-orange-400/50 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 rounded-2xl overflow-hidden holographic">
              <div className="relative overflow-hidden">
                <img
                  src={idea.image}
                  alt={idea.title}
                  className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                <Badge className={`absolute top-2 right-2 border ${getDifficultyColor(idea.difficulty)}`}>
                  {idea.difficulty}
                </Badge>
                <div className="absolute bottom-2 left-2">
                  <Flame className="h-4 w-4 text-orange-400 animate-pulse" />
                </div>
              </div>
              
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold line-clamp-2 text-white group-hover:text-orange-400 transition-colors">
                  {idea.title}
                </CardTitle>
                <Badge variant="outline" className="w-fit text-xs border-gray-600 text-gray-300">
                  {idea.category}
                </Badge>
              </CardHeader>
              
              <CardContent className="pt-0 pb-4">
                <CardDescription className="text-sm line-clamp-3 mb-4 text-gray-300">
                  {idea.description}
                </CardDescription>
                <Button variant="outline" size="sm" className="w-full border-gray-600 text-gray-300 hover:bg-gradient-to-r hover:from-orange-600 hover:to-red-600 hover:text-white hover:border-transparent transition-all duration-300 rounded-xl">
                  <Cpu className="mr-2 h-4 w-4" />
                  Source Code
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button size="lg" className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white px-10 py-4 text-lg font-semibold rounded-xl cyber-glow transition-all duration-300 transform hover:scale-105">
            <Flame className="mr-2 h-5 w-5" />
            View All Revolutionary Ideas
          </Button>
        </div>
      </div>
    </section>
  );
}