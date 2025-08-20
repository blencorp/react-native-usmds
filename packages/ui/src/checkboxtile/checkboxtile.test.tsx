// Mock react-native-svg so Jest never parses its source (which pulls Flow/RN files)
jest.mock("react-native-svg", () => {
  const React = require("react");
  const Svg = (props: any) => React.createElement("svg", props, props.children);
  const Path = (props: any) => React.createElement("path", props);
  // Add more tags only if your component uses them:
  const Circle = (props: any) => React.createElement("circle", props);
  const Rect = (props: any) => React.createElement("rect", props);
  return { __esModule: true, default: Svg, Path, Circle, Rect };
});

import { render, fireEvent } from "@testing-library/react-native";
import { CheckboxTile } from "./";

describe("CheckboxTile", () => {
  it("renders correctly with label", () => {
    const { getByText } = render(
      <CheckboxTile
        label="Test Tile"
        checked={false}
        onCheckedChange={() => {}}
      />
    );
    expect(getByText("Test Tile")).toBeTruthy();
  });

  it("renders with description", () => {
    const { getByText } = render(
      <CheckboxTile
        label="Test Tile"
        description="Test description"
        checked={false}
        onCheckedChange={() => {}}
      />
    );

    expect(getByText("Test Tile")).toBeTruthy();
    expect(getByText("Test description")).toBeTruthy();
  });

  it("handles check state changes", () => {
    const onCheckedChange = jest.fn();
    const { getByText } = render(
      <CheckboxTile
        label="Test Tile"
        checked={false}
        onCheckedChange={onCheckedChange}
      />
    );

    fireEvent.press(getByText("Test Tile"));
    expect(onCheckedChange).toHaveBeenCalledWith(true);
  });

  it("applies correct styles when checked", () => {
    const { getByTestId } = render(
      <CheckboxTile
        label="Test Tile"
        checked={true}
        onCheckedChange={() => {}}
        testID="checkbox-tile"
      />
    );

    const tile = getByTestId("checkbox-tile");
    expect(tile.props.accessibilityState.checked).toBe(true);
  });
});
