import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { View, Text, Pressable } from 'react-native';
import * as CheckboxPrimitive from '@rn-primitives/checkbox';
import { cn } from '../../lib/utils';
import { Fingerprint, Scan, ScanFace } from 'lucide-react-native';
import { Check } from 'lucide-react-native';

interface BiometricSignInProps extends ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  biometricType?: 'faceId' | 'touchId' | 'biometric';
  className?: string;
}

const BiometricSignIn = forwardRef<ElementRef<typeof CheckboxPrimitive.Root>, BiometricSignInProps>(
  ({ biometricType = 'faceId', className, disabled, checked, onCheckedChange, ...props }, ref) => {
    const handlePress = () => {
      if (!disabled && onCheckedChange) {
        onCheckedChange(!checked);
      }
    };

    const getBiometricText = () => {
      switch (biometricType) {
        case 'faceId':
          return 'Face ID';
        case 'touchId':
          return 'Touch ID';
        case 'biometric':
          return 'Biometric';
        default:
          return 'Face ID';
      }
    };

    const getBiometricIcon = () => {
      switch (biometricType) {
        case 'faceId':
          return <ScanFace size={20} className='text-base-ink fill-base-ink' />;
        case 'touchId':
          return <Fingerprint size={20} className='text-base-ink' />;
        case 'biometric':
          return <Scan size={20} className='text-base-ink fill-base-ink' />;
        default:
          return <ScanFace size={20} className='text-base-ink fill-base-ink' />;
      }
    };

    return (
      <Pressable onPress={handlePress} testID='biometric-pressable'>
        <View className={cn('flex-row items-center px-[15px] py-3 gap-3 w-[318.88px] h-[50px]', 'border border-base-ink rounded', className)}>
          <View className='flex-row items-center gap-2 flex-1'>
            <CheckboxPrimitive.Root
              ref={ref}
              testID='biometric-checkbox'
              accessibilityRole='checkbox'
              accessibilityState={{ checked, disabled }}
              disabled={disabled}
              checked={checked}
              onCheckedChange={onCheckedChange}
              {...props}
              className={cn(
                'w-6 h-6 border-2 rounded items-center justify-center flex-shrink-0',
                checked
                  ? disabled
                    ? 'bg-disabled border-disabled' // disabled state
                    : 'bg-primary border-primary' // checked state
                  : 'bg-transparent border-base-ink' // unchecked state
              )}
            >
              <CheckboxPrimitive.Indicator>
                <Check size={12} className='text-white' strokeWidth={3} />
              </CheckboxPrimitive.Indicator>
            </CheckboxPrimitive.Root>

            <Text className='flex-1 text-base leading-5 text-base-ink'>Enable {getBiometricText()} for sign in</Text>
          </View>

          {getBiometricIcon()}
        </View>
      </Pressable>
    );
  }
);

BiometricSignIn.displayName = 'BiometricSignIn';

export { BiometricSignIn };
