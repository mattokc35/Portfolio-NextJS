/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/index.html",
        destination: "/",
        permanent: false, // Set to true if you want a permanent redirect (301)
      },
    ];
  },
};

module.exports = nextConfig;
