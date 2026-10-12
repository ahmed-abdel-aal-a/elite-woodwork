/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  ...(isProd ? { output: 'export' } : {}),
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
  ...(!isProd ? {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/elite/',
          basePath: false,
          permanent: false,
        },
      ];
    },
  } : {}),
};

export default nextConfig;
