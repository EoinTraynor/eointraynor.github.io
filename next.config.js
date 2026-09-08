const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
