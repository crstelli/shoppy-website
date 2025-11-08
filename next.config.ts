import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["lh3.googleusercontent.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bmieklbextypaidmhqao.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/images/**",
      },
    ],
  },
};

export default nextConfig;
