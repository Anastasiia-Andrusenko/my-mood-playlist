/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: "out",
  trailingSlash: true,
  output: "export", // Додаємо нову опцію
  basePath: "/my-mood-playlist", // Базовий шлях
  async exportPathMap(defaultPathMap) {
    return {
      "/": { page: "/" },
      "/login": { page: "/login" },
      "/register": { page: "/register" },
      "/404": { page: "/404" },
    };
  },
};

export default nextConfig;
