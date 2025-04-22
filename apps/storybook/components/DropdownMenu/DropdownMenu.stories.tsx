import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { View, Pressable } from 'react-native';
import { Text } from '../Text/Text';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuGroup,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from './DropdownMenu';
import { Button } from '../Button/Button';
import Animated, { FadeIn } from 'react-native-reanimated';

import { useSafeAreaInsets } from 'react-native-safe-area-context';


const meta: Meta<typeof DropdownMenu> = {
  title: 'Components/DropdownMenu',
  component: DropdownMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

export const Basic: Story = {
  render: () => {
    const triggerRef = React.useRef<React.ElementRef<typeof DropdownMenuTrigger>>(null);
    const insets = useSafeAreaInsets();
    const contentInsets = {
        top: insets.top,
        bottom: insets.bottom,
        left: 12,
        right: 12,
      };
    
  
    return (
        <View className='flex-1 justify-center items-center p-6 gap-12'>
          <Pressable
            className='absolute top-0 right-0 w-16 h-16 active:bg-primary/5'
            onPress={() => {
              // open menu programmatically
              triggerRef.current?.open();
            }}
          />
          <DropdownMenu>
            <DropdownMenuTrigger ref={triggerRef} asChild>
              <Button variant='outline'>
                <Text>Open</Text>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent insets={contentInsets} portalHost="dropdown" sideOffset={-30} className="w-72">
              <DropdownMenuLabel><Text>My Account</Text></DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Text>Team</Text>
                </DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <Text>Invite users</Text>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <Animated.View entering={FadeIn.duration(200)}>
                      <DropdownMenuItem>
                        <Text>Email</Text>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Text>Message</Text>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Text>More...</Text>
                      </DropdownMenuItem>
                    </Animated.View>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
                <DropdownMenuItem>
                  <Text>New Team</Text>
                  <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Text>GitHub</Text>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Text>Support</Text>
              </DropdownMenuItem>
              <DropdownMenuItem disabled>
                <Text>API</Text>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Text>Log out</Text>
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </View>
      );
  },
};

export const WithSubMenu: Story = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const insets = useSafeAreaInsets();
    const contentInsets = {
      top: insets.top,
      bottom: insets.bottom,
      left: 5,
      right: 5,
    };
    
    return (
      <View className='flex-1 justify-center items-center p-6'>
        <DropdownMenu onOpenChange={setIsOpen}>
          <DropdownMenuTrigger asChild>
            <Button variant='outline'>
              <Text>Edit</Text>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent portalHost="dropdown" insets={contentInsets} className='w-64 native:w-72'>
            <DropdownMenuItem>
              <Text>Cut</Text>
              <DropdownMenuShortcut>⌘X</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Text>Copy</Text>
              <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Text>Paste</Text>
              <DropdownMenuShortcut>⌘V</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <Text>More Tools</Text>
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuItem>
                  <Text>Save Page As...</Text>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Text>Create Shortcut...</Text>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Text>Name Window...</Text>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Text>Developer Tools</Text>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          </DropdownMenuContent>
        </DropdownMenu>
      </View>
    );
  },
};

export const WithRadioItems: Story = {
  render: () => {
    const [position, setPosition] = React.useState("bottom");
    const insets = useSafeAreaInsets();
    const contentInsets = {
      top: insets.top,
      bottom: insets.bottom,
      left: 5,
      right: 5,
    };
    
    return (
      <View className='flex-1 justify-center items-center p-6'>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='outline'>
              <Text>Position: {position}</Text>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent portalHost="dropdown" insets={contentInsets} className='w-64 native:w-72'>
            <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
              <DropdownMenuRadioItem value="top">
                <Text>Top</Text>
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="bottom">
                <Text>Bottom</Text>
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="right">
                <Text>Right</Text>
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="left">
                <Text>Left</Text>
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </View>
    );
  },
};

export const WithCheckboxItems: Story = {
  render: () => {
    const [showStatusBar, setShowStatusBar] = React.useState(true);
    const [showActivityBar, setShowActivityBar] = React.useState(false);
    const [showPanel, setShowPanel] = React.useState(false);
    const insets = useSafeAreaInsets();
    const contentInsets = {
      top: insets.top,
      bottom: insets.bottom,
      left: 5,
      right: 5,
    };
    
    return (
      <View className='flex-1 justify-center items-center p-6'>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='outline'>
              <Text>View Options</Text>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent portalHost="dropdown" insets={contentInsets} className='w-64 native:w-72'>
            <DropdownMenuCheckboxItem 
              checked={showStatusBar}
              onCheckedChange={setShowStatusBar}
            >
              <Text>Status Bar</Text>
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem 
              checked={showActivityBar}
              onCheckedChange={setShowActivityBar}
            >
              <Text>Activity Bar</Text>
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem 
              checked={showPanel}
              onCheckedChange={setShowPanel}
            >
              <Text>Panel</Text>
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </View>
    );
  },
};
