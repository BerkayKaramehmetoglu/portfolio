import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "abuikfgsiaytnhezhjls.supabase.co",
      },
    ],
  },
};

export default nextConfig;
