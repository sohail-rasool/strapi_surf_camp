import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['localhost'], // 👈 allow Strapi running locally
  },
};

export default nextConfig;
