/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const removeImports = require('next-remove-imports')();

const nextConfig = removeImports({
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    });
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'web2-thumbsup.s3.ap-northeast-2.amazonaws.com',
      },
    ],
  },
  experimental: { esmExternals: true },
  pageExtensions: ['page.tsx'],
});

module.exports = nextConfig;
