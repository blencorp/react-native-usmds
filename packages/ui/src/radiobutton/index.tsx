import { ComponentPropsWithoutRef, ElementRef, forwardRef, useContext, createContext } from 'react';
import { View, Text, Pressable, GestureResponderEvent } from 'react-native';
import * as RadioGroupPrimitive from '@rn-primitives/radio-group';
import { cn } from '@/lib/utils';

const RadioContext = createContext<{ value?: string }>({});
// ERROR: For some reason tailwind colors are not working here.
interface RadioButtonProps extends ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
  label: string;
  className?: string;
}

const RadioGroup = forwardRef<ElementRef<typeof RadioGroupPrimitive.Root>, ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>>(
  ({ ...props }, ref) => {
    return (
      <RadioContext.Provider value={{ value: props.value }}>
        <RadioGroupPrimitive.Root ref={ref} {...props}>
          <View className='flex flex-col gap-3 p-5'>{props.children}</View>
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
      className='flex flex-row items-center gap-2 min-h-[44px] w-[329px]'
    >
      <RadioGroupPrimitive.Item
        ref={ref}
        aria-labelledby={labelId}
        testID={`radio-${props.value}`}
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
    </Pressable>
  );
});

RadioButton.displayName = 'RadioButton';
RadioGroup.displayName = 'RadioGroup';

export { RadioGroup, RadioButton };
