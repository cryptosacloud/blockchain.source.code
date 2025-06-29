'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { PaymentModal } from '@/components/PaymentModal';
import { Product } from '@/lib/products';

interface ProductBuySectionProps {
  product: Product;
}

export function ProductBuySection({ product }: ProductBuySectionProps) {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const handleBuyNow = () => {
    setIsPaymentModalOpen(true);
  };

  const closePaymentModal = () => {
    setIsPaymentModalOpen(false);
  };

  return (
    <>
      {/* Purchase Actions */}
      <div className="space-y-4">
        <Button
          onClick={handleBuyNow}
          size="lg"
          className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-500 hover:to-blue-500 text-white py-4 text-lg font-semibold rounded-xl cyber-glow transition-all duration-300 transform hover:scale-105"
        >
          <ShoppingCart className="mr-2 h-5 w-5" />
          Buy Now - {product.price}
        </Button>
      </div>

      {/* Payment Modal */}
      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={closePaymentModal}
        product={product}
      />
    </>
  );
}