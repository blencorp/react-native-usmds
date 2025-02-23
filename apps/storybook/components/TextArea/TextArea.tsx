import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { View, TextInput, Text } from 'react-native';
import { cn } from '@/lib/utils';

type TextAreaProps = ComponentPropsWithoutRef<typeof TextInput> & {
  label?: string;
  helperText?: string;
  error?: boolean;
  className?: string;
  maxLength?: number;
  value?: string;
  disabled?: boolean;
};

const TextArea = forwardRef<ElementRef<typeof TextInput>, TextAreaProps>(
  ({ className, label, helperText, error, maxLength, value = '', disabled, ...props }, ref) => {
    const characterCount = value.toString().length;

    return (
      <View className='flex flex-col gap-2 w-[329px]'>
        {label && <Text className='text-base-ink text-base leading-5'>{label}</Text>}

        {helperText && <Text className={cn('text-base leading-5', error ? 'text-error-dark' : 'text-gray-50')}>{helperText}</Text>}

        <TextInput
          ref={ref}
          className={cn(
            'min-h-[160px] w-full rounded-md border border-base-ink bg-white px-3 py-2',
            'text-base leading-6 text-base-ink',
            'placeholder:text-gray-50',
            error && 'border-error-dark',
            disabled && 'opacity-50 bg-disabled-lighter',
            className
          )}
          multiline={true}
          numberOfLines={4}
          textAlignVertical='top'
          placeholderTextColor='#757575'
          editable={!disabled}
          value={value}
          maxLength={maxLength}
          {...props}
        />

        {maxLength && (
          <Text className='text-gray-50 text-base leading-5 text-right'>
            {characterCount}/{maxLength}
          </Text>
        )}
      </View>
    );
  }
);

TextArea.displayName = 'TextArea';

export { TextArea, type TextAreaProps };
