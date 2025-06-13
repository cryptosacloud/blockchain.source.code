import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'The Blockchain Coders - Source Code | Web3 & Blockchain Projects',
  description: 'Get source code for top blockchain and Web3 projects including NFT Marketplace, DeFi protocols, DApps, and more. Learn blockchain development with real-world examples.',
  keywords: 'blockchain, web3, source code, NFT, DeFi, smart contracts, solidity, ethereum, dapp development',
  authors: [{ name: 'The Blockchain Coders' }],
  openGraph: {
    title: 'The Blockchain Coders - Source Code',
    description: 'Premium blockchain and Web3 project source codes for developers',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}