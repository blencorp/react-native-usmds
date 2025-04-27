import { ComponentPropsWithoutRef, forwardRef } from 'react';
import * as ProgressPrimitive from '@rn-primitives/progress';
import { cn } from '../../lib/utils';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
} from 'react-native-reanimated';

interface ProgressProps extends ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  className?: string;
  indicatorClassName?: string;
  value?: number;
  variant?: 'default' | 'success' | 'error' | 'warning' | 'info';
  size?: 'sm' | 'md' | 'lg';
}

function Indicator({ 
  value, 
  variant = 'default',
  className 
}: { 
  value: number | undefined | null; 
  variant?: ProgressProps['variant'];
  className?: string;
}) {
  const progress = useDerivedValue(() => value ?? 0);

  const indicator = useAnimatedStyle(() => {
    return {
      width: withSpring(
        `${interpolate(progress.value, [0, 100], [1, 100], Extrapolation.CLAMP)}%`,
        { overshootClamping: true }
      ),
    };
  });

  const variantStyles = {
    default: 'bg-primary',
    success: 'bg-success',
    error: 'bg-error',
    warning: 'bg-warning',
    info: 'bg-info'
  };

  return (
    <ProgressPrimitive.Indicator asChild>
      <Animated.View 
        style={indicator}
        className={cn('h-full rounded-full', variantStyles[variant], className)} 
      />
    </ProgressPrimitive.Indicator>
  );
}

const Progress = forwardRef<ProgressPrimitive.RootRef, ProgressProps>(
  ({ className, value, variant = 'default', size = 'md', indicatorClassName, ...props }, ref) => {
    const sizeStyles = {
      sm: 'h-1',
      md: 'h-2',
      lg: 'h-3'
    };

    return (
      <ProgressPrimitive.Root
        ref={ref}
        className={cn(
          'relative overflow-hidden rounded-full bg-base-lighter w-full min-w-[150px]',
          sizeStyles[size],
          className
        )}
        {...props}
      >
        <Indicator value={value} variant={variant} className={indicatorClassName} />
      </ProgressPrimitive.Root>
    );
  }
);

Progress.displayName = 'Progress';

export { Progress }; 