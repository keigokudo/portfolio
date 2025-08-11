import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    cssChunking: true, // load only the CSS that is needed for the current page
  },
};

export default nextConfig;
