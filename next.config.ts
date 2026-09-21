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
      // Preserve the value of relevant URLs from the pre-Next.js site. These
      // were surfaced in Search Console as 404s after the migration; each maps
      // to its closest current, intent-equivalent page. Do not send obsolete
      // WordPress feeds, categories, tags, or unrelated URLs to the homepage.
      {
        source: "/home/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog/inbound-vs-outbound-call-centers",
        destination: "/blog/inbound-vs-outbound-call-center",
        permanent: true,
      },
      {
        source: "/solutions/outbound-services/",
        destination: "/solutions/outbound-call-center-services",
        permanent: true,
      },
      {
        source: "/services/outbound-sales-outsourcing",
        destination: "/solutions/outbound-call-center-services",
        permanent: true,
      },
      {
        source: "/services/outbound-call-center-services",
        destination: "/solutions/outbound-call-center-services",
        permanent: true,
      },
      {
        source: "/services/outbound-telemarketing",
        destination: "/services/telemarketing-services",
        permanent: true,
      },
      {
        source: "/services/after-hours",
        destination: "/solutions/inbound-call-center-services",
        permanent: true,
      },
      {
        source: "/solutions/inbound-services/",
        destination: "/solutions/inbound-call-center-services",
        permanent: true,
      },
      {
        source: "/solutions/lead-generation/",
        destination: "/solutions/lead-generation-appointment-setting",
        permanent: true,
      },
      {
        source: "/services/lead-generation-services",
        destination: "/solutions/lead-generation-appointment-setting",
        permanent: true,
      },
      {
        source: "/solutions/technical-support/",
        destination: "/solutions/technical-support-outsourcing",
        permanent: true,
      },
      {
        source: "/services/healthcare-call-center-services",
        destination: "/industries/healthcare-call-center-services",
        permanent: true,
      },
      {
        source: "/services/debt-collection-bpo",
        destination: "/services/debt-collection-outsourcing",
        permanent: true,
      },
      {
        source: "/solutions/financial-solutions/",
        destination: "/solutions/financial-call-center-services",
        permanent: true,
      },
      {
        source: "/solutions/interactive-voice-response/",
        destination: "/services/interactive-voice-response",
        permanent: true,
      },
      {
        source: "/services/omnichannel-solutions/",
        destination: "/services/omnichannel-contact-center-solutions",
        permanent: true,
      },
      {
        source: "/services/work-from-home-solutions",
        destination: "/solutions/work-from-home-solutions",
        permanent: true,
      },
      {
        source: "/services/social-customer-care",
        destination: "/solutions/social-customer-care",
        permanent: true,
      },
      {
        source: "/services/contact-center-software/",
        destination: "/services/contact-center-software-solutions",
        permanent: true,
      },
      {
        source: "/services/cx-analytics/",
        destination: "/services/customer-experience-analytics",
        permanent: true,
      },
      {
        source: "/services/digital-and-cx-services/",
        destination: "/services/digital-customer-experience-services",
        permanent: true,
      },
      {
        source: "/solutions/sales-development-outsourcing",
        destination: "/solutions/sales-outsourcing",
        permanent: true,
      },
      {
        source: "/solutions/government-services/",
        destination: "/solutions/government-call-center-services",
        permanent: true,
      },
      {
        source: "/industries/government",
        destination: "/industries/government-call-center",
        permanent: true,
      },
      {
        source: "/services/email-support-services",
        destination: "/services/digital-customer-experience-services",
        permanent: true,
      },
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
