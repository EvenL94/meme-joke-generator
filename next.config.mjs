/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  basePath: isProd ? "/meme-joke-generator" : "",
  assetPrefix: isProd ? "/meme-joke-generator/" : "",
  images: {
    unoptimized: true,
  },
  output: "export",
};
export default nextConfig;
