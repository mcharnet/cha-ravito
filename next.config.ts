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
  // Configuration pour améliorer l'hydratation
  reactStrictMode: true,
  // Désactiver Turbopack temporairement pour éviter les problèmes PostCSS
  // webpack: (config) => {
  //   return config;
  // },
};

export default nextConfig;
