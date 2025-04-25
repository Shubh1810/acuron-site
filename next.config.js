/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Change to 'export' for static site generation
  trailingSlash: true,  // Add trailing slashes to URLs
  images: {
    unoptimized: process.env.NODE_ENV === 'development' ? true : false,  // Enable optimization for production builds
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256]
  }
}

module.exports = nextConfig 