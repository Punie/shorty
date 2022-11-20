/** @type {import("next").NextConfig} */
const config = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  rewrites: async () => {
    return [
      {
        source: '/:shortUrl',
        destination: '/api/:shortUrl',
      },
    ];
  },
};

export default config;
