import { render, fireEvent } from '@testing-library/react-native';
import { TextArea } from './';

describe('TextArea', () => {
  it('renders correctly with label', () => {
    const { getByText, getByPlaceholderText } = render(<TextArea label='Test Label' placeholder='Enter text' />);

    expect(getByText('Test Label')).toBeTruthy();
    expect(getByPlaceholderText('Enter text')).toBeTruthy();
  });

  it('handles text input', () => {
    const onChangeText = jest.fn();
    const { getByPlaceholderText } = render(<TextArea placeholder='Enter text' onChangeText={onChangeText} />);

    const input = getByPlaceholderText('Enter text');
    fireEvent.changeText(input, 'New text');
    expect(onChangeText).toHaveBeenCalledWith('New text');
  });

  it('shows error state', () => {
    const { getByText } = render(<TextArea label='Test Label' error helperText='This is an error' />);

    expect(getByText('This is an error')).toBeTruthy();
  });

  it('handles disabled state', () => {
    const { getByPlaceholderText } = render(<TextArea placeholder='Enter text' disabled />);

    const input = getByPlaceholderText('Enter text');
    expect(input.props.editable).toBe(false);
  });

  it('shows character count when maxLength is set', () => {
    const { getByText } = render(<TextArea maxLength={100} value='Test text' />);

    expect(getByText('9/100')).toBeTruthy();
  });

  it('applies error styles to helper text', () => {
    const { getByText } = render(<TextArea error helperText='Error message' />);
    const helperText = getByText('Error message');

    expect(helperText.props.className).toContain('text-error-dark');
  });
});
