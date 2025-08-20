import { ScrollView, View } from 'react-native';
import { Button } from '../../../storybook/components/Button/Button';
import { Text } from '../../../storybook/components/Text/Text';

export default function ButtonScreen() {
  return (
    <ScrollView className="flex-1 bg-background">
      <View className='space-y-12 p-4 w-full max-w-[393px] mx-auto'>
        {/* Primary */}
        <View>
          <Text className='text-lg font-bold mb-4'>Primary</Text>
          <View className='space-y-4'>
            <View>
              <Text className='text-sm mb-2'>Default</Text>
              <Button variant='default'>
                <Text>Primary</Text>
              </Button>
            </View>
          </View>
        </View>

        {/* Secondary */}
        <View>
          <Text className='text-lg font-bold mb-4'>Secondary</Text>
          <View className='space-y-4'>
            <View>
              <Text className='text-sm mb-2'>Default</Text>
              <Button variant='secondary'>
                <Text>Secondary</Text>
              </Button>
            </View>
          </View>
        </View>

        {/* Accent Cool */}
        <View>
          <Text className='text-lg font-bold mb-4'>Accent Cool</Text>
          <View className='space-y-4'>
            <View>
              <Text className='text-sm mb-2'>Default</Text>
              <Button 
                variant='accent-cool'
                style={{ backgroundColor: '#00BDE3' }}
              >
                <Text>Accent Cool</Text>
              </Button>
            </View>
          </View>
        </View>

        {/* Accent Warm */}
        <View>
          <Text className='text-lg font-bold mb-4'>Accent Warm</Text>
          <View className='space-y-4'>
            <View>
              <Text className='text-sm mb-2'>Default</Text>
              <Button 
                variant='accent-warm'
                style={{ backgroundColor: '#FA9441' }}
              >
                <Text>Accent Warm</Text>
              </Button>
            </View>
          </View>
        </View>

        {/* Base */}
        <View>
          <Text className='text-lg font-bold mb-4'>Base</Text>
          <View className='space-y-4'>
            <View>
              <Text className='text-sm mb-2'>Default</Text>
              <Button variant='base'>
                <Text>Base</Text>
              </Button>
            </View>
          </View>
        </View>

        {/* Outline */}
        <View>
          <Text className='text-lg font-bold mb-4'>Outline</Text>
          <View className='space-y-4'>
            <View className='border-white'>
              <Text className='text-sm mb-2'>Default</Text>
              <Button variant='outline'>
                <Text>Outline</Text>
              </Button>
            </View>
          </View>
        </View>

        {/* Inverse */}
        <View className='w-full mb-8'>
          <Text className='text-lg font-bold mb-4'>Inverse</Text>
          <View className='bg-foreground p-4 rounded-md'>
            <View className='space-y-4'>
              <View>
                <Text className='text-sm mb-2 text-white'>Default</Text>
                <Button 
                  variant='inverse'
                  style={{ 
                    borderWidth: 1, 
                    borderColor: '#E6E6E6',
                    backgroundColor: '#1B1B1B' 
                  }}
                >
                  <Text>Inverse</Text>
                </Button>
              </View>
            </View>
          </View>
        </View>
        {/* Ghost */}
        <View>
          <Text className='text-lg font-bold mb-4'>Ghost</Text>
          <View className='space-y-4'>
            <View>
              <Text className='text-sm mb-2'>Default</Text>
              <Button variant='ghost'>
                <Text>Ghost</Text>
              </Button>
            </View>
          </View>
        </View>
        {/* Link */}
        <View>
          <Text className='text-lg font-bold mb-4'>Link</Text>
          <View className='space-y-4'>
            <View>
              <Text className='text-sm mb-2'>Default</Text>
              <Button variant='link'>
                <Text>Link</Text>
              </Button>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}