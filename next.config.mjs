/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  trailingSlash: true,
  basePath: '/elite',
  assetPrefix: '/elite',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: '/elite',
  },
};

export default nextConfig;
