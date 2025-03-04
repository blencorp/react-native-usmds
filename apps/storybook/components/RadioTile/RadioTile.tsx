import { ComponentPropsWithoutRef, ElementRef, forwardRef, useContext, createContext } from 'react';
import { View, Text, Pressable, GestureResponderEvent } from 'react-native';
import * as RadioGroupPrimitive from '@rn-primitives/radio-group';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { cssInterop } from 'nativewind';

cssInterop(RadioGroupPrimitive.Root, { className: 'style' });
cssInterop(RadioGroupPrimitive.Item, { className: 'style' });
cssInterop(RadioGroupPrimitive.Indicator, { className: 'style' });

const RadioContext = createContext<{ value?: string; onValueChange?: (value: string) => void }>({});

const radioTileVariants = cva('flex flex-col w-[329px] rounded-[2px] border-2', {
  variants: {
    variant: {
      default: '',
      withDescription: 'gap-2'
    },
    state: {
      checked: 'bg-primary-lighter border-primary',
      unchecked: 'bg-white border-disabled-lighter',
      disabled: 'bg-white border-gray-10'
    }
  },
  defaultVariants: {
    variant: 'default',
    state: 'unchecked'
  }
});

interface RadioTileProps extends ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>, VariantProps<typeof radioTileVariants> {
  label: string;
  description?: string;
  className?: string;
  variant?: 'default' | 'withDescription';
}

const RadioTileGroup = forwardRef<ElementRef<typeof RadioGroupPrimitive.Root>, ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>>(
  ({ ...props }, ref) => {
    return (
      <RadioContext.Provider value={{ value: props.value, onValueChange: props.onValueChange }}>
        <RadioGroupPrimitive.Root ref={ref} {...props}>
          <View className='flex flex-col gap-3'>{props.children}</View>
        </RadioGroupPrimitive.Root>
      </RadioContext.Provider>
    );
  }
);

const RadioTile = forwardRef<ElementRef<typeof RadioGroupPrimitive.Item>, RadioTileProps>(
  ({ label, description, className, variant = description ? 'withDescription' : 'default', ...props }, ref) => {
    const labelId = `${props.value}-label`;
    const descriptionId = `${props.value}-description`;
    const { value, onValueChange } = useContext(RadioContext);
    const isSelected = value === props.value;

    const state = props.disabled ? 'disabled' : isSelected ? 'checked' : 'unchecked';

    const handlePress = (event: GestureResponderEvent) => {
      if (!props.disabled && onValueChange) {
        onValueChange(props.value);
      }
    };

    return (
      <Pressable onPress={handlePress} disabled={props.disabled}>
        <View className={cn(radioTileVariants({ variant, state }), 'p-[13px_16px_13px_9px]', className)}>
          <View className='flex flex-row items-center gap-2 min-h-[44px]'>
            <RadioGroupPrimitive.Item
              ref={ref}
              aria-labelledby={labelId}
              aria-describedby={description ? descriptionId : undefined}
              style={{
                width: 20,
                height: 20,
                borderRadius: 9999,
                borderWidth: 2,
                backgroundColor: 'white',
                borderColor: props.disabled ? '#757575' : isSelected ? '#005EA2' : '#1B1B1B',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              {...props}
            >
              <RadioGroupPrimitive.Indicator>
                <View
                  style={{
                    width: 12.5,
                    height: 12.5,
                    borderRadius: 9999,
                    backgroundColor: props.disabled ? '#757575' : '#005EA2'
                  }}
                />
              </RadioGroupPrimitive.Indicator>
            </RadioGroupPrimitive.Item>
            <Text nativeID={labelId} className={cn('flex-1 text-base leading-5', props.disabled ? 'text-disabled' : 'text-base-ink')}>
              {label}
            </Text>
          </View>
          {description && (
            <Text nativeID={descriptionId} className={cn('pl-7 text-[15px] leading-[19px]', props.disabled ? 'text-disabled' : 'text-base-ink')}>
              {description}
            </Text>
          )}
        </View>
      </Pressable>
    );
  }
);

RadioTile.displayName = 'RadioTile';
RadioTileGroup.displayName = 'RadioTileGroup';

export { RadioTileGroup, RadioTile, type RadioTileProps };
