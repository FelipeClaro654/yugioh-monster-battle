import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https", // Or 'http' if applicable
        hostname: "images.ygoprodeck.com", // Replace with the actual hostname of your image source
        port: "", // Leave empty unless a specific port is required
        pathname: "/images/cards_small/**", // Adjust the path as needed, using globs for flexibility
      },
      // Add more objects for other external domains if necessary
    ],
  },
};

export default nextConfig;
