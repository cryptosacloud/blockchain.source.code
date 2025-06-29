import './globals.css';
import type { Metadata } from 'next';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Revolution Web3 Design Store - Premium Web3 & Blockchain Source Code',
  description: 'Revolutionary Web3 design templates and blockchain source code. Get premium NFT marketplaces, DeFi protocols, DApps, and cutting-edge Web3 solutions.',
  keywords: 'web3 design, blockchain templates, NFT marketplace, DeFi protocols, smart contracts, solidity, ethereum, dapp development, web3 store',
  authors: [{ name: 'Revolution Web3 Design Store' }],
  openGraph: {
    title: 'Revolution Web3 Design Store - Premium Web3 Templates',
    description: 'Revolutionary Web3 design templates and blockchain source code for the future',
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="font-sans">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}