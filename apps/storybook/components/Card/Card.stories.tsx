import { Meta, StoryObj } from '@storybook/react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './Card';
import { View } from 'react-native';
import { Button } from '../Button/Button';
import { Text } from '../Text/Text';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered'
  },
  decorators: [
    (Story) => (
      <View className='w-full max-w-[393px] p-4 bg-background'>
        <Story />
      </View>
    )
  ]
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <Text>Card Content</Text>
      </CardContent>
    </Card>
  )
};

export const WithFooter: Story = {
  render: () => (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <Text>
          Smiley was monstrous proud of his frog, and well he might be, for fellers that had traveled and been everywheres, all said he laid over any frog that ever they see.
        </Text>
      </CardContent>
      <CardFooter>
        <Button>
          <Text>Deploy</Text>
        </Button>
      </CardFooter>
    </Card>
  )
};
