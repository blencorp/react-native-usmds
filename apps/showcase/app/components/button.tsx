import { ScrollView, View } from 'react-native';
import { Button } from '../../../storybook/components/Button/Button';
import { Text } from '../../../storybook/components/Text/Text';

export default function ButtonScreen() {
  return (
    <ScrollView className="flex-1 bg-background">
      <View className="flex-1 justify-center items-center gap-5 p-4">
        <Button>
          <Text>Default</Text>
        </Button>

        <Button variant="destructive">
          <Text>Destructive</Text>
        </Button>

        <Button variant="destructive" disabled>
          <Text>Destructive disabled</Text>
        </Button>

        <Button variant="secondary">
          <Text>Secondary</Text>
        </Button>

        <Button variant="outline" size="lg">
          <Text>Outline lg</Text>
        </Button>

        <Button variant="outline" size="sm">
          <Text>Outline sm</Text>
        </Button>

        <Button variant="ghost">
          <Text>Ghost</Text>
        </Button>

        <Button variant="link" size="sm">
          <Text>Link sm</Text>
        </Button>
      </View>
    </ScrollView>
  );
}