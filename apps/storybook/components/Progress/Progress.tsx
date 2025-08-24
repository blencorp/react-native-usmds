import { forwardRef } from 'react';
import { View, ViewProps } from 'react-native';
import { cn } from '../../lib/utils';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
} from 'react-native-reanimated';

interface ProgressProps extends ViewProps {
  className?: string;
  indicatorClassName?: string;
  value?: number;
  variant?: 'default' | 'success' | 'error' | 'warning' | 'info';
  size?: 'sm' | 'md' | 'lg';
}

const Progress = forwardRef<View, ProgressProps>(
  ({ className, value = 0, variant = 'default', size = 'md', indicatorClassName, ...props }, ref) => {
    const sizeStyles = {
      sm: 'h-1',
      md: 'h-2',
      lg: 'h-3'
    };

    const variantStyles = {
      default: 'bg-primary',
      success: 'bg-success',
      error: 'bg-error',
      warning: 'bg-warning',
      info: 'bg-info'
    };

    const clampedValue = Math.min(100, Math.max(0, value));
    const progress = useDerivedValue(() => clampedValue);

    const indicator = useAnimatedStyle(() => {
      return {
        width: withSpring(
          `${interpolate(progress.value, [0, 100], [1, 100], Extrapolation.CLAMP)}%`,
          { overshootClamping: true }
        ),
      };
    });

    return (
      <View
        ref={ref}
        className={cn(
          'relative overflow-hidden rounded-full bg-base-lighter w-full min-w-[150px]',
          sizeStyles[size],
          className
        )}
        {...props}
      >
        <Animated.View 
          style={indicator}
          className={cn('h-full rounded-full', variantStyles[variant], indicatorClassName)} 
        />
      </View>
    );
  }
);

Progress.displayName = 'Progress';

export { Progress }; 