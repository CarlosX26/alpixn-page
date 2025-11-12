import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL("https://images.unsplash.com/**?w=400&h=400&fit=crop"),
    ],
  },
}

export default nextConfig
