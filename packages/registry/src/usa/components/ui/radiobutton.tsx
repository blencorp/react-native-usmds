import type { ComponentPropsWithoutRef, ElementRef } from 'react';
import { forwardRef, useContext, createContext } from 'react';
import { View, Text, Pressable, Platform, type GestureResponderEvent } from 'react-native';
import * as RadioGroupPrimitive from '@rn-primitives/radio-group';
import { cssInterop } from 'nativewind';
import { cn } from '@/registry/usa/lib/utils';

cssInterop(RadioGroupPrimitive.Root, { className: 'style' });
cssInterop(RadioGroupPrimitive.Item, { className: 'style' });
cssInterop(RadioGroupPrimitive.Indicator, { className: 'style' });

const RadioContext = createContext<{ value?: string }>({});

type RadioButtonProps = ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> & {
  label: string;
  className?: string;
};

const RadioGroup = forwardRef<
  ElementRef<typeof RadioGroupPrimitive.Root>,
  ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, children, ...props }, ref) => {
  return (
    <RadioContext.Provider value={{ value: props.value }}>
      <RadioGroupPrimitive.Root ref={ref} className={cn('flex flex-col gap-3', className)} {...props}>
        {children}
      </RadioGroupPrimitive.Root>
    </RadioContext.Provider>
  );
});

const RadioButton = forwardRef<ElementRef<typeof RadioGroupPrimitive.Item>, RadioButtonProps>(
  ({ label, className, ...props }, ref) => {
    const labelId = `${props.value}-label`;
    const { value } = useContext(RadioContext);
    const isSelected = value === props.value;

    const handlePress = (event: GestureResponderEvent) => {
      if (!props.disabled && props.onPress) {
        props.onPress(event);
      }
    };

    return (
      <Pressable
        accessibilityRole="radio"
        accessibilityState={{ checked: isSelected, disabled: props.disabled || false }}
        onPress={handlePress}
        className="flex w-[329px] min-h-[44px] flex-row items-center gap-2 px-4"
      >
        <RadioGroupPrimitive.Item
          ref={ref}
          aria-labelledby={labelId}
          testID={`radio-${props.value}`}
          className={cn(
            Platform.OS === 'web' ? 'h-5 w-5' : 'h-5 w-5 min-h-[20px] min-w-[20px]',
            'bg-background rounded-full border-2 items-center justify-center',
            props.disabled ? 'border-muted-foreground' : isSelected ? 'border-primary' : 'border-foreground',
            className
          )}
          {...props}
        >
          <RadioGroupPrimitive.Indicator
            forceMount
            className={Platform.select({
              web: 'flex h-full w-full items-center justify-center',
              default: 'flex h-full w-full items-center justify-center',
            })}
          >
            <View
              className={cn(
                'h-[10px] w-[10px] rounded-full',
                isSelected ? (props.disabled ? 'bg-muted-foreground' : 'bg-primary') : 'bg-transparent'
              )}
            />
          </RadioGroupPrimitive.Indicator>
        </RadioGroupPrimitive.Item>

        <Text nativeID={labelId} className={cn('flex-1 text-base leading-5', props.disabled ? 'text-muted-foreground' : 'text-foreground')}>
          {label}
        </Text>
      </Pressable>
    );
  }
);

RadioGroup.displayName = 'RadioGroup';
RadioButton.displayName = 'RadioButton';

export { RadioButton, RadioGroup };
