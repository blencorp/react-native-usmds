import { Text, View } from "react-native";
import { Container } from "@/components/container";

export default function ExploreScreen() {
  return (
    <Container>
      <View className="flex-1 items-center justify-center px-6">
        <Text className="font-semibold text-2xl text-foreground">
          Explore Opportunities
        </Text>
      </View>
    </Container>
  );
}
