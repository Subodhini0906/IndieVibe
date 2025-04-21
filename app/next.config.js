/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      turbo: false,   // Disable Turbopack
      appDir: true,
    }
  };
  
  module.exports = nextConfig;
  