import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
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
