import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { View, Text, Pressable } from 'react-native';
import * as CheckboxPrimitive from '@rn-primitives/checkbox';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react-native';

interface CheckboxProps extends ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  label: string;
}

const Checkbox = forwardRef<ElementRef<typeof CheckboxPrimitive.Root>, CheckboxProps>(
  ({ label, disabled, checked, onCheckedChange, ...props }, ref) => {
    const handlePress = () => {
      if (!disabled && onCheckedChange) {
        onCheckedChange(!checked);
      }
    };

    return (
      <Pressable onPress={handlePress}>
        <View className='flex flex-row items-center gap-2 w-[329px] h-5'>
          <CheckboxPrimitive.Root
            ref={ref}
            disabled={disabled}
            checked={checked}
            onCheckedChange={onCheckedChange}
            {...props}
            className={cn(
              'w-6 h-6 border-2 rounded-sm items-center justify-center flex-shrink-0',
              checked
                ? disabled
                  ? 'bg-disabled border-disabled' // disabled state
                  : 'bg-primary border-primary'   // checked state
                : 'bg-transparent border-base-ink' // unchecked state
            )}
          >
            <CheckboxPrimitive.Indicator>
              <Check size={12} className="text-white" strokeWidth={3} />
            </CheckboxPrimitive.Indicator>
          </CheckboxPrimitive.Root>

          <Text className={cn('flex-1 text-base leading-5', disabled ? 'text-disabled' : 'text-base-ink')}>{label}</Text>
        </View>
      </Pressable>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export { Checkbox };
