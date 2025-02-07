import { Button, Text, ButtonGroup } from '@usmds/ui';
import { useLocalSearchParams, Stack } from 'expo-router';
import { useEffect } from 'react';
import { View, Pressable, ScrollView } from 'react-native';
import { useTheme } from '@/providers/ThemeProvider';
import { Search, ArrowRight } from 'lucide-react-native';

const ButtonScreen = () => {
  const { theme, setTheme } = useTheme();
  const { theme: routeTheme } = useLocalSearchParams();

  useEffect(() => {
    if (routeTheme) {
      setTheme(routeTheme === 'dark' ? 'dark' : 'light');
    }
  }, [routeTheme]);

  const toggleColorScheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          title: 'Button Examples',
          headerBackTitle: 'Back',
          headerRight: () => (
            <Pressable onPress={toggleColorScheme} className='px-4 py-2'>
              <Text>{theme === 'dark' ? 'Light' : 'Dark'}</Text>
            </Pressable>
          )
        }}
      />
      <ScrollView
        className='flex-1 bg-white dark:bg-[#1B1B1B]'
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingVertical: 20,
          gap: 20,
          alignItems: 'center'
        }}
      >
        <Text>Standard Buttons</Text>
        <Button>
          <Text>Default</Text>
        </Button>
        <Button variant='secondary'>
          <Text>Secondary</Text>
        </Button>
        <Button variant='accent-cool'>
          <Text>Accent Cool</Text>
        </Button>
        <Button variant='accent-warm'>
          <Text>Accent Warm</Text>
        </Button>
        <Button variant='base'>
          <Text>Base</Text>
        </Button>
        <Button variant='outline'>
          <Text>Outline</Text>
        </Button>
        <View className='bg-[#1B1B1B] dark:bg-white p-2 rounded-[4px] min-w-[329px]'>
          <Button variant='inverse'>
            <Text>Inverse</Text>
          </Button>
        </View>

        <Text>Big Buttons</Text>
        <Button size='big'>
          <Text>Default Big</Text>
        </Button>
        <Button size='big' variant='secondary'>
          <Text>Secondary Big</Text>
        </Button>
        <Button size='big' variant='accent-cool'>
          <Text>Accent Cool Big</Text>
        </Button>

        <Text>Button Groups</Text>
        <ButtonGroup className='w-full'>
          <Button>
            <Text>Button 1</Text>
          </Button>
          <Button variant='outline'>
            <Text>Button 2</Text>
          </Button>
        </ButtonGroup>

        <Text>Icon Buttons</Text>
        <ButtonGroup orientation='horizontal' gap={16}>
          <Button size='icon' variant='default' aria-label='Search'>
            <Search color='white' />
          </Button>
          <Button size='icon' variant='outline' aria-label='Next'>
            <ArrowRight color='#005EA2' />
          </Button>
        </ButtonGroup>

        <Button>
          <Search color='white' />
          <Text>Search</Text>
        </Button>

        <Button>
          <Text>Next</Text>
          <ArrowRight color='white' />
        </Button>
      </ScrollView>
    </>
  );
};

export default ButtonScreen;
