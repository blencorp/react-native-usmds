import { Text, View } from 'react-native';
import { Avatar, AvatarFallback, AvatarImage } from './Avatar';
import type { Meta, StoryObj } from '@storybook/react';

const GITHUB_AVATAR_URI = 'https://github.com/mrzachnugent.png';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  decorators: [
    (Story) => (
      <View className='w-full max-w-[393px] p-4 bg-background'>
        <Story />
      </View>
    )
  ]
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  render: () => (
    <Avatar alt="User Avatar">
      <AvatarImage source={{ uri: GITHUB_AVATAR_URI }} />
      <AvatarFallback>
        <Text>ZN</Text>
      </AvatarFallback>
    </Avatar>
  ),
};

export const WithFallback: Story = {
  render: () => (
    <Avatar alt="John Doe">
      <AvatarImage source={{ uri: 'invalid-image-url' }} />
      <AvatarFallback>
        <Text>JD</Text>
      </AvatarFallback>
    </Avatar>
  ),
};

export const CustomSize: Story = {
  render: () => (
    <Avatar alt="Custom Size Avatar" className="size-16">
      <AvatarImage source={{ uri: GITHUB_AVATAR_URI }} />
      <AvatarFallback>
        <Text className="text-lg">CS</Text>
      </AvatarFallback>
    </Avatar>
  ),
};

export const Multiple: Story = {
  render: () => (
    <View className="flex-row gap-4">
      <Avatar alt="User 1">
        <AvatarImage source={{ uri: GITHUB_AVATAR_URI }} />
        <AvatarFallback>
          <Text>U1</Text>
        </AvatarFallback>
      </Avatar>
      <Avatar alt="User 2">
        <AvatarImage source={{ uri: 'invalid-image-url' }} />
        <AvatarFallback>
          <Text>U2</Text>
        </AvatarFallback>
      </Avatar>
      <Avatar alt="User 3" className="size-12">
        <AvatarImage source={{ uri: GITHUB_AVATAR_URI }} />
        <AvatarFallback>
          <Text>U3</Text>
        </AvatarFallback>
      </Avatar>
    </View>
  ),
};

export const CustomBackground: Story = {
  render: () => (
    <Avatar alt="Custom Background">
      <AvatarImage source={{ uri: 'invalid-image-url' }} />
      <AvatarFallback className="bg-primary">
        <Text className="text-primary-foreground">CB</Text>
      </AvatarFallback>
    </Avatar>
  ),
};
