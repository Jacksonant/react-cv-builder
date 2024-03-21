/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProd ? '/react-cv-builder' : '',
  // distDir : 'dist', // if want to change the output directory name
};

module.exports = nextConfig;
