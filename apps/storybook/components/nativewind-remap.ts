import { Image } from 'expo-image';
import { cssInterop } from 'nativewind';

/**
 *  Use this file to setup cssInterop and remapProps for third party components to work with NativeWind
 *  This is only imported once  globally in app/_layout.tsx
 *
 * cssInterop: https://www.nativewind.dev/api/css-interop
 *
 * This function "tags" components so that when its rendered, the runtime will know to resolve the className strings into styles. You should only use this when:
 * - You have a custom native component
 * - You are using a third party component that needs the style prop to be resolved
 * - You are using a thrid party component that does not pass all its props to its children
 *
 * remapProps: https://www.nativewind.dev/api/remap-props
 *
 * NativeWind provides the remapProps utility to simplify working with third-party components with multiple "style" props.
 */

cssInterop(Image, { className: 'style' });
