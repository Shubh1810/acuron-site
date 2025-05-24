/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,  // Add trailing slashes to URLs
  images: {
    // Enable optimization for both development and production
    unoptimized: false,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    // Allow external image sources if needed
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    // Optimize for mobile performance
    formats: ['image/webp', 'image/avif'],
  },
  // Add compression for better performance
  compress: true,
  // Enable experimental features for better performance
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig 