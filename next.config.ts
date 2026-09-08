import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        // Prevent clickjacking
        { key: "X-Frame-Options", value: "DENY" },
        // Prevent MIME type sniffing
        { key: "X-Content-Type-Options", value: "nosniff" },
        // Force HTTPS
        { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
        // Block referrer leakage to external sites
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        // Restrict browser features
        { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        // Basic XSS protection for older browsers
        { key: "X-XSS-Protection", value: "1; mode=block" },
      ],
    },
  ],
  images: {
    // Only allow images served from this domain — no external image abuse
    remotePatterns: [],
  },
};

export default nextConfig;
