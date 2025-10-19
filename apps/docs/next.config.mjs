import { createMDX } from 'fumadocs-mdx/next';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  poweredByHeader: false,
  compress: true,
  productionBrowserSourceMaps: false,
  // Only transpile packages that actually need it for React Native Web compatibility
  transpilePackages: [
    '@blen/react-native-usmds-registry',
    'react-native',
    'react-native-web',
    'react-native-svg',
    'react-native-reanimated',
    'react-native-gesture-handler',
    'react-native-screens',
    'nativewind',
    'react-native-css-interop',
    // Only include @rn-primitives that actually need transpilation
    '@rn-primitives/portal',
    '@rn-primitives/slot',
    '@rn-primitives/types',
  ],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  experimental: {
    forceSwcTransforms: true,
    webVitalsAttribution: ['CLS', 'LCP', 'FCP', 'TTFB', 'INP'],
  },
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error'] } : false,
  },
};

export default withMDX(withExpo(config));

function withExpo(nextConfig) {
  return {
    ...nextConfig,
    webpack(config, options) {
      if (!config.resolve) {
        config.resolve = {};
      }

      // Optimized bundle splitting to reduce network chains
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: false,
            vendors: false,
            // Single vendor chunk for all dependencies
            vendor: {
              name: 'vendor',
              test: /[\\/]node_modules[\\/]/,
              priority: 10,
              reuseExistingChunk: true,
            },
          },
          maxAsyncRequests: 3,
          maxInitialRequests: 3,
        },
        runtimeChunk: false,
        // Minimize unnecessary polyfills
        minimizer: config.optimization.minimizer,
      };

      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        '@/registry': path.resolve(__dirname, '../../packages/registry/src'),
        'react-native$': 'react-native-web',
        'react-native/Libraries/EventEmitter/RCTDeviceEventEmitter$':
          'react-native-web/dist/vendor/react-native/NativeEventEmitter/RCTDeviceEventEmitter',
        'react-native/Libraries/vendor/emitter/EventEmitter$':
          'react-native-web/dist/vendor/react-native/emitter/EventEmitter',
        'react-native/Libraries/EventEmitter/NativeEventEmitter$':
          'react-native-web/dist/vendor/react-native/NativeEventEmitter',
      };

      config.resolve.extensions = [
        '.web.js',
        '.web.jsx',
        '.web.ts',
        '.web.tsx',
        ...(config.resolve?.extensions ?? []),
      ];

      if (!config.plugins) {
        config.plugins = [];
      }

      config.plugins.push(
        new options.webpack.DefinePlugin({
          __DEV__: JSON.stringify(process.env.NODE_ENV !== 'production'),
        })
      );

      // Only process Flow types in specific React Native packages
      // No transpilation for modern JavaScript features
      config.module.rules.push({
        test: /\.js$/,
        include: /@react-native\/assets-registry/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-flow', { allowDeclareFields: true }],
            ],
            // Don't include any polyfills or transforms
            compact: false,
            cacheDirectory: true,
          },
        },
      });

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options);
      }

      return config;
    },
  };
}
