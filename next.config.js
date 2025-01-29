/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'], // Eğer harici görsel domainleri kullanıyorsanız buraya ekleyin
  },
  eslint: {
    ignoreDuringBuilds: true, // Build sırasındaki ESLint hatalarını görmezden gel
  },
  typescript: {
    ignoreBuildErrors: true, // Build sırasındaki TypeScript hatalarını görmezden gel
  }
}

module.exports = nextConfig 