/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['localhost', 'via.placeholder.com'],
    unoptimized: true
  },
  trailingSlash: false,
  output: 'standalone'
}

module.exports = nextConfig


