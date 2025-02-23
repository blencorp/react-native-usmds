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
          return <ScanFace size={20} color='#1B1B1B' />;
        case 'touchId':
          return <Fingerprint size={20} color='#1B1B1B' />;
        case 'biometric':
          return <Scan size={20} color='#1B1B1B' />;
        default:
          return <ScanFace size={20} color='#1B1B1B' />;
      }
    };

    return (
      <Pressable onPress={handlePress} testID='biometric-pressable'>
        <View className={cn('flex-row items-center px-[15px] py-3 gap-3 w-[318.88px] h-[50px]', 'border border-base-ink rounded', className)}>
          <View className='flex-row items-start gap-2 flex-1'>
            <CheckboxPrimitive.Root
              ref={ref}
              testID='biometric-checkbox'
              accessibilityRole='checkbox'
              accessibilityState={{ checked, disabled }}
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

            <Text className='flex-1 text-base leading-5 font-source-sans-pro text-base-ink'>Enable {getBiometricText()} for sign in</Text>
          </View>

          {getBiometricIcon()}
        </View>
      </Pressable>
    );
  }
);

BiometricSignIn.displayName = 'BiometricSignIn';

export { BiometricSignIn };
