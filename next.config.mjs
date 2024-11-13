// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.ibb.co", "cdn.gobankingrates.com"],
  },
  async redirects() {
    return [
      {
        source: "/:path*", // Match all paths
        has: [
          {
            type: "host",
            value: "legalmatterbd.com", // Match requests to the non-www domain without HTTPS
          },
        ],
        destination: "https://www.legalmatterbd.com/:path*", // Redirect to HTTPS www version
        permanent: true, // 301 redirect
      },
    ];
  },
};

export default nextConfig;
