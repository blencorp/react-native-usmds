import { View } from "react-native";
import { Container } from "@/components/container";
import { Text } from "@/components/ui/text";

export default function HomeScreen() {
  return (
    <Container>
      <View className="flex-1 items-center justify-center px-6">
        <Text className="font-semibold text-2xl text-foreground">
          USMDS (Home)
        </Text>
      </View>
    </Container>
  );
}
