const rehypeImgSize = require("rehype-img-size");
const createMDX = require("@next/mdx");
const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  rehypePlugins: [rehypeImgSize],
});

// function mdxComponents({ source }) {
//   return <MDXRemote source={source} components={components} />;
// }

// Merge MDX config with Next.js config
module.exports = withContentlayer(withMDX(nextConfig));

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     mdxRs: true,
//   },
// };

// const withMDX = require("@next/mdx")();
// module.exports = withMDX(nextConfig);
