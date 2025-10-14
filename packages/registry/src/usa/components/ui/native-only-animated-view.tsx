import * as React from 'react';
import { Platform, View } from 'react-native';

type ReanimatedModule = typeof import('react-native-reanimated');

let Reanimated: ReanimatedModule | null = null;

if (Platform.OS !== 'web') {
  Reanimated = require('react-native-reanimated');
}

/**
 * Wraps an `Animated.View` but only enables the animation layer on native
 * platforms. On web this simply renders the children without mounting the
 * Reanimated worklet.
 *
 * @example
 * ```tsx
 * <NativeOnlyAnimatedView entering={FadeIn} exiting={FadeOut}>
 *   <Text>I am only animated on native</Text>
 * </NativeOnlyAnimatedView>
 * ```
 */
function NativeOnlyAnimatedView(
  props: (React.ComponentProps<typeof View> & Record<string, unknown>) & React.RefAttributes<View>
) {
  if (Platform.OS === 'web' || !Reanimated) {
    return <>{props.children as React.ReactNode}</>;
  }

  const AnimatedView = Reanimated.default.View;

  return <AnimatedView {...props} />;
}

export { NativeOnlyAnimatedView };
