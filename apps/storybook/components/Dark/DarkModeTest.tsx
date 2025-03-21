import React from 'react';
import { View, Text, useColorScheme } from 'react-native';
import { useEffect } from 'react';

export const DarkModeTest = () => {
  // For testing purposes, you can override the system color scheme
  const systemColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = React.useState(systemColorScheme);

  // Add a toggle button
  const toggleTheme = () => {
    setColorScheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <View className='p-4'>
      <View className={`bg-background p-6 rounded-lg ${colorScheme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
        <Text className={`text-xl font-bold mb-4 ${colorScheme === 'dark' ? 'text-white' : 'text-black'}`}>Current Theme: {colorScheme}</Text>

        {/* Add toggle button */}
        <View className='mb-4'>
          <Text className='bg-primary p-2 rounded text-white text-center' onPress={toggleTheme}>
            Toggle Theme
          </Text>
        </View>

        <View className='space-y-4'>
          <View className={`p-4 rounded ${colorScheme === 'dark' ? 'bg-primary-light' : 'bg-primary'}`}>
            <Text className='text-white'>Primary Background</Text>
          </View>
          <View className={`p-4 rounded ${colorScheme === 'dark' ? 'bg-secondary-light' : 'bg-secondary'}`}>
            <Text className='text-white'>Secondary Background</Text>
          </View>
          <View className={`p-4 rounded ${colorScheme === 'dark' ? 'bg-accent-cool-light' : 'bg-accent-cool'}`}>
            <Text className='text-white'>Accent Cool Background</Text>
          </View>
          <View className={`p-4 rounded ${colorScheme === 'dark' ? 'bg-accent-warm-light' : 'bg-accent-warm'}`}>
            <Text className='text-white'>Accent Warm Background</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
