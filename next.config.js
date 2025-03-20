/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Change to 'export' for static site generation
  trailingSlash: true,  // Add trailing slashes to URLs
  images: {
    unoptimized: true  // Required for static export
  }
}

module.exports = nextConfig 