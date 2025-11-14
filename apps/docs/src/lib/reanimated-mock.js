'use strict';

import { Animated as AnimatedRN, Image as ImageRN, Text as TextRN, View as ViewRN } from 'react-native';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const NOOP = () => {};
const NOOP_FACTORY = () => NOOP;
const ID = (t) => t;
const IMMEDIATE_CALLBACK_INVOCATION = (callback) => callback();

const hook = {
  useAnimatedProps: IMMEDIATE_CALLBACK_INVOCATION,
  useEvent: (_handler, _eventNames, _rebuild) => NOOP,
  useSharedValue: (init) => {
    const value = { value: init };
    return new Proxy(value, {
      get(target, prop) {
        if (prop === 'value') return target.value;
        if (prop === 'get') return () => target.value;
        if (prop === 'set') {
          return (newValue) => {
            if (typeof newValue === 'function') {
              target.value = newValue(target.value);
            } else {
              target.value = newValue;
            }
          };
        }
      },
      set(target, prop, newValue) {
        if (prop === 'value') {
          target.value = newValue;
          return true;
        }
        return false;
      },
    });
  },
  useAnimatedStyle: IMMEDIATE_CALLBACK_INVOCATION,
  useAnimatedReaction: NOOP,
  useAnimatedRef: () => ({ current: null }),
  useAnimatedScrollHandler: NOOP_FACTORY,
  useDerivedValue: (processor) => {
    const result = processor();
    return {
      value: result,
      get: () => result,
    };
  },
  useAnimatedSensor: () => ({
    sensor: {
      value: { x: 0, y: 0, z: 0, interfaceOrientation: 0, qw: 0, qx: 0, qy: 0, qz: 0, yaw: 0, pitch: 0, roll: 0 },
    },
    unregister: NOOP,
    isAvailable: false,
    config: { interval: 0, adjustToInterfaceOrientation: false, iosReferenceFrame: 0 },
  }),
  useAnimatedKeyboard: () => ({ height: 0, state: 0 }),
  useScrollViewOffset: () => ({ value: 0 }),
  useScrollOffset: () => ({ value: 0 }),
};

const animation = {
  cancelAnimation: NOOP,
  withDecay: (_userConfig, callback) => {
    callback?.(true);
    return 0;
  },
  withDelay: (_delayMs, nextAnimation) => nextAnimation,
  withRepeat: ID,
  withSequence: () => 0,
  withSpring: (toValue, _userConfig, callback) => {
    callback?.(true);
    return toValue;
  },
  withTiming: (toValue, _userConfig, callback) => {
    callback?.(true);
    return toValue;
  },
};

const interpolation = {
  Extrapolation: { CLAMP: 0, EXTEND: 1, IDENTITY: 2 },
  interpolate: NOOP,
  clamp: NOOP,
};

const interpolateColor = {
  Extrapolate: interpolation.Extrapolation,
  Extrapolation: interpolation.Extrapolation,
  ColorSpace: { RGB: 0, HSV: 1 },
  interpolateColor: NOOP,
};

const Easing = {
  Easing: {
    linear: ID,
    ease: ID,
    quad: ID,
    cubic: ID,
    poly: ID,
    sin: ID,
    circle: ID,
    exp: ID,
    elastic: ID,
    back: ID,
    bounce: ID,
    bezier: () => ({ factory: ID }),
    bezierFn: ID,
    steps: ID,
    in: ID,
    out: ID,
    inOut: ID,
  },
};

const platformFunctions = {
  measure: () => ({ x: 0, y: 0, width: 0, height: 0, pageX: 0, pageY: 0 }),
  scrollTo: NOOP,
};

const Colors = {
  processColor: (color) => color,
};

class BaseAnimationMock {
  duration() { return this; }
  delay() { return this; }
  springify() { return this; }
  damping() { return this; }
  stiffness() { return this; }
  withCallback() { return this; }
  randomDelay() { return this; }
  withInitialValues() { return this; }
  easing(_) { return this; }
  rotate(_) { return this; }
  mass(_) { return this; }
  restDisplacementThreshold(_) { return this; }
  restSpeedThreshold(_) { return this; }
  overshootClamping(_) { return this; }
  dampingRatio(_) { return this; }
  getDelay() { return 0; }
  getDelayFunction() { return NOOP; }
  getDuration() { return 300; }
  getReduceMotion() { return 0; }
  getAnimationAndConfig() { return [NOOP, {}]; }
  build() {
    return () => ({ initialValues: {}, animations: {} });
  }
  reduceMotion() { return this; }
}

