import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "4mb",
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vaut2o6ogotr4u8c.public.blob.vercel-storage.com"
      }
    ]
  }
};

export default nextConfig;
