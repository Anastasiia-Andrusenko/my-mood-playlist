const nextConfig = {
  reactStrictMode: true,
  distDir: "out",
  trailingSlash: true,
  output: "export",
  basePath: '',
  publicRuntimeConfig: {
    basePath: '/my-mood-playlist',
  },
  async exportPathMap(defaultPathMap, 
    { dev, dir, outDir, distDir, buildId }) {
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