const core = {
  runOnJS: ID,
  runOnUI: ID,
  createWorkletRuntime: NOOP,
  runOnRuntime: NOOP,
  makeMutable: ID,
  createSerializable: ID,
  isReanimated3: () => false,
  enableLayoutAnimations: NOOP,
};

const layoutReanimation = {
  BaseAnimationBuilder: new BaseAnimationMock(),
  ComplexAnimationBuilder: new BaseAnimationMock(),
  Keyframe: BaseAnimationMock,
  FlipInXUp: new BaseAnimationMock(),
  FlipInYLeft: new BaseAnimationMock(),
  FlipInXDown: new BaseAnimationMock(),
  FlipInYRight: new BaseAnimationMock(),
  FlipInEasyX: new BaseAnimationMock(),
  FlipInEasyY: new BaseAnimationMock(),
  FlipOutXUp: new BaseAnimationMock(),
  FlipOutYLeft: new BaseAnimationMock(),
  FlipOutXDown: new BaseAnimationMock(),
  FlipOutYRight: new BaseAnimationMock(),
  FlipOutEasyX: new BaseAnimationMock(),
  FlipOutEasyY: new BaseAnimationMock(),
  StretchInX: new BaseAnimationMock(),
  StretchInY: new BaseAnimationMock(),
  StretchOutX: new BaseAnimationMock(),
  StretchOutY: new BaseAnimationMock(),
  FadeIn: new BaseAnimationMock(),
  FadeInRight: new BaseAnimationMock(),
  FadeInLeft: new BaseAnimationMock(),
  FadeInUp: new BaseAnimationMock(),
  FadeInDown: new BaseAnimationMock(),
  FadeOut: new BaseAnimationMock(),
  FadeOutRight: new BaseAnimationMock(),
  FadeOutLeft: new BaseAnimationMock(),
  FadeOutUp: new BaseAnimationMock(),
  FadeOutDown: new BaseAnimationMock(),
  SlideInRight: new BaseAnimationMock(),
  SlideInLeft: new BaseAnimationMock(),
  SlideOutRight: new BaseAnimationMock(),
  SlideOutLeft: new BaseAnimationMock(),
  SlideInUp: new BaseAnimationMock(),
  SlideInDown: new BaseAnimationMock(),
  SlideOutUp: new BaseAnimationMock(),
  SlideOutDown: new BaseAnimationMock(),
  ZoomIn: new BaseAnimationMock(),
  ZoomInRotate: new BaseAnimationMock(),
  ZoomInLeft: new BaseAnimationMock(),
  ZoomInRight: new BaseAnimationMock(),
  ZoomInUp: new BaseAnimationMock(),
  ZoomInDown: new BaseAnimationMock(),
  ZoomInEasyUp: new BaseAnimationMock(),
  ZoomInEasyDown: new BaseAnimationMock(),
  ZoomOut: new BaseAnimationMock(),
  ZoomOutRotate: new BaseAnimationMock(),
  ZoomOutLeft: new BaseAnimationMock(),
  ZoomOutRight: new BaseAnimationMock(),
  ZoomOutUp: new BaseAnimationMock(),
  ZoomOutDown: new BaseAnimationMock(),
  ZoomOutEasyUp: new BaseAnimationMock(),
  ZoomOutEasyDown: new BaseAnimationMock(),
  BounceIn: new BaseAnimationMock(),
  BounceInDown: new BaseAnimationMock(),
  BounceInUp: new BaseAnimationMock(),
  BounceInLeft: new BaseAnimationMock(),
  BounceInRight: new BaseAnimationMock(),
  BounceOut: new BaseAnimationMock(),
  BounceOutDown: new BaseAnimationMock(),
  BounceOutUp: new BaseAnimationMock(),
  BounceOutLeft: new BaseAnimationMock(),
  BounceOutRight: new BaseAnimationMock(),
  LightSpeedInRight: new BaseAnimationMock(),
  LightSpeedInLeft: new BaseAnimationMock(),
  LightSpeedOutRight: new BaseAnimationMock(),
  LightSpeedOutLeft: new BaseAnimationMock(),
  PinwheelIn: new BaseAnimationMock(),
  PinwheelOut: new BaseAnimationMock(),
  RotateInDownLeft: new BaseAnimationMock(),
  RotateInDownRight: new BaseAnimationMock(),
  RotateInUpLeft: new BaseAnimationMock(),
  RotateInUpRight: new BaseAnimationMock(),
  RotateOutDownLeft: new BaseAnimationMock(),
  RotateOutDownRight: new BaseAnimationMock(),
  RotateOutUpLeft: new BaseAnimationMock(),
  RotateOutUpRight: new BaseAnimationMock(),
  RollInLeft: new BaseAnimationMock(),
  RollInRight: new BaseAnimationMock(),
  RollOutLeft: new BaseAnimationMock(),
  RollOutRight: new BaseAnimationMock(),
  Layout: new BaseAnimationMock(),
  LinearTransition: new BaseAnimationMock(),
  FadingTransition: new BaseAnimationMock(),
  SequencedTransition: new BaseAnimationMock(),
  JumpingTransition: new BaseAnimationMock(),
  CurvedTransition: new BaseAnimationMock(),
  EntryExitTransition: new BaseAnimationMock(),
};

