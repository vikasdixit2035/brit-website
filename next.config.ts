import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ab-public-bucket-prod.s3.ap-south-1.amazonaws.com",
        pathname: "/website_hero/**",
      },
      {
        protocol: "https",
        hostname: "d1qnndbrfkpp2h.cloudfront.net",
        pathname: "/static-images/companies/**",
      },
    ],
  },
};

export default nextConfig;
