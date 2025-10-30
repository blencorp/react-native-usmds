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
  transpilePackages: [
    '@blen/react-native-usmds-registry',
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
    'react-native',
    'react-native-web',
    'react-native-svg',
    'expo',
    'nativewind',
    'react-native-css-interop',
    'react-native-reanimated',
    'react-native-gesture-handler',
    'react-native-screens',
    'expo-router',
    'expo-modules-core',
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
  },
  experimental: {
    forceSwcTransforms: true,
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

      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        '@/registry': path.resolve(__dirname, '../../packages/registry/src'),
        'react-native$': 'react-native-web',
        'react-native-reanimated$': path.resolve(__dirname, './src/lib/reanimated-mock.js'),
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

      // Exclude React Native internal packages that use Flow types
      config.module.rules.push({
        test: /\.js$/,
        include: /@react-native\/assets-registry/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-flow', { allowDeclareFields: true }],
              '@babel/preset-react',
            ],
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