const LayoutAnimationConfig = ({ children }) => children;

const commonTypes = {
  SensorType: { ACCELEROMETER: 1, GYROSCOPE: 2, GRAVITY: 3, MAGNETIC_FIELD: 4, ROTATION: 5 },
  IOSReferenceFrame: { XArbitraryZVertical: 0, XArbitraryCorrectedZVertical: 1, XMagneticNorthZVertical: 2, XTrueNorthZVertical: 3 },
  InterfaceOrientation: { ROTATION_0: 0, ROTATION_90: 90, ROTATION_180: 180, ROTATION_270: 270 },
  KeyboardState: { UNKNOWN: 0, OPENING: 1, OPEN: 2, CLOSING: 3, CLOSED: 4 },
  ReduceMotion: { System: 0, Always: 1, Never: 2 },
};

const jestUtils = {
  withReanimatedTimer: (callback) => callback(),
  advanceAnimationByTime: NOOP,
  advanceAnimationByFrame: NOOP,
  setUpTests: NOOP,
  getAnimatedStyle: () => ({}),
};

const Animated = {
  View: ViewRN,
  Text: TextRN,
  Image: ImageRN,
  ScrollView: AnimatedRN.ScrollView,
  FlatList: AnimatedRN.FlatList,
  Extrapolate: interpolation.Extrapolation,
  interpolate: NOOP,
  interpolateColor: NOOP,
  clamp: NOOP,
  createAnimatedComponent: ID,
  addWhitelistedUIProps: NOOP,
  addWhitelistedNativeProps: NOOP,
};

// Extract exports from objects
const {
  runOnJS,
  runOnUI,
  createWorkletRuntime,
  runOnRuntime,
  makeMutable,
  createSerializable,
  enableLayoutAnimations,
} = core;

const {
  useAnimatedProps,
  useEvent,
  useSharedValue,
  useAnimatedStyle,
  useAnimatedReaction,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useDerivedValue,
  useAnimatedSensor,
  useAnimatedKeyboard,
  useScrollViewOffset,
  useScrollOffset,
} = hook;

const {
  cancelAnimation,
  withDecay,
  withDelay,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
} = animation;

const {
  FadeIn,
  FadeInRight,
  FadeInLeft,
  FadeInUp,
  FadeInDown,
  FadeOut,
  FadeOutRight,
  FadeOutLeft,
  FadeOutUp,
  FadeOutDown,
  LinearTransition,
  Layout,
} = layoutReanimation;

// Export all individual items
export default Animated;
export const reanimatedVersion = '3.0.0-mock';
export {
  LayoutAnimationConfig,
  // Core
  runOnJS,
  runOnUI,
  createWorkletRuntime,
  runOnRuntime,
  makeMutable,
  createSerializable,
  enableLayoutAnimations,
  // Hooks
  useAnimatedProps,
  useEvent,
  useSharedValue,
  useAnimatedStyle,
  useAnimatedReaction,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useDerivedValue,
  useAnimatedSensor,
  useAnimatedKeyboard,
  useScrollViewOffset,
  useScrollOffset,
  // Animations
  cancelAnimation,
  withDecay,
  withDelay,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
  // Layout animations
  FadeIn,
  FadeInRight,
  FadeInLeft,
  FadeInUp,
  FadeInDown,
  FadeOut,
  FadeOutRight,
  FadeOutLeft,
  FadeOutUp,
  FadeOutDown,
  LinearTransition,
  Layout,
};
