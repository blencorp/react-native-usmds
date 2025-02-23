import { render, fireEvent } from '@testing-library/react-native';
import { Toggle } from './';

describe('Toggle', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<Toggle pressed={false} onPressedChange={() => {}} />);
    expect(getByTestId('toggle')).toBeTruthy();
  });

  it('handles press events', () => {
    const onPressedChange = jest.fn();
    const { getByTestId } = render(<Toggle pressed={false} onPressedChange={onPressedChange} />);

    fireEvent.press(getByTestId('toggle'));
    expect(onPressedChange).toHaveBeenCalled();
  });

  it('renders in pressed state', () => {
    const { getByTestId } = render(<Toggle pressed={true} onPressedChange={() => {}} />);

    const toggle = getByTestId('toggle');
    expect(toggle.props.accessibilityState.checked).toBe(true);
  });

  it('handles disabled state', () => {
    const onPressedChange = jest.fn();
    const { getByTestId } = render(<Toggle pressed={false} disabled onPressedChange={onPressedChange} />);

    const toggle = getByTestId('toggle');
    expect(toggle.props.accessibilityState.disabled).toBe(true);

    fireEvent.press(toggle);
    expect(onPressedChange).not.toHaveBeenCalled();
  });

  it('has correct accessibility properties', () => {
    const { getByTestId } = render(<Toggle pressed={true} disabled onPressedChange={() => {}} />);

    const toggle = getByTestId('toggle');
    expect(toggle.props.accessibilityState).toMatchObject({
      checked: true,
      disabled: true
    });
    expect(toggle.props.accessibilityRole).toBe('switch');
  });

  it('applies correct styles based on state', () => {
    const { getByTestId } = render(<Toggle pressed={true} onPressedChange={() => {}} />);

    const container = getByTestId('toggle-container');
    expect(container.props.className).toContain('bg-primary');
  });
});
