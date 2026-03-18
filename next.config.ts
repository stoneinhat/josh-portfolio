import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "pbs.twimg.com",
      },
      {
        protocol: "https",
        hostname: "static01.nyt.com",
      },
      {
        protocol: "https",
        hostname: "amplify.com",
      },
      {
        protocol: "https",
        hostname: "www.lexialearning.com",
      },
      {
        protocol: "https",
        hostname: "www.thereadingleague.org",
      },
      {
        protocol: "https",
        hostname: "www.educationnext.org",
      },
      {
        protocol: "https",
        hostname: "home.edweb.net",
      },
      {
        protocol: "https",
        hostname: "images.squarespace-cdn.com",
      },
      {
        protocol: "https",
        hostname: "www.shanahanonliteracy.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "assets-us-01.kc-usercontent.com",
      },
    ],
  },
};

export default nextConfig;
