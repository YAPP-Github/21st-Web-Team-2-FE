/** @type {import('next').NextConfig} */
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
    domains: ['*'], // TODO: S3 주소만 허용할 건지 논의 필요
  },
  experimental: { esmExternals: true },
});

module.exports = nextConfig;
