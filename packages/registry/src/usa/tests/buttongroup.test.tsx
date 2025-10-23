import { render } from "@testing-library/react-native";
import { ButtonGroup } from "../components/ui/buttongroup";
import { Button } from "../components/ui/button";
import { Text } from "../components/ui/text";

describe("ButtonGroup", () => {
  it("renders correctly with vertical orientation", () => {
    const { getByText, getByTestId } = render(
      <ButtonGroup testID="button-group">
        <Button>
          <Text>Button 1</Text>
        </Button>
        <Button>
          <Text>Button 2</Text>
        </Button>
      </ButtonGroup>,
    );

    expect(getByText("Button 1")).toBeTruthy();
    expect(getByText("Button 2")).toBeTruthy();
    expect(getByTestId("button-group").props.style).toMatchObject([
      {
        gap: 8,
        flexDirection: "column",
      },
      undefined,
    ]);
  });

  it("renders correctly with horizontal orientation", () => {
    const { getByText, getByTestId } = render(
      <ButtonGroup orientation="horizontal" testID="button-group">
        <Button>
          <Text>Button 1</Text>
        </Button>
        <Button>
          <Text>Button 2</Text>
        </Button>
      </ButtonGroup>,
    );

    expect(getByText("Button 1")).toBeTruthy();
    expect(getByText("Button 2")).toBeTruthy();
    expect(getByTestId("button-group").props.style).toMatchObject([
      {
        gap: 8,
        flexDirection: "row",
      },
      undefined,
    ]);
  });

  it("applies custom gap", () => {
    const { getByTestId } = render(
      <ButtonGroup gap={16} testID="button-group">
        <Button>
          <Text>Button 1</Text>
        </Button>
        <Button>
          <Text>Button 2</Text>
        </Button>
      </ButtonGroup>,
    );

    expect(getByTestId("button-group").props.style).toMatchObject([
      {
        gap: 16,
        flexDirection: "column",
      },
      undefined,
    ]);
  });
});
