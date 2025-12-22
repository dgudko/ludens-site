/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,

  // Для кастомного домена сайт в корне: basePath НЕ нужен
  basePath: "",
  assetPrefix: "",

  images: { unoptimized: true },
};

module.exports = nextConfig;
