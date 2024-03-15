/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  redirects: async () => {
    return [
      {
        source: "/github",
        destination: "https://github.com/debbly/chatweather",
        permanent: true,
      },
      {
        source: "/deploy",
        destination: "https://vercel.com/templates/next.js/chatweather",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
