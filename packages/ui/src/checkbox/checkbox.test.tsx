import { render, fireEvent } from '@testing-library/react-native';
import { Checkbox } from './';

describe('Checkbox', () => {
  it('renders correctly with label', () => {
    const { getByText } = render(<Checkbox label='Test Checkbox' checked={false} onCheckedChange={() => {}} />);
    expect(getByText('Test Checkbox')).toBeTruthy();
  });

  it('handles check state changes', () => {
    const onCheckedChange = jest.fn();
    const { getByText } = render(<Checkbox label='Test Checkbox' checked={false} onCheckedChange={onCheckedChange} />);

    fireEvent.press(getByText('Test Checkbox'));
    expect(onCheckedChange).toHaveBeenCalledWith(true);
  });

  it('respects disabled state', () => {
    const onCheckedChange = jest.fn();
    const { getByText } = render(<Checkbox label='Test Checkbox' checked={false} disabled onCheckedChange={onCheckedChange} />);

    fireEvent.press(getByText('Test Checkbox'));
    expect(onCheckedChange).not.toHaveBeenCalled();
  });

  it('shows correct checked visual state', () => {
    const { getByTestId } = render(<Checkbox label='Test Checkbox' checked={true} onCheckedChange={() => {}} testID='checkbox' />);

    const checkbox = getByTestId('checkbox');
    expect(checkbox.props.accessibilityState.checked).toBe(true);
  });
});
