import { createMDX } from 'fumadocs-mdx/next';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuild: true,
  },
  transpilePackages: [
    'react-native',
    'react-native-web',
    'nativewind',
    'react-native-css-interop',
    'react-native-reanimated',
    'react-native-svg',
    'lucide-react-native',
    '@react-native/assets-registry',
  ],
  experimental: {
    forceSwcTransforms: true,
  },
};

export default withMDX(withExpo(config));

// Adapted from expo-webpack-integrations
function withExpo(nextConfig) {
  return {
    ...nextConfig,
    webpack(config, options) {
      // Mix in aliases
      if (!config.resolve) {
        config.resolve = {};
      }

      const registryPath = path.resolve(__dirname, '../../packages/registry/src/usa');
      const srcPath = path.resolve(__dirname, './src');

      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        // Alias for registry imports
        '@/components': path.join(registryPath, 'components'),
        '@/lib': path.join(registryPath, 'lib'),
        // Alias direct react-native imports to react-native-web
        'react-native$': 'react-native-web',
        // Alias internal react-native modules to react-native-web
        'react-native/Libraries/EventEmitter/RCTDeviceEventEmitter$':
          'react-native-web/dist/vendor/react-native/NativeEventEmitter/RCTDeviceEventEmitter',
        'react-native/Libraries/vendor/emitter/EventEmitter$':
          'react-native-web/dist/vendor/react-native/emitter/EventEmitter',
        'react-native/Libraries/EventEmitter/NativeEventEmitter$':
          'react-native-web/dist/vendor/react-native/NativeEventEmitter',
        // For react-native-web 0.20 compatibility
        'react-native/Libraries/Renderer/shims/ReactNative$': 'react-native-web/dist/index',
        // Ignore React Native assets registry (not needed for web)
        '@react-native/assets-registry/registry': false,
        // Shim for deprecated React DOM methods
        'react-dom$': path.join(srcPath, 'lib/react-dom-shim.js'),
      };

      // Skip the problematic shim for now
      // We'll use HTML versions of components instead of full react-native-web

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

      // Expose __DEV__ from Metro.
      config.plugins.push(
        new options.webpack.DefinePlugin({
          __DEV__: JSON.stringify(process.env.NODE_ENV !== 'production'),
        })
      );

      // Execute the user-defined webpack config.
      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options);
      }

      return config;
    },
  };
}
