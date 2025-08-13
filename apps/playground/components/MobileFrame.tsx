import React, { ReactNode } from 'react';
import { View, ScrollView } from 'react-native';
import { Text } from './ui/text';

interface MobileFrameProps {
  children: ReactNode;
  deviceType?: 'iphone' | 'android';
}

export const MobileFrame: React.FC<MobileFrameProps> = ({ children, deviceType = 'iphone' }) => {
  return (
    <View className='flex items-center justify-center p-6 bg-gray-100'>
      {/* Device Frame */}
      <View
        className='bg-black rounded-[2rem] p-2 shadow-2xl'
        style={{
          width: 320,
          height: 640,
          maxWidth: '90%',
          maxHeight: '90%'
        }}
      >
        {/* Screen */}
        <View className='bg-white rounded-[1.5rem] flex-1 overflow-hidden'>
          {/* Status Bar */}
          <View className='flex-row justify-between items-center px-6 pt-3 pb-2 bg-white'>
            <View className='flex-row items-center space-x-1'>
              <View className='flex-row space-x-1'>
                <View className='w-1 h-1 bg-black rounded-full' />
                <View className='w-1 h-1 bg-black rounded-full' />
                <View className='w-1 h-1 bg-black rounded-full' />
              </View>
              <Text className='text-xs font-semibold ml-2'>{deviceType === 'iphone' ? 'Verizon' : 'T-Mobile'}</Text>
            </View>

            <View className='flex-row items-center space-x-1'>
              <Text className='text-xs font-semibold'>9:41 AM</Text>
            </View>

            <View className='flex-row items-center space-x-1'>
              {/* Battery */}
              <View className='w-6 h-3 border border-black rounded-sm'>
                <View className='w-4 h-1.5 bg-green-500 rounded-sm m-0.5' />
              </View>
              {/* Signal */}
              <View className='flex-row space-x-0.5'>
                <View className='w-1 h-1 bg-black rounded-full' />
                <View className='w-1 h-2 bg-black rounded-full' />
                <View className='w-1 h-3 bg-black rounded-full' />
              </View>
            </View>
          </View>

          {/* Dynamic Island (iPhone) */}
          {deviceType === 'iphone' && (
            <View className='absolute top-2 left-1/2 transform -translate-x-1/2 z-10'>
              <View className='w-32 h-6 bg-black rounded-full' />
            </View>
          )}

          {/* App Content Area */}
          <View className='flex-1 bg-white'>
            {/* Navigation Bar */}
            <View className='border-b border-gray-200 bg-white px-4 py-3'>
              <View className='flex-row items-center justify-between'>
                <View className='w-6 h-6 border border-gray-300 rounded items-center justify-center'>
                  <Text className='text-xs'>←</Text>
                </View>
                <Text className='text-lg font-semibold'>USMDS Preview</Text>
                <View className='w-6 h-6 border border-gray-300 rounded items-center justify-center'>
                  <Text className='text-xs'>⋯</Text>
                </View>
              </View>
            </View>

            {/* Scrollable Content Area */}
            <ScrollView className='flex-1' showsVerticalScrollIndicator={true} bounces={true}>
              {children}
            </ScrollView>

            {/* Safe Area Bottom */}
            <View className='h-8 bg-white' />
          </View>

          {/* Home Indicator (iPhone) */}
          {deviceType === 'iphone' && (
            <View className='absolute bottom-1 left-1/2 transform -translate-x-1/2'>
              <View className='w-32 h-1 bg-black rounded-full opacity-60' />
            </View>
          )}
        </View>
      </View>

      {/* Device Info */}
      <View className='mt-4 flex-row items-center space-x-4'>
        <View className='flex-row items-center space-x-2'>
          <View className='w-3 h-3 bg-green-500 rounded-full' />
          <Text className='text-sm text-gray-600'>{deviceType === 'iphone' ? 'iPhone 15 Pro' : 'Pixel 8'}</Text>
        </View>
        <Text className='text-sm text-gray-500'>•</Text>
        <Text className='text-sm text-gray-500'>React Native</Text>
        <Text className='text-sm text-gray-500'>•</Text>
        <Text className='text-sm text-gray-500'>Live Preview</Text>
      </View>
    </View>
  );
};
