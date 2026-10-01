import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
};

module.exports = {
  allowedDevOrigins: ['sample-computer-bagel.ngrok-free.dev'],
}

export default nextConfig;
