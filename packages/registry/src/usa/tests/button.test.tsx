import { render, fireEvent } from "@testing-library/react-native";
import { Button } from "../components/ui/button";

describe("Button", () => {
  it("renders correctly", () => {
    const { getByRole } = render(<Button>Test Button</Button>);
    expect(getByRole("button")).toBeTruthy();
  });

  it("handles press events", () => {
    const onPress = jest.fn();
    const { getByRole } = render(
      <Button onPress={onPress}>Test Button</Button>,
    );

    fireEvent.press(getByRole("button"));
    expect(onPress).toHaveBeenCalled();
  });

  it("renders with different variants", () => {
    const { getByRole, rerender } = render(
      <Button variant="default">Default</Button>,
    );
    expect(getByRole("button").props.className).toContain("bg-primary");

    rerender(<Button variant="destructive">Destructive</Button>);
    expect(getByRole("button").props.className).toContain("bg-destructive");

    rerender(<Button variant="outline">Outline</Button>);
    expect(getByRole("button").props.className).toContain("border");

    rerender(<Button variant="secondary">Secondary</Button>);
    expect(getByRole("button").props.className).toContain("bg-secondary");

    rerender(<Button variant="ghost">Ghost</Button>);
    expect(getByRole("button").props.className).toContain("active:bg-accent");
  });

  it("handles disabled state", () => {
    const onPress = jest.fn();
    const { getByRole } = render(
      <Button disabled onPress={onPress}>
        Disabled Button
      </Button>,
    );

    const button = getByRole("button");
    expect(button.props.className).toContain("opacity-50");

    fireEvent.press(button);
    expect(onPress).not.toHaveBeenCalled();
  });

  it("renders with different sizes", () => {
    const { getByRole, rerender } = render(
      <Button size="default">Default</Button>,
    );
    expect(getByRole("button").props.className).toContain("h-10");

    rerender(<Button size="sm">Small</Button>);
    expect(getByRole("button").props.className).toContain("h-9");

    rerender(<Button size="lg">Large</Button>);
    expect(getByRole("button").props.className).toContain("h-11");

    rerender(<Button size="icon">Icon</Button>);
    expect(getByRole("button").props.className).toContain("w-10");
  });

  it("applies custom className", () => {
    const { getByRole } = render(
      <Button className="custom-class">Custom</Button>,
    );
    expect(getByRole("button").props.className).toContain("custom-class");
  });
});
