import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    DB_HOST: process.env.DB_HOST,
  }
};

export default nextConfig;
