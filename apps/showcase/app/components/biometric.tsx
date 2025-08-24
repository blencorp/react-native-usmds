import { ScrollView, View } from 'react-native';
import { useState } from 'react';
import { BiometricSignIn } from '../../../storybook/components/BiometricSignIn/BiometricSignIn';
import { Text } from '../../../storybook/components/Text/Text';

export default function BiometricScreen() {
  // State for biometric types section
  const [faceIdType, setFaceIdType] = useState(false);
  const [touchIdType, setTouchIdType] = useState(false);
  const [biometricType, setBiometricType] = useState(false);
  
  // State for interactive demo section
  const [demoFaceId, setDemoFaceId] = useState(false);
  const [demoTouchId, setDemoTouchId] = useState(false);
  const [demoBiometric, setDemoBiometric] = useState(false);
  
  // State for use cases
  const [settingsFaceId, setSettingsFaceId] = useState(false);
  const [onboardingTouchId, setOnboardingTouchId] = useState(false);
  const [securityBiometric, setSecurityBiometric] = useState(false);
  
  // State for disabled example
  const [disabledChecked, setDisabledChecked] = useState(true);

  return (
    <ScrollView className='flex-1 bg-background'>
      <View className='p-4 space-y-8 w-full mx-auto'>
        
        {/* Biometric Types */}
        <View>
          <Text className='text-lg font-bold mb-4'>Biometric Types</Text>
          <View className='space-y-4'>
            {/* Face ID */}
            <View>
              <Text className='text-sm text-muted-foreground mb-2'>Face ID (iOS)</Text>
              <View className='items-center'>
                <BiometricSignIn 
                  checked={faceIdType} 
                  onCheckedChange={setFaceIdType} 
                  biometricType='faceId' 
                />
              </View>
            </View>

            {/* Touch ID */}
            <View>
              <Text className='text-sm text-muted-foreground mb-2'>Touch ID (iOS)</Text>
              <View className='items-center'>
                <BiometricSignIn 
                  checked={touchIdType} 
                  onCheckedChange={setTouchIdType} 
                  biometricType='touchId' 
                />
              </View>
            </View>

            {/* Generic Biometric */}
            <View>
              <Text className='text-sm text-muted-foreground mb-2'>Biometric (Android)</Text>
              <View className='items-center'>
                <BiometricSignIn 
                  checked={biometricType} 
                  onCheckedChange={setBiometricType} 
                  biometricType='biometric' 
                />
              </View>
            </View>
          </View>
        </View>

        {/* States */}
        <View>
          <Text className='text-lg font-bold mb-4'>Component States</Text>
          <View className='space-y-4'>
            {/* Unchecked */}
            <View>
              <Text className='text-sm text-muted-foreground mb-2'>Unchecked</Text>
              <View className='items-center'>
                <BiometricSignIn 
                  checked={false} 
                  onCheckedChange={() => {}} 
                  biometricType='faceId' 
                />
              </View>
            </View>

            {/* Checked */}
            <View>
              <Text className='text-sm text-muted-foreground mb-2'>Checked</Text>
              <View className='items-center'>
                <BiometricSignIn 
                  checked={true} 
                  onCheckedChange={() => {}} 
                  biometricType='faceId' 
                />
              </View>
            </View>

            {/* Disabled Unchecked */}
            <View>
              <Text className='text-sm text-muted-foreground mb-2'>Disabled (Unchecked)</Text>
              <View className='items-center'>
                <BiometricSignIn 
                  checked={false} 
                  onCheckedChange={() => {}} 
                  biometricType='faceId' 
                  disabled={true}
                />
              </View>
            </View>

            {/* Disabled Checked */}
            <View>
              <Text className='text-sm text-muted-foreground mb-2'>Disabled (Checked)</Text>
              <View className='items-center'>
                <BiometricSignIn 
                  checked={disabledChecked} 
                  onCheckedChange={setDisabledChecked} 
                  biometricType='faceId' 
                  disabled={true}
                />
              </View>
            </View>
          </View>
        </View>

        {/* Use Cases */}
        <View>
          <Text className='text-lg font-bold mb-4'>Common Use Cases</Text>
          
          {/* Settings Screen */}
          <View className='bg-card rounded-lg p-4 mb-4'>
            <Text className='text-base font-semibold mb-4'>Security Settings</Text>
            <View className='space-y-3'>
              <BiometricSignIn 
                checked={settingsFaceId} 
                onCheckedChange={setSettingsFaceId} 
                biometricType='faceId' 
              />
              <Text className='text-sm text-muted-foreground px-2'>
                Use Face ID to quickly and securely sign in to your account
              </Text>
            </View>
          </View>

          {/* Onboarding */}
          <View className='bg-card rounded-lg p-4 mb-4'>
            <Text className='text-base font-semibold mb-2'>Quick Setup</Text>
            <Text className='text-sm text-muted-foreground mb-4'>
              Enable biometric authentication for faster sign-ins
            </Text>
            <View className='items-center'>
              <BiometricSignIn 
                checked={onboardingTouchId} 
                onCheckedChange={setOnboardingTouchId} 
                biometricType='touchId' 
              />
            </View>
          </View>

          {/* Account Security */}
          <View className='bg-card rounded-lg p-4'>
            <Text className='text-base font-semibold mb-2'>Two-Factor Authentication</Text>
            <Text className='text-sm text-muted-foreground mb-4'>
              Add an extra layer of security to your account
            </Text>
            <View className='items-center'>
              <BiometricSignIn 
                checked={securityBiometric} 
                onCheckedChange={setSecurityBiometric} 
                biometricType='biometric' 
              />
            </View>
          </View>
        </View>

        {/* Interactive Demo */}
        <View>
          <Text className='text-lg font-bold mb-4'>Interactive Demo</Text>
          <View className='bg-muted/20 rounded-lg p-4'>
            <Text className='text-sm text-muted-foreground mb-4'>
              Try toggling these options to see the component in action
            </Text>
            <View className='space-y-3'>
              <BiometricSignIn 
                checked={demoFaceId} 
                onCheckedChange={setDemoFaceId} 
                biometricType='faceId' 
              />
              <BiometricSignIn 
                checked={demoTouchId} 
                onCheckedChange={setDemoTouchId} 
                biometricType='touchId' 
              />
              <BiometricSignIn 
                checked={demoBiometric} 
                onCheckedChange={setDemoBiometric} 
                biometricType='biometric' 
              />
            </View>
            <View className='mt-4 p-3 bg-background rounded'>
              <Text className='text-sm font-medium mb-2'>Current Status:</Text>
              <Text className='text-xs text-muted-foreground'>
                Face ID: {demoFaceId ? 'Enabled ✓' : 'Disabled ✗'}
              </Text>
              <Text className='text-xs text-muted-foreground'>
                Touch ID: {demoTouchId ? 'Enabled ✓' : 'Disabled ✗'}
              </Text>
              <Text className='text-xs text-muted-foreground'>
                Biometric: {demoBiometric ? 'Enabled ✓' : 'Disabled ✗'}
              </Text>
            </View>
          </View>
        </View>

        {/* Implementation Notes */}
        <View>
          <Text className='text-lg font-bold mb-4'>Implementation Notes</Text>
          <View className='bg-info-lighter rounded-lg p-4'>
            <Text className='text-sm font-medium mb-2'>Platform Considerations:</Text>
            <View className='space-y-1'>
              <Text className='text-xs'>• Face ID - Available on iPhone X and later</Text>
              <Text className='text-xs'>• Touch ID - Available on older iPhones and iPads</Text>
              <Text className='text-xs'>• Biometric - Android fingerprint/face authentication</Text>
            </View>
            <Text className='text-sm font-medium mt-3 mb-2'>Best Practices:</Text>
            <View className='space-y-1'>
              <Text className='text-xs'>• Always provide alternative authentication methods</Text>
              <Text className='text-xs'>• Handle biometric failures gracefully</Text>
              <Text className='text-xs'>• Check device capability before showing option</Text>
            </View>
          </View>
        </View>

      </View>
    </ScrollView>
  );
}