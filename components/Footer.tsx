import Link from 'next/link';
import { Code2, Twitter, MessageCircle, Mail, Cpu, Zap } from 'lucide-react';

const footerSections = {
  contact: {
    title: 'Contact',
    links: [
      { name: 'hello@blockchaincoders.dev', href: 'mailto:hello@blockchaincoders.dev', icon: Mail },
      { name: '@BlockchainCoders', href: 'https://twitter.com/blockchaincoders', icon: Twitter },
      { name: 'Discord Community', href: 'https://discord.gg/blockchaincoders', icon: MessageCircle },
    ]
  },
  legal: {
    title: 'Legal',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Refund Policy', href: '/refund' },
      { name: 'Shipping & Delivery', href: '/shipping' },
      { name: 'IP Rights', href: '/ip-rights' },
    ]
  }
};

export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-cyan-500/20 text-white relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <div className="relative">
                <Code2 className="h-10 w-10 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <Zap className="h-5 w-5 text-purple-400 absolute -top-1 -right-1 animate-pulse" />
              </div>
              <span className="font-bold text-2xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent neon-text">
                The Blockchain Coders
              </span>
            </Link>
            <p className="text-gray-300 mb-8 max-w-md leading-relaxed">
              Empowering developers with premium blockchain and Web3 source code. 
              Build the future of decentralized applications with our comprehensive 
              <span className="text-cyan-400 font-semibold"> cyberpunk-grade </span> resources.
            </p>
            <div className="flex space-x-6">
              <a
                href="https://twitter.com/blockchaincoders"
                className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110 duration-300"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="https://discord.gg/blockchaincoders"
                className="text-gray-400 hover:text-purple-400 transition-colors transform hover:scale-110 duration-300"
                aria-label="Discord"
              >
                <MessageCircle className="h-6 w-6" />
              </a>
              <a
                href="mailto:hello@blockchaincoders.dev"
                className="text-gray-400 hover:text-green-400 transition-colors transform hover:scale-110 duration-300"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-cyan-400 flex items-center">
              <Cpu className="h-5 w-5 mr-2" />
              {footerSections.contact.title}
            </h3>
            <ul className="space-y-4">
              {footerSections.contact.links.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors flex items-center space-x-3 group"
                    >
                      <Icon className="h-4 w-4 group-hover:text-cyan-400 transition-colors" />
                      <span>{link.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-purple-400 flex items-center">
              <Zap className="h-5 w-5 mr-2" />
              {footerSections.legal.title}
            </h3>
            <ul className="space-y-4">
              {footerSections.legal.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors hover:text-purple-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} The Blockchain Coders. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0 flex items-center">
              Built with 
              <span className="text-cyan-400 mx-1">❤️</span> 
              for the 
              <span className="text-purple-400 ml-1 font-semibold">Web3 community</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}