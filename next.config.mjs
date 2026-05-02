/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // eslint block removed (no longer supported in Next.js 16)
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      {
        source: "/assets/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      // Removed: /_next/static/(.*) Cache-Control block
      // because Next.js overwrites it automatically
    ];
  },
};

export default nextConfig;
