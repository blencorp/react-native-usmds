import { Info, Fingerprint, Scan, ScanFace, Check, ExternalLink } from 'lucide-react-native';
import { cssInterop } from 'nativewind';
import * as CheckboxPrimitive from '@rn-primitives/checkbox';
import * as RadioGroupPrimitive from '@rn-primitives/radio-group';
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

cssInterop(Info, { className: 'style' });
cssInterop(Fingerprint, { className: 'style' });
cssInterop(Scan, { className: 'style' });
cssInterop(ScanFace, { className: 'style' });
cssInterop(Check, { className: 'style' });
cssInterop(ExternalLink, { className: 'style' });
cssInterop(CheckboxPrimitive.Root, { className: 'style' });
cssInterop(RadioGroupPrimitive.Root, { className: 'style' });
cssInterop(RadioGroupPrimitive.Item, {
  className: 'style',
  androidRippleColor: 'style'
});
cssInterop(RadioGroupPrimitive.Indicator, { className: 'style' });
