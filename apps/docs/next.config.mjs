import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  experimental: {
    serverActions: true,
    mdxRs: true
  },
  // Add this to ensure proper build output
  output: 'standalone'
};

export default withMDX(config);
