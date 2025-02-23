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
        <View className='flex flex-row items-start gap-2 w-[329px] h-5'>
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

          <Text className={cn('flex-1 text-base leading-5', disabled ? 'text-disabled' : 'text-base-ink')}>{label}</Text>
        </View>
      </Pressable>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export { Checkbox };
