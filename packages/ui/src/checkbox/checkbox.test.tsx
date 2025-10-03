import { render, fireEvent } from '@testing-library/react-native';
import { Checkbox } from './';

describe('Checkbox', () => {
  it('renders correctly', () => {
    const { getByRole } = render(<Checkbox checked={false} onCheckedChange={() => {}} />);
    expect(getByRole('checkbox')).toBeTruthy();
  });

  it('handles check state changes', () => {
    const onCheckedChange = jest.fn();
    const { getByRole } = render(<Checkbox checked={false} onCheckedChange={onCheckedChange} />);

    fireEvent.press(getByRole('checkbox'));
    expect(onCheckedChange).toHaveBeenCalledWith(true);
  });

  it('respects disabled state', () => {
    const onCheckedChange = jest.fn();
    const { getByRole } = render(<Checkbox checked={false} disabled onCheckedChange={onCheckedChange} />);

    const checkbox = getByRole('checkbox');
    expect(checkbox.props.accessibilityState.disabled).toBe(true);
  });

  it('shows correct checked visual state', () => {
    const { getByRole } = render(<Checkbox checked={true} onCheckedChange={() => {}} />);

    const checkbox = getByRole('checkbox');
    expect(checkbox.props.accessibilityState.checked).toBe(true);
  });

  it('applies custom className', () => {
    const { getByRole } = render(<Checkbox className='custom-class' checked={false} onCheckedChange={() => {}} />);
    const checkbox = getByRole('checkbox');
    expect(checkbox.props.className).toContain('custom-class');
  });
});
