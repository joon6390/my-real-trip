/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/tour-tickets',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
