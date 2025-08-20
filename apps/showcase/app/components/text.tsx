import { ScrollView, View } from 'react-native';
import { Text } from '../../../storybook/components/Text/Text';

export default function TextScreen() {
  return (
    <ScrollView className='flex-1 bg-background'>
      <View className='space-y-2'>
        <Text className='text-base-ink'>Base Ink</Text>
        <Text className='text-primary'>Primary</Text>
        <Text className='text-secondary'>Secondary</Text>
        <Text className='text-error'>Error</Text>
        <Text className='text-success'>Success</Text>
        <Text className='text-warning'>Warning</Text>
      </View>
      <View className='space-y-4'>
        <Text className='text-[40px] leading-[48px] font-bold'>Display Large</Text>
        <Text className='text-[36px] leading-[44px] font-bold'>Display Medium</Text>
        <Text className='text-[32px] leading-[40px] font-bold'>Display Small</Text>
        <Text className='text-[22px] leading-[28px]'>Heading Large</Text>
        <Text className='text-[20px] leading-[24px]'>Heading Medium</Text>
        <Text className='text-[18px] leading-[22px]'>Heading Small</Text>
        <Text className='text-[16px] leading-[20px]'>Body Large</Text>
        <Text className='text-[14px] leading-[18px]'>Body Medium</Text>
        <Text className='text-[12px] leading-[16px]'>Body Small</Text>
      </View>
    </ScrollView>
  );
}
