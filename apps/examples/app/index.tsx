import { Link } from 'expo-router';
import { View } from 'react-native';
import { Text } from '@/components/Text';

export default function HomeScreen() {
  return (
    <View className='flex-1 items-center justify-center gap-4'>
      <Text className='text-xl font-bold'>Component Examples</Text>

      <Link href='/button' className='py-2'>
        <Text className='text-primary-500'>Button Examples</Text>
      </Link>
    </View>
  );
}
