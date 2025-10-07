import { render, fireEvent } from '@testing-library/react-native';
import { Toggle } from '../components/ui/toggle';

describe('Toggle', () => {
  it('renders correctly', () => {
    const { getByRole } = render(<Toggle pressed={false} onPressedChange={() => {}} />);
    expect(getByRole('switch')).toBeTruthy();
  });

  it('handles press events', () => {
    const onPressedChange = jest.fn();
    const { getByRole } = render(<Toggle pressed={false} onPressedChange={onPressedChange} />);

    fireEvent.press(getByRole('switch'));
    expect(onPressedChange).toHaveBeenCalled();
  });

  it('renders in pressed state', () => {
    const { getByRole } = render(<Toggle pressed={true} onPressedChange={() => {}} />);

    const toggle = getByRole('switch');
    expect(toggle.props.accessibilityState.selected).toBe(true);
  });

  it('handles disabled state', () => {
    const onPressedChange = jest.fn();
    const { getByRole } = render(<Toggle pressed={false} disabled onPressedChange={onPressedChange} />);

    const toggle = getByRole('switch');
    expect(toggle.props.className).toContain('opacity-50');
  });

  it('applies correct styles based on pressed state', () => {
    const { getByRole } = render(<Toggle pressed={true} onPressedChange={() => {}} />);

    const toggle = getByRole('switch');
    expect(toggle.props.className).toContain('bg-accent');
  });

  it('applies custom className', () => {
    const { getByRole } = render(<Toggle pressed={false} className="custom-class" onPressedChange={() => {}} />);

    const toggle = getByRole('switch');
    expect(toggle.props.className).toContain('custom-class');
  });
});
