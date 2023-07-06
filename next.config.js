const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = { reactStrictMode: true, swcMinify: true };

module.exports = withContentlayer(nextConfig);

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     mdxRs: true,
//   },
// };

// const withMDX = require("@next/mdx")();
// module.exports = withMDX(nextConfig);
