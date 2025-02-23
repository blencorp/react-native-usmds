import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { View } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import * as TogglePrimitive from '@rn-primitives/toggle';

const toggleVariants = cva('relative flex items-center justify-center', {
  variants: {
    size: {
      default: 'w-[51px] h-[31px]'
    },
    state: {
      on: 'bg-primary',
      off: 'bg-gray-cool-20',
      disabled: 'bg-gray-cool-20 opacity-50'
    }
  },
  defaultVariants: {
    size: 'default',
    state: 'off'
  }
});

const knobVariants = cva('absolute w-[27px] h-[27px] bg-white rounded-full', {
  variants: {
    state: {
      on: 'left-[22px] top-[2px]',
      off: 'left-[2px] top-[2px]',
      disabled: 'left-[2px] top-[2px]'
    }
  },
  defaultVariants: {
    state: 'off'
  }
});

type ToggleProps = Omit<ComponentPropsWithoutRef<typeof TogglePrimitive.Root>, 'asChild'> &
  VariantProps<typeof toggleVariants> & {
    className?: string;
  };

const Toggle = forwardRef<ElementRef<typeof TogglePrimitive.Root>, ToggleProps>(
  ({ className, size, disabled, pressed, onPressedChange, ...props }, ref) => {
    const state = disabled ? 'disabled' : pressed ? 'on' : 'off';

    return (
      <View testID='toggle-container' className={cn(toggleVariants({ size, state }), 'rounded-full', className)}>
        <TogglePrimitive.Root
          ref={ref}
          pressed={pressed}
          onPressedChange={onPressedChange}
          disabled={disabled}
          accessibilityRole='switch'
          accessibilityState={{ checked: pressed, disabled }}
          testID='toggle'
          style={{
            width: 51,
            height: 31,
            borderRadius: 9999
          }}
          {...props}
        >
          <View className={cn(knobVariants({ state }))} />
        </TogglePrimitive.Root>
      </View>
    );
  }
);

Toggle.displayName = 'Toggle';

export { Toggle, type ToggleProps };
