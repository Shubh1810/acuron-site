/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,  // Add trailing slashes to URLs
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: process.env.NODE_ENV === 'development' ? true : false,  // Enable optimization for production builds
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    domains: ['cdn.builder.io'], // Add other domains if needed
  }
}

module.exports = nextConfig; 