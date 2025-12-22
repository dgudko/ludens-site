/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,

  // Для GitHub Pages (project site) нужен basePath вида "/repo-name".
  // Для user site basePath должен быть пустой.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || "",

  images: {
    unoptimized: true, // важно для next/image на статическом хостинге
  },
};

module.exports = nextConfig;
