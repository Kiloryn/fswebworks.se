/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  webpack: (config, { isServer }) => {
    // Prevent client bundle from loading Node built-ins
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        crypto: false,
        stream: false,
        buffer: false,
      };
      // Handle "node:" protocol so Webpack doesn't try to bundle Node built-ins
      config.resolve.alias = {
        ...config.resolve.alias,
        'node:crypto': false,
        crypto: false,
      };
    }
    return config;
  },
}

module.exports = nextConfig
