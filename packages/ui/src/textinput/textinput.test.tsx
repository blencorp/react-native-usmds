import { render, fireEvent } from '@testing-library/react-native';
import { TextInput } from './index';

describe('TextInput', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<TextInput placeholder='Enter text' />);
    expect(getByTestId('textbox')).toBeTruthy();
  });

  it('handles focus state', () => {
    const { getByTestId } = render(<TextInput placeholder='Enter text' />);
    const input = getByTestId('textbox');

    fireEvent(input, 'focus');
    expect(input.props.className).toContain('border-ring');

    fireEvent(input, 'blur');
    expect(input.props.className).not.toContain('border-ring');
  });

  it('shows error state', () => {
    const { getByTestId, getByText } = render(<TextInput state='error' errorMessage='Error message' placeholder='Enter text' />);

    const input = getByTestId('textbox');
    expect(input.props.className).toContain('border-destructive');
    expect(getByText('Error message')).toBeTruthy();
  });

  it('handles disabled state', () => {
    const { getByTestId } = render(<TextInput state='disabled' placeholder='Enter text' />);
    const input = getByTestId('textbox');
    expect(input.props.className).toContain('bg-muted');
  });
});
