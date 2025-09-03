import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true
  },
  experimental: {
    esmExternals: 'loose',
    serverComponentsExternalPackages: ['mongoose']
  }
}

export default nextConfig;
