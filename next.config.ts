import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['localhost', 'cdn.sanity.io'],
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Désactiver Turbopack temporairement pour éviter les problèmes PostCSS
  // webpack: (config) => {
  //   return config;
  // },
};

export default nextConfig;
