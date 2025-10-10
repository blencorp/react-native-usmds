import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { View, Text, Pressable } from 'react-native';
import * as CheckboxPrimitive from '@rn-primitives/checkbox';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/registry/usa/lib/utils';
import { Icon } from '@/registry/usa/components/ui/icon';
import { Check } from 'lucide-react-native';
import { cssInterop } from 'nativewind';

cssInterop(CheckboxPrimitive.Root, { className: 'style' });

const checkboxTileVariants = cva('flex flex-col w-[329px] rounded-[2px] border-2', {
  variants: {
    variant: {
      default: 'gap-2.5',
      withDescription: 'gap-1.5'
    },
    state: {
      checked: 'bg-primary-lighter border-primary-light',
      unchecked: 'bg-background border-disabled-lighter',
      disabled: 'bg-background border-disabled-light'
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
          <View className='flex flex-row gap-2'>
            <View className='w-5'>
              <CheckboxPrimitive.Root
                ref={ref}
                disabled={disabled}
                checked={checked}
                onCheckedChange={onCheckedChange}
                {...props}
                className={cn(
                  'w-5 h-5 border-2 rounded items-center justify-center flex-shrink-0',
                  checked ? (disabled ? 'bg-disabled border-disabled' : 'bg-primary border-primary') : 'bg-transparent border-base-ink'
                )}
              >
                <CheckboxPrimitive.Indicator>
                  <Icon as={Check} size={14} className='text-white' />
                </CheckboxPrimitive.Indicator>
              </CheckboxPrimitive.Root>
            </View>

            <View className='flex-1 flex-col gap-1.5'>
              <Text className={cn('text-base leading-5', disabled ? 'text-disabled' : 'text-base-ink')}>{label}</Text>

              {description && <Text className={cn('text-base leading-5', disabled ? 'text-disabled' : 'text-base-ink')}>{description}</Text>}
            </View>
          </View>
        </View>
      </Pressable>
    );
  }
);

CheckboxTile.displayName = 'CheckboxTile';

export { CheckboxTile, type CheckboxTileProps };
