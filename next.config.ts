import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: [
    "http://127.0.0.1:3000",
  ],
  env: {
    DB_HOST: process.env.DB_HOST,
  }
};

export default nextConfig;
