import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true
  },
  /**
   * Set base path to match your GitHub repository name
   * This ensures all assets and links work correctly when deployed to:
   * https://blencorp.github.io/react-native-usmds/
   */
  basePath: '/react-native-usmds',
  /**
   * Ensure static assets are referenced with the correct base path
   */
  assetPrefix: '/react-native-usmds'
};

export default withMDX(config);
