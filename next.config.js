/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "login.galaxyisp.com",
      },
    ],
  },
};

module.exports = nextConfig
