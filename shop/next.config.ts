import type { NextConfig } from "next";

// const isProd = process.env.NODE_ENV === 'production';
// basePath:  isProd ? '/BagsShop' : '',
// assetPrefix: isProd ? '/BagsShop/' : '',
const nextConfig: NextConfig = {
  output: "export",
  basePath: "/BagsShop",
  assetPrefix: "/BagsShop/",
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.postimg.cc",
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
