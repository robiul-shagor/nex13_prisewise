/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ['mongoose']
  },
  images: {
    domains: ['m.media-amazon.com'],
    unoptimized: true
  },
  distDir: 'out',
  output: 'export'
}

module.exports = nextConfig
