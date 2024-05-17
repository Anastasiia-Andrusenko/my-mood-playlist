const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  distDir: "out",
  trailingSlash: true,
  output: "export",
  basePath: isProd ? '/my-mood-playlist' : '',
  assetPrefix: isProd ? '/my-mood-playlist/' : '',
  publicRuntimeConfig: {
    basePath: isProd ? '/my-mood-playlist' : '',
  images: {
    unoptimized: true,
  }  
  },
  async exportPathMap(defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      "/": { page: "/" },
      "/login": { page: "/login" },
      "/register": { page: "/register" },
      "/404": { page: "/404" },
    };
  },
  webpack: (config) => {
    return config;
  },
  devIndicators: {
    buildActivity: true,
  },
  poweredByHeader: false,
};

export default nextConfig;
