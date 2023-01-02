/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // 🐛 pages 파일에 test 파일있으면 issue 있어서, page 파일명을 변경하여 수정
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    });
    return config;
  },
};

module.exports = nextConfig;
