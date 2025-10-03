import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';
import { View, ScrollView } from 'react-native';
import { Text } from '../Text/Text';
import {
  Home,
  User,
  Settings,
  Mail,
  Bell,
  Calendar,
  Search,
  Heart,
  Star,
  Download,
  Upload,
  Trash2,
  Edit,
  Check,
  X,
  AlertCircle,
  Info,
  ChevronRight,
  ChevronLeft,
  ChevronUp,
  ChevronDown,
} from 'lucide-react-native';

const meta = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered'
  },
  decorators: [
    (Story) => (
      <View className='w-full max-w-[393px] p-4 bg-background'>
        <Story />
      </View>
    )
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  render: () => <Icon as={Home} />
};

export const Sizes: Story = {
  render: () => (
    <View className="flex-row gap-4 items-center">
      <Icon as={Home} size={12} />
      <Icon as={Home} size={16} />
      <Icon as={Home} size={24} />
      <Icon as={Home} size={32} />
      <Icon as={Home} size={48} />
    </View>
  )
};

export const Colors: Story = {
  render: () => (
    <View className="flex-row gap-4 items-center">
      <Icon as={Heart} className="text-foreground" />
      <Icon as={Heart} className="text-primary" />
      <Icon as={Heart} className="text-secondary" />
      <Icon as={Heart} className="text-destructive" />
      <Icon as={Heart} className="text-muted-foreground" />
    </View>
  )
};

export const CommonIcons: Story = {
  render: () => (
    <ScrollView>
      <View className="flex-row flex-wrap gap-4">
        {[
          { icon: Home, name: 'Home' },
          { icon: User, name: 'User' },
          { icon: Settings, name: 'Settings' },
          { icon: Mail, name: 'Mail' },
          { icon: Bell, name: 'Bell' },
          { icon: Calendar, name: 'Calendar' },
          { icon: Search, name: 'Search' },
          { icon: Heart, name: 'Heart' },
          { icon: Star, name: 'Star' },
          { icon: Download, name: 'Download' },
          { icon: Upload, name: 'Upload' },
          { icon: Trash2, name: 'Trash' },
          { icon: Edit, name: 'Edit' },
          { icon: Check, name: 'Check' },
          { icon: X, name: 'X' },
          { icon: AlertCircle, name: 'Alert' },
          { icon: Info, name: 'Info' },
          { icon: ChevronRight, name: 'ChevronRight' },
          { icon: ChevronLeft, name: 'ChevronLeft' },
          { icon: ChevronUp, name: 'ChevronUp' },
          { icon: ChevronDown, name: 'ChevronDown' },
        ].map(({ icon, name }) => (
          <View key={name} className="items-center w-20">
            <Icon as={icon} className="text-foreground mb-2" />
            <Text className="text-xs text-center text-muted-foreground">{name}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  )
};
