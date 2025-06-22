'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, Cpu, Zap, ShoppingCart, Flame } from 'lucide-react';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { products, featuredProductIds } from '@/lib/products';
import { PaymentModal } from '@/components/PaymentModal';

const categories = ['All', 'NFT', 'DeFi', 'Governance', 'Enterprise', 'Storage', 'Insurance', 'Identity', 'Real Estate', 'Crowdfunding', 'Blockchain', 'Tools', 'Solana', 'ICO', 'Social', 'AI', 'Trading', 'Exchange', 'Services'];

interface SourceCodeGalleryProps {
  showFeaturedOnly?: boolean;
}

export function SourceCodeGallery({ showFeaturedOnly = false }: SourceCodeGalleryProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  // Use featured products for home page, all products for source code page
  const displayProjects = showFeaturedOnly 
    ? products.filter(product => featuredProductIds.includes(product.id))
    : products;

  const filteredProjects = displayProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleBuyNow = (project: typeof products[0]) => {
    setSelectedProduct(project);
    setIsPaymentModalOpen(true);
  };

  const closePaymentModal = () => {
    setIsPaymentModalOpen(false);
    setSelectedProduct(null);
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
                <Link href={`/product/${project.id}`}>
                  <Button 
                    variant="outline"
                    className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white border-0 rounded-xl font-semibold transition-all duration-300 cyber-glow"
                  >
                    <Cpu className="mr-2 h-4 w-4" />
                    Preview
                  </Button>
                </Link>
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

      {/* Payment Modal */}
      {selectedProduct && (
        <PaymentModal
          isOpen={isPaymentModalOpen}
          onClose={closePaymentModal}
          product={selectedProduct}
        />
      )}
    </section>
  );
}