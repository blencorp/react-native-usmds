import { render, fireEvent } from '@testing-library/react-native';
import { TextInput } from './index';

describe('TextInput', () => {
  it('renders correctly with placeholder', () => {
    const { getByPlaceholderText } = render(<TextInput placeholder='Enter text' />);
    expect(getByPlaceholderText('Enter text')).toBeTruthy();
  });

  it('handles text input', () => {
    const onChangeText = jest.fn();
    const { getByPlaceholderText } = render(<TextInput placeholder='Enter text' onChangeText={onChangeText} />);

    const input = getByPlaceholderText('Enter text');
    fireEvent.changeText(input, 'New text');
    expect(onChangeText).toHaveBeenCalledWith('New text');
  });

  it('handles disabled state', () => {
    const { getByPlaceholderText } = render(<TextInput placeholder='Enter text' editable={false} />);

    const input = getByPlaceholderText('Enter text');
    expect(input.props.editable).toBe(false);
    expect(input.props.className).toContain('opacity-50');
  });

  it('renders with value', () => {
    const { getByDisplayValue } = render(<TextInput value='Test text' />);
    expect(getByDisplayValue('Test text')).toBeTruthy();
  });

  it('applies custom className', () => {
    const { getByPlaceholderText } = render(<TextInput placeholder='Enter text' className='custom-class' />);
    const input = getByPlaceholderText('Enter text');
    expect(input.props.className).toContain('custom-class');
  });
});
