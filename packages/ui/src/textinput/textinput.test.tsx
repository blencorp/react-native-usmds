import { render, fireEvent } from '@testing-library/react-native';
import { TextInput } from './';

describe('TextInput', () => {
  it('renders correctly with label', () => {
    const { getByText, getByTestId } = render(<TextInput label='Test Input' placeholder='Enter text' />);

    expect(getByText('Test Input')).toBeTruthy();
    expect(getByTestId('textbox')).toBeTruthy();
  });

  it('handles text changes', () => {
    const onChangeText = jest.fn();
    const { getByTestId } = render(<TextInput label='Input' placeholder='Enter text' onChangeText={onChangeText} />);

    fireEvent.changeText(getByTestId('textbox'), 'test');
    expect(onChangeText).toHaveBeenCalledWith('test');
  });

  it('shows error state', () => {
    const { getByTestId, getByText } = render(<TextInput label='Test Input' state='error' errorMessage='Error message' />);

    const input = getByTestId('textbox');
    expect(input.props.className).toContain('border-error-dark');
    expect(getByText('Error message')).toBeTruthy();
  });

  it('respects disabled state', () => {
    const { getByTestId } = render(<TextInput label='Input' placeholder='Enter text' state='disabled' />);

    const input = getByTestId('textbox');
    expect(input.props.className).toContain('opacity-50');
    expect(input.props.editable).toBe(false);
  });
});
