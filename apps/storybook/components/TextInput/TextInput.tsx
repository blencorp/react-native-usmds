import { ComponentPropsWithoutRef, ElementRef, forwardRef, useState } from 'react';
import { View, TextInput as RNTextInput, Text } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const inputVariants = cva(
  ['flex h-10 rounded-none', 'text-base', 'text-foreground placeholder:text-muted-foreground bg-background'],
  {
    variants: {
      variant: {
        default: 'px-[9px]',
        prefix: 'pl-[41px] pr-[9px]',
        suffix: 'pl-[9px] pr-[45px]'
      },
      state: {
        default: 'border border-border',
        focus: 'border-4 border-ring',
        error: 'border-4 border-destructive',
        success: 'border-4 border-success',
        disabled: 'bg-muted border border-muted-foreground opacity-50'
      }
    },
    defaultVariants: {
      variant: 'default',
      state: 'default'
    }
  }
);

type TextInputProps = ComponentPropsWithoutRef<typeof RNTextInput> &
  VariantProps<typeof inputVariants> & {
    label?: string;
    helperText?: string;
    errorMessage?: string;
    required?: boolean;
    className?: string;
    suffix?: string | React.ReactNode;
    prefix?: string | React.ReactNode;
  };

const TextInput = forwardRef<ElementRef<typeof RNTextInput>, TextInputProps>(
  ({ className, label, helperText = '', errorMessage, required = true, variant = 'default', state = 'default', suffix, prefix, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const showError = state === 'error';
    const isDisabled = state === 'disabled';

    // Only use focus state when the input is actually focused and state is default
    const currentState = isFocused && state === 'default' ? 'focus' : state;

    const renderSuffix = () => {
      if (!suffix) return null;
      if (typeof suffix === 'string') {
        return <Text className='text-foreground text-base'>{suffix}</Text>;
      }
      return suffix;
    };

    const renderPrefix = () => {
      if (!prefix) return null;
      if (typeof prefix === 'string') {
        return <Text className='text-foreground text-base'>{prefix}</Text>;
      }
      return prefix;
    };

    return (
      <View className='w-full'>
        <View className='flex-row gap-1'>
          <Text className='text-foreground text-base leading-5'>{label}</Text>
          {required && <Text className='text-destructive text-base leading-5'>*</Text>}
        </View>

        {helperText && <Text className='text-muted-foreground text-base leading-5 mt-2'>{helperText}</Text>}

        {showError && errorMessage && <Text className='text-destructive text-base leading-5 font-bold'>{errorMessage}</Text>}

        <View className='relative mt-2 w-full'>
          <RNTextInput
            ref={ref}
            testID='textbox'
            accessibilityRole='text'
            accessibilityLabel={label}
            accessibilityState={{ disabled: isDisabled }}
            className={cn(inputVariants({ variant, state: currentState }), 'w-full text-foreground', className)}
            placeholderTextColor='#666'
            style={{
              height: 40,
              paddingTop: 0,
              paddingBottom: 0,
              paddingLeft: variant === 'prefix' ? 41 : 9,
              paddingRight: variant === 'suffix' ? 45 : 9,
              textAlignVertical: 'center',
              includeFontPadding: false,
              fontSize: 16,
              zIndex: 1
            }}
            editable={!isDisabled}
            onFocus={() => setIsFocused(true)}
            onBlur={(e) => {
              setIsFocused(false);
              props.onBlur?.(e);
            }}
            {...props}
          />

          {variant === 'prefix' && prefix && (
            <View
              style={{
                position: 'absolute',
                left: 9,
                top: 0,
                bottom: 0,
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 2
              }}
            >
              {renderPrefix()}
            </View>
          )}

          {variant === 'suffix' && suffix && (
            <View
              style={{
                position: 'absolute',
                right: 9,
                top: 0,
                bottom: 0,
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 2
              }}
            >
              {renderSuffix()}
            </View>
          )}
        </View>
      </View>
    );
  }
);

TextInput.displayName = 'TextInput';

export { TextInput, type TextInputProps };
