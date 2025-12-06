/** @type {import('next').NextConfig} */
// Konfigurasi untuk static export (Unaux)
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Static export
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true, // Optional: untuk kompatibilitas dengan beberapa server
}

module.exports = nextConfig

