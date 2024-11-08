/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'assets.aceternity.com',
            port: '',
            //pathname: '/account123/**',
          },
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            port: '',
          },
        ],
      },
};

export default nextConfig;
