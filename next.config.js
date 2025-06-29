/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true 
  },
  optimizeFonts: false,
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  experimental: {
    fontLoaders: []
  }
};

module.exports = nextConfig;