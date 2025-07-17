/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export configuration (ENABLED)
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },

  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  
  // Image optimization (disabled for static export)
  // images: {
  //   formats: ['image/webp', 'image/avif'],
  //   deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  //   imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  //   minimumCacheTTL: 60,
  // },
  
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ]
  },
  
  // Experimental features for performance
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react'],
    webVitalsAttribution: ['CLS', 'LCP', 'INP', 'FCP', 'TTFB'],
  },
}

module.exports = nextConfig
