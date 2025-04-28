import { Text, View } from 'react-native';
import { Avatar, AvatarFallback, AvatarImage } from './Avatar';

const GITHUB_AVATAR_URI = 'https://github.com/mrzachnugent.png';

export default {
  title: 'components/Avatar',
  component: Avatar,
};

export const Default = {
  render: () => (
    <Avatar alt="User Avatar">
      <AvatarImage source={{ uri: GITHUB_AVATAR_URI }} />
      <AvatarFallback>
        <Text>ZN</Text>
      </AvatarFallback>
    </Avatar>
  ),
};

export const WithFallback = {
  render: () => (
    <Avatar alt="John Doe">
      <AvatarImage source={{ uri: 'invalid-image-url' }} />
      <AvatarFallback>
        <Text>JD</Text>
      </AvatarFallback>
    </Avatar>
  ),
};

export const CustomSize = {
  render: () => (
    <Avatar alt="Custom Size Avatar" className="h-16 w-16">
      <AvatarImage source={{ uri: GITHUB_AVATAR_URI }} />
      <AvatarFallback>
        <Text className="text-lg">CS</Text>
      </AvatarFallback>
    </Avatar>
  ),
};

export const Multiple = {
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
      <Avatar alt="User 3" className="h-12 w-12">
        <AvatarImage source={{ uri: GITHUB_AVATAR_URI }} />
        <AvatarFallback>
          <Text>U3</Text>
        </AvatarFallback>
      </Avatar>
    </View>
  ),
};

export const CustomBackground = {
  render: () => (
    <Avatar alt="Custom Background">
      <AvatarImage source={{ uri: 'invalid-image-url' }} />
      <AvatarFallback className="bg-primary">
        <Text className="text-primary-foreground">CB</Text>
      </AvatarFallback>
    </Avatar>
  ),
}; 