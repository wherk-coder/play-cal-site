import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static-friendly. No image domains, no env.
  async rewrites() {
    // Invite links: every /i/<CODE> shows the same static page (src/app/i).
    return [{ source: "/i/:code", destination: "/i" }];
  },
  async headers() {
    return [
      {
        // Apple requires JSON for universal links; the file has no extension.
        source: "/.well-known/apple-app-site-association",
        headers: [{ key: "Content-Type", value: "application/json" }],
      },
    ];
  },
};

export default nextConfig;
