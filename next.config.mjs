const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? "/project_page" : ""
  },
  basePath: isProd ? "/project_page" : "",
  assetPrefix: isProd ? "/project_page/" : ""
};

export default nextConfig;
