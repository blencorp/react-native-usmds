import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { View, Text, Pressable } from 'react-native';
import * as CheckboxPrimitive from '@rn-primitives/checkbox';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';
import { Check } from 'lucide-react-native';

const checkboxTileVariants = cva('flex flex-col w-[329px] rounded-[2px] border-2', {
  variants: {
    variant: {
      default: 'gap-2.5',
      withDescription: 'gap-1.5'
    },
    state: {
      checked: 'bg-primary-lighter border-primary-light',
      unchecked: 'bg-white border-disabled-lighter',
      disabled: 'bg-white border-gray-10'
    }
  },
  defaultVariants: {
    variant: 'default',
    state: 'unchecked'
  }
});

interface CheckboxTileProps extends ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>, VariantProps<typeof checkboxTileVariants> {
  label: string;
  description?: string;
  className?: string;
}

const CheckboxTile = forwardRef<ElementRef<typeof CheckboxPrimitive.Root>, CheckboxTileProps>(
  ({ label, description, className, disabled, checked, onCheckedChange, ...props }, ref) => {
    const handlePress = () => {
      if (!disabled && onCheckedChange) {
        onCheckedChange(!checked);
      }
    };

    const state = disabled ? 'disabled' : checked ? 'checked' : 'unchecked';
    const variant = description ? 'withDescription' : 'default';

    return (
      <Pressable onPress={handlePress} disabled={disabled}>
        <View className={cn(checkboxTileVariants({ variant, state }), 'p-[13px_16px_13px_9px]', className)}>
          <View className='flex flex-row items-start gap-2'>
            <CheckboxPrimitive.Root
              ref={ref}
              disabled={disabled}
              checked={checked}
              onCheckedChange={onCheckedChange}
              {...props}
              style={{
                width: 20,
                height: 20,
                borderWidth: 2,
                borderRadius: 2,
                backgroundColor: checked
                  ? disabled
                    ? 'rgb(117, 117, 117)' // disabled
                    : 'rgb(0, 94, 162)' // primary
                  : 'transparent',
                borderColor: disabled
                  ? 'rgb(117, 117, 117)' // disabled
                  : checked
                    ? 'rgb(0, 94, 162)' // primary
                    : 'rgb(27, 27, 27)', // base-ink
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <CheckboxPrimitive.Indicator>
                <Check size={12} color='white' strokeWidth={3} />
              </CheckboxPrimitive.Indicator>
            </CheckboxPrimitive.Root>

            <Text className={cn('flex-1 text-base leading-5 font-source-sans-pro', disabled ? 'text-disabled' : 'text-base-ink')}>{label}</Text>
          </View>

          {description && (
            <Text className={cn('pl-7 text-base leading-5 font-source-sans-pro', disabled ? 'text-disabled' : 'text-base-ink')}>{description}</Text>
          )}
        </View>
      </Pressable>
    );
  }
);

CheckboxTile.displayName = 'CheckboxTile';

export { CheckboxTile, type CheckboxTileProps };
