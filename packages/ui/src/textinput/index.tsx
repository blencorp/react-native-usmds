import { ComponentPropsWithoutRef, ElementRef, forwardRef, useState } from 'react';
import { View, TextInput as RNTextInput, Text } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const inputVariants = cva(['flex h-10 w-[329px] rounded-none bg-white', 'font-source-sans-pro text-base', 'text-base-ink placeholder:text-gray-50'], {
  variants: {
    variant: {
      default: 'px-[9px]',
      prefix: 'pl-[41px] pr-[9px]',
      suffix: 'pl-[9px] pr-[45px]'
    },
    state: {
      default: 'border border-base-ink',
      focus: 'border-4 border-focus-ring',
      error: 'border-4 border-error-dark',
      success: 'border-4 border-success',
      disabled: 'bg-disabled-lighter border border-base-dark opacity-50'
    }
  },
  defaultVariants: {
    variant: 'default',
    state: 'default'
  }
});

type TextInputProps = ComponentPropsWithoutRef<typeof RNTextInput> &
  VariantProps<typeof inputVariants> & {
    label?: string;
    helperText?: string;
    errorMessage?: string;
    required?: boolean;
    className?: string;
    suffix?: string;
    prefix?: React.ReactNode;
  };

const TextInput = forwardRef<ElementRef<typeof RNTextInput>, TextInputProps>(
  (
    { className, label, helperText = '', errorMessage, required = true, variant = 'default', state = 'default', suffix, prefix, ...props },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const showError = state === 'error';
    const isDisabled = state === 'disabled';
    const currentState = isFocused ? 'focus' : state;

    return (
      <View className='relative flex flex-row'>
        {showError && <View className='absolute left-0 top-0 h-full w-[4px] bg-error-dark' />}

        <View className='flex flex-col gap-2 ml-5 flex-1'>
          <View className='flex flex-row gap-1'>
            <Text className='text-base-ink text-base leading-5 font-source-sans-pro'>{label}</Text>
            {required && <Text className='text-error-dark text-base leading-5 font-source-sans-pro'>*</Text>}
          </View>

          {helperText && <Text className='text-gray-50 text-base leading-5 font-source-sans-pro'>{helperText}</Text>}

          {showError && errorMessage && <Text className='text-error-dark text-base leading-5 font-source-sans-pro font-bold'>{errorMessage}</Text>}

          <View className='relative flex flex-row items-center'>
            {variant === 'prefix' && prefix && (
              <View className='absolute left-[9px] top-[8px] bottom-[8px] flex items-center justify-center z-10'>{prefix}</View>
            )}

            <RNTextInput
              ref={ref}
              testID='textbox'
              accessibilityRole='text'
              accessibilityLabel={label}
              accessibilityState={{ disabled: isDisabled }}
              className={cn(inputVariants({ variant, state: currentState }), 'text-base-ink font-sans', className)}
              placeholderTextColor='#757575'
              style={{
                height: 40,
                paddingTop: 0,
                paddingBottom: 0,
                paddingRight: variant === 'suffix' ? 45 : 9,
                textAlignVertical: 'center',
                includeFontPadding: false,
                fontSize: 16
              }}
              editable={!isDisabled}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              {...props}
            />

            {variant === 'suffix' && suffix && (
              <View className='absolute right-10 top-0 bottom-0 flex items-center justify-center'>
                <Text
                  className='text-gray-50'
                  style={{
                    fontSize: 16,
                    lineHeight: 24,
                    textAlignVertical: 'center',
                    includeFontPadding: false
                  }}
                >
                  {suffix}
                </Text>
              </View>
            )}
          </View>
        </View>
      </View>
    );
  }
);

TextInput.displayName = 'TextInput';

export { TextInput, type TextInputProps };
