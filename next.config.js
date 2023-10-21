/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    output: "export",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
};
module.exports = nextConfig;
