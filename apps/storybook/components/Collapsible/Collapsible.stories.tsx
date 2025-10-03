import { Text, View } from 'react-native';
import { Button } from '../Button/Button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './Collapsible';
import { ChevronDown, ChevronsUpDown, ChevronUp } from 'lucide-react-native';
import { Icon } from '../Icon/Icon';  
import { useState } from 'react';

export default {
  title: 'components/Collapsible',
  component: Collapsible
};

export const Default = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <View className='w-[300px]'>
        <Collapsible className='flex w-[350px] flex-row flex-col gap-2'>
          <View className='flex flex-row items-center justify-between gap-4 px-4'>
            <Text className='text-foreground text-sm font-semibold'>@peduarte starred 3 repositories</Text>
            <CollapsibleTrigger asChild>
              <Button variant='ghost' size='icon' className='size-8'>
                <Icon as={ChevronsUpDown} className='text-foreground' />
                <Text className='sr-only'>Toggle</Text>
              </Button>
            </CollapsibleTrigger>
          </View>
          <View className='border-border rounded-md border px-4 py-2'>
            <Text className='text-foreground text-sm"'>@radix-ui/primitives</Text>
          </View>
          <CollapsibleContent className='gap-2'>
            <View className='border-border rounded-md border px-4 py-2'>
              <Text className='text-foreground text-sm'>@radix-ui/react</Text>
            </View>
            <View className='border-border rounded-md border px-4 py-2'>
              <Text className='text-foreground text-sm'>@stitches/core</Text>
            </View>
          </CollapsibleContent>
        </Collapsible>
      </View>
    );
  }
};

export const WithList = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <View className='w-[300px]'>
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger asChild>
            <Button variant='outline' className='w-full justify-between'>
              <Text>Show Menu Items</Text>
              {isOpen ? <ChevronUp size={16} className='text-foreground' /> : <ChevronDown size={16} className='text-foreground' />}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <View className='space-y-2 px-4 py-3'>
              <Text className='text-sm text-foreground'>• Home</Text>
              <Text className='text-sm text-foreground'>• About</Text>
              <Text className='text-sm text-foreground'>• Services</Text>
              <Text className='text-sm text-foreground'>• Contact</Text>
            </View>
          </CollapsibleContent>
        </Collapsible>
      </View>
    );
  }
};

export const WithCard = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <View className='w-[300px]'>
        <View className='rounded-lg border border-border p-4'>
          <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <View className='flex-row items-center justify-between'>
              <View>
                <Text className='text-lg font-semibold text-foreground'>Account Settings</Text>
                <Text className='text-sm text-muted-foreground'>Manage your account preferences</Text>
              </View>
              <CollapsibleTrigger asChild>
                <Button variant='ghost' className='p-0 h-9 w-9'>
                  {isOpen ? <ChevronUp size={16} className='text-foreground' /> : <ChevronDown size={16} className='text-foreground' />}
                </Button>
              </CollapsibleTrigger>
            </View>
            <CollapsibleContent>
              <View className='space-y-3 pt-4'>
                <View className='space-y-1'>
                  <Text className='text-sm font-medium text-foreground'>Email</Text>
                  <Text className='text-sm text-muted-foreground'>Updates and notifications settings</Text>
                </View>
                <View className='space-y-1'>
                  <Text className='text-sm font-medium text-foreground'>Privacy</Text>
                  <Text className='text-sm text-muted-foreground'>Control your privacy settings</Text>
                </View>
              </View>
            </CollapsibleContent>
          </Collapsible>
        </View>
      </View>
    );
  }
};

export const Animated = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <View className='w-[300px]'>
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger asChild>
            <Button variant='outline' className='w-full justify-between'>
              <Text>Animated Collapsible</Text>
              {isOpen ? <ChevronUp size={16} className='text-foreground' /> : <ChevronDown size={16} className='text-foreground' />}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className='animate-collapsible-down'>
            <View className='space-y-2 px-4 py-3'>
              <Text className='text-sm text-foreground'>This content smoothly animates when expanding and collapsing.</Text>
              <Text className='text-sm text-foreground'>The animation is handled by the animate-collapsible-down class.</Text>
            </View>
          </CollapsibleContent>
        </Collapsible>
      </View>
    );
  }
};
