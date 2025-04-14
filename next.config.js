/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  // removed `output: 'export'` to allow dynamic server functionality
};

module.exports = nextConfig;
