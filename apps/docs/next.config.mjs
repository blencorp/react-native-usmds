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
  // Minimal transpilation - only what's absolutely necessary
  transpilePackages: [
    'react-native-web',
    'react-native-svg',
    'nativewind',
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
  // Optimize CSS output
  cssModules: {
    localIdentName: process.env.NODE_ENV === 'production'
      ? '[hash:base64:5]'
      : '[path][name]__[local]',
  },
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error'] } : false,
  },
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

      // Modern browser target - no legacy support
      config.target = ['web', 'es2020'];

      // Aggressive tree shaking and dead code elimination
      config.optimization = {
        ...config.optimization,
        usedExports: true,
        sideEffects: false,
        providedExports: true,
        concatenateModules: true,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: false,
            vendors: false,
            // Framework core
            framework: {
              name: 'framework',
              test: /[\\/]node_modules[\\/](react|react-dom|scheduler|next)[\\/]/,
              chunks: 'all',
              priority: 40,
              enforce: true,
            },
            // All other vendor code
            lib: {
              test(module) {
                return module.size() > 160000 &&
                  /node_modules[/\\]/.test(module.nameForCondition || '');
              },
              name: false,
              priority: 30,
              minChunks: 1,
              reuseExistingChunk: true,
              maxSize: 244000,
            },
            commons: {
              minChunks: 2,
              priority: 20,
              reuseExistingChunk: true,
            },
          },
          maxAsyncRequests: 6,
          maxInitialRequests: 6,
          minSize: 20000,
        },
        runtimeChunk: false,
      };

      // Prevent polyfills from being injected
      config.resolve.fallback = {
        ...config.resolve.fallback,
        "core-js": false,
        "core-js-pure": false,
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
        // Exclude core-js polyfills
        'core-js': false,
        'core-js-pure': false,
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
          'process.env.__NEXT_POLYFILL_NOMODULE': JSON.stringify('false'),
        })
      );

      // Exclude polyfills from being bundled
      config.plugins.push(
        new options.webpack.IgnorePlugin({
          resourceRegExp: /^core-js/,
        })
      );

      // Skip babel-loader entirely for modern builds
      // Most React Native packages are already transpiled

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options);
      }

      return config;
    },
  };
}
