import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  productionBrowserSourceMaps: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.dribbble.com",
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
