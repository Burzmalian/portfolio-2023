import theme from "shiki/themes/nord.json" assert { type: "json" };
import { remarkCodeHike } from "@code-hike/mdx";
import nextMDX from "@next/mdx";

// /** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "mdx"],
  experimental: {
    appDir: true,
    mdxRs: false,
  },
  reactStrictMode: true,
};

export default nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [[remarkCodeHike, { theme, showCopyButton: true }]],
  },
})(nextConfig);
