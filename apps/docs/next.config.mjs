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
  // Transpile packages that contain JSX or React Native code
  transpilePackages: [
    '@blen/react-native-usmds-registry',
    'react-native',
    'react-native-web',
    'react-native-svg',
    'react-native-css-interop',
    'react-native-reanimated',
    'react-native-gesture-handler',
    'expo-haptics',
    'nativewind',
    // @rn-primitives packages used in the registry
    '@rn-primitives/accordion',
    '@rn-primitives/alert-dialog',
    '@rn-primitives/aspect-ratio',
    '@rn-primitives/avatar',
    '@rn-primitives/checkbox',
    '@rn-primitives/collapsible',
    '@rn-primitives/context-menu',
    '@rn-primitives/dialog',
    '@rn-primitives/dropdown-menu',
    '@rn-primitives/hover-card',
    '@rn-primitives/label',
    '@rn-primitives/menubar',
    '@rn-primitives/popover',
    '@rn-primitives/portal',
    '@rn-primitives/progress',
    '@rn-primitives/radio-group',
    '@rn-primitives/select',
    '@rn-primitives/separator',
    '@rn-primitives/slot',
    '@rn-primitives/switch',
    '@rn-primitives/tabs',
    '@rn-primitives/toggle',
    '@rn-primitives/toggle-group',
    '@rn-primitives/tooltip',
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
    optimizeCss: false, // Explicitly disable to prevent critters requirement
  },
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
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

      // Simple optimization without breaking changes
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendor',
              priority: 10,
            },
            common: {
              minChunks: 2,
              priority: -10,
              reuseExistingChunk: true,
            },
          },
        },
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

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options);
      }

      return config;
    },
  };
}
