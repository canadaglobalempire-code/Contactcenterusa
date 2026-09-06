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
  // Expire stale HTML without shortening the cache of content-hashed assets.
  expireTime: 600,
  images: {
    // webp only, and a 30-day variant TTL. Next's default minimumCacheTTL is 4h,
    // so every optimized variant was being RE-ENCODED several times a day — CPU,
    // disk churn and inode turnover for artwork that never changes for a given
    // URL. avif is deliberately absent: it encodes ~5-10x slower on this shared
    // CPU and doubles the cached variant count.
    formats: ["image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    // Next 16 only honours quality values declared here; anything else silently
    // falls back to 75. 35 is the footer's 6%-opacity backdrop, 62 the article
    // hero — both photographic, both indistinguishable from 75 at display size.
    qualities: [35, 62, 75],
  },

  // Rendered pages and fetch entries go to the on-disk cache ONLY. The
  // default also keeps a 50MB in-process copy — 50MB of resident memory
  // per app on a memory-bound plan, thrown away on every OOM recycle.
  cacheMaxMemorySize: 0,

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
