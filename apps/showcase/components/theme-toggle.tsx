import { Button } from "@registry/usa/components/ui/button";
import { Icon } from "@registry/usa/components/ui/icon";
import { useColorScheme } from "nativewind";
import { Moon, SunMedium } from "lucide-react-native";

const ICON_MAP = {
  light: Moon,
  dark: SunMedium,
} as const;

export function ThemeToggle() {
  const { colorScheme = "light", setColorScheme } = useColorScheme();

  function toggleColorScheme() {
    setColorScheme(colorScheme === "dark" ? "light" : "dark");
  }

  const nextThemeLabel =
    colorScheme === "dark" ? "Switch to light theme" : "Switch to dark theme";
  const CurrentIcon = ICON_MAP[colorScheme];

  return (
    <Button
      size="icon"
      className="bg-transparent active:bg-transparent"
      accessibilityLabel={nextThemeLabel}
      onPress={toggleColorScheme}
    >
      <Icon as={CurrentIcon} className="size-6" />
    </Button>
  );
}
