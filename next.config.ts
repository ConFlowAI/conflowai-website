import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export -> emits an `out/` folder of HTML/CSS/JS for Cloudflare Pages.
  output: "export",
  // The on-demand image optimizer needs a server; our images are pre-optimized,
  // so serve them as-is.
  images: { unoptimized: true },
};

export default nextConfig;
