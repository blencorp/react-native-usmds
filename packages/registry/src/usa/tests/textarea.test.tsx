import { render, fireEvent } from "@testing-library/react-native";
import { Textarea } from "../components/ui/textarea";

describe("Textarea", () => {
  it("renders correctly with placeholder", () => {
    const { getByPlaceholderText } = render(
      <Textarea placeholder="Enter text" />,
    );
    expect(getByPlaceholderText("Enter text")).toBeTruthy();
  });

  it("handles text input", () => {
    const onChangeText = jest.fn();
    const { getByPlaceholderText } = render(
      <Textarea placeholder="Enter text" onChangeText={onChangeText} />,
    );

    const input = getByPlaceholderText("Enter text");
    fireEvent.changeText(input, "New text");
    expect(onChangeText).toHaveBeenCalledWith("New text");
  });

  it("handles disabled state", () => {
    const { getByPlaceholderText } = render(
      <Textarea placeholder="Enter text" editable={false} />,
    );

    const input = getByPlaceholderText("Enter text");
    expect(input.props.editable).toBe(false);
  });

  it("renders with value", () => {
    const { getByDisplayValue } = render(<Textarea value="Test text" />);
    expect(getByDisplayValue("Test text")).toBeTruthy();
  });

  it("applies custom className", () => {
    const { getByPlaceholderText } = render(
      <Textarea placeholder="Enter text" className="custom-class" />,
    );
    const textarea = getByPlaceholderText("Enter text");

    expect(textarea.props.className).toContain("custom-class");
  });
});
