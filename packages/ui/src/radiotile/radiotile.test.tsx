import { render, fireEvent } from '@testing-library/react-native';
import { RadioTileGroup, RadioTile } from './';

describe('RadioTile', () => {
  it('renders correctly with basic props', () => {
    const { getByText } = render(
      <RadioTileGroup value='option1' onValueChange={() => {}}>
        <RadioTile value='option1' label='Option 1' />
        <RadioTile value='option2' label='Option 2' />
      </RadioTileGroup>
    );

    expect(getByText('Option 1')).toBeTruthy();
    expect(getByText('Option 2')).toBeTruthy();
  });

  it('renders with description', () => {
    const { getByText } = render(
      <RadioTileGroup value='option1' onValueChange={() => {}}>
        <RadioTile value='option1' label='Option 1' description='Description 1' />
      </RadioTileGroup>
    );

    expect(getByText('Description 1')).toBeTruthy();
  });

  it('handles value changes', () => {
    const onValueChange = jest.fn();
    const { getByText } = render(
      <RadioTileGroup value='option1' onValueChange={onValueChange}>
        <RadioTile value='option1' label='Option 1' />
        <RadioTile value='option2' label='Option 2' />
      </RadioTileGroup>
    );

    fireEvent.press(getByText('Option 2'));
    expect(onValueChange).toHaveBeenCalledWith('option2');
  });

  it('respects disabled state', () => {
    const onValueChange = jest.fn();
    const { getByText } = render(
      <RadioTileGroup value='option1' onValueChange={onValueChange}>
        <RadioTile value='option1' label='Option 1' />
        <RadioTile value='option2' label='Option 2' disabled />
      </RadioTileGroup>
    );

    fireEvent.press(getByText('Option 2'));
    expect(onValueChange).not.toHaveBeenCalled();
  });
});
