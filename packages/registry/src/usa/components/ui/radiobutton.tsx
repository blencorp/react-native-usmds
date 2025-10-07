import { ComponentPropsWithoutRef, ElementRef, forwardRef, useContext, createContext } from 'react';
import { View, Text, Pressable, GestureResponderEvent, Platform } from 'react-native';
import * as RadioGroupPrimitive from '@rn-primitives/radio-group';
import { cn } from '@/lib/utils';
import { cssInterop } from 'nativewind';

cssInterop(RadioGroupPrimitive.Root, { className: 'style' });
cssInterop(RadioGroupPrimitive.Item, { className: 'style' });
cssInterop(RadioGroupPrimitive.Indicator, { className: 'style' });

const RadioContext = createContext<{ value?: string }>({});
interface RadioButtonProps extends ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
  label: string;
  className?: string;
}

const RadioGroup = forwardRef<ElementRef<typeof RadioGroupPrimitive.Root>, ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>>(
  ({ ...props }, ref) => {
    return (
      <RadioContext.Provider value={{ value: props.value }}>
        <RadioGroupPrimitive.Root ref={ref} {...props}>
          <View className='flex flex-col gap-3'>{props.children}</View>
        </RadioGroupPrimitive.Root>
      </RadioContext.Provider>
    );
  }
);

const RadioButton = forwardRef<ElementRef<typeof RadioGroupPrimitive.Item>, RadioButtonProps>(({ label, className, ...props }, ref) => {
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
      accessibilityRole='radio'
      accessibilityState={{ checked: isSelected, disabled: props.disabled || false }}
      onPress={handlePress}
      className='flex flex-row items-center gap-2 min-h-[44px] w-[329px] px-4'
    >
      <RadioGroupPrimitive.Item
        ref={ref}
        aria-labelledby={labelId}
        testID={`radio-${props.value}`}
        className={cn(
          Platform.OS === 'web' ? 'w-5 h-5' : 'min-w-[20px] min-h-[20px] w-5 h-5',
          'rounded-full border-2 flex items-center justify-center bg-background',
          props.disabled ? 'border-muted-foreground' : isSelected ? 'border-primary' : 'border-foreground'
        )}
        {...props}
      >
        <RadioGroupPrimitive.Indicator forceMount className={Platform.OS === 'web' ? 'flex items-center justify-center' : 'w-full h-full flex items-center justify-center'}>
          <View className={cn('h-[10px] w-[10px] rounded-full', isSelected ? (props.disabled ? 'bg-muted-foreground' : 'bg-primary') : 'bg-transparent')} />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>

      <Text nativeID={labelId} className={cn('flex-1 text-base leading-5', props.disabled ? 'text-muted-foreground' : 'text-foreground')}>
        {label}
      </Text>
    </Pressable>
  );
});

RadioButton.displayName = 'RadioButton';
RadioGroup.displayName = 'RadioGroup';

export { RadioGroup, RadioButton };
