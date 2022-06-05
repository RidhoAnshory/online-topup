/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['assets.acme.com', 'api.menorigaming.com', 'api.lorem.space'],
  },
};

module.exports = nextConfig;
