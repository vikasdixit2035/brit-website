import type { NextConfig } from "next";
import { dirname } from "path";
import { fileURLToPath } from "url";

const appRoot = dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: appRoot,
  },
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
