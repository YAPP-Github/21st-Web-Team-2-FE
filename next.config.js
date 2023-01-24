/** @type {import('next').NextConfig} */
const nextConfig = {
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
};

module.exports = nextConfig;
