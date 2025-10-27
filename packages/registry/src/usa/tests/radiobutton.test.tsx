import { render, fireEvent } from "@testing-library/react-native";
import { RadioGroup, RadioButton } from "../components/ui/radiobutton";

describe("RadioButton", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <RadioGroup value="option1" onValueChange={() => {}}>
        <RadioButton value="option1" label="Option 1" />
        <RadioButton value="option2" label="Option 2" />
      </RadioGroup>,
    );

    expect(getByText("Option 1")).toBeTruthy();
    expect(getByText("Option 2")).toBeTruthy();
  });

  it("handles value changes", () => {
    const onValueChange = jest.fn();
    const { getByTestId } = render(
      <RadioGroup value="option1" onValueChange={onValueChange}>
        <RadioButton value="option1" label="Option 1" />
        <RadioButton value="option2" label="Option 2" />
      </RadioGroup>,
    );

    fireEvent.press(getByTestId("radio-option2"));
    expect(onValueChange).toHaveBeenCalledWith("option2");
  });

  it("respects disabled state", () => {
    const onValueChange = jest.fn();
    const { getByTestId } = render(
      <RadioGroup value="option1" onValueChange={onValueChange}>
        <RadioButton value="option1" label="Option 1" />
        <RadioButton value="option2" label="Option 2" disabled />
      </RadioGroup>,
    );

    fireEvent.press(getByTestId("radio-option2"));
    expect(onValueChange).not.toHaveBeenCalled();
  });
});
