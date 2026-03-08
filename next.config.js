/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  typescript: {
    ignoreBuildErrors: true,
  },
  // Build timestamp: March 7, 2026 20:15 - Force rebuild
}

export default nextConfig
