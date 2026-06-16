import type { NextConfig } from "next";

// Security headers applied to every route. HSTS is honored only over HTTPS by
// browsers, so it's safe to send everywhere. These are also settable at Apache;
// keeping them here makes them version-controlled and deploy with the app.
const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "geolocation=(), microphone=(), camera=()",
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/services/fraud-prevention-and-cyber-security",
        destination: "/services/fraud-prevention-cyber-security",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.contactcenterusa.com" }],
        destination: "https://contactcenterusa.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
