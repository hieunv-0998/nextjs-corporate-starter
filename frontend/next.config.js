/** @type {import('next').NextConfig} */

require('dotenv').config();

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: process.env.NEXT_PUBLIC_STRAPI_MEDIA_URL || '*.media.strapiapp.com',
      },
    ],
  },
}

module.exports = nextConfig
