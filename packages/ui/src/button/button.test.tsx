import { render, fireEvent } from '@testing-library/react-native';
import { Button } from './';
import { Text } from '../Text';

describe('Button', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <Button>
        <Text>Click me</Text>
      </Button>
    );

    expect(getByText('Click me')).toBeTruthy();
  });

  it('handles press events', () => {
    const onPress = jest.fn();
    const { getByText } = render(
      <Button onPress={onPress}>
        <Text>Click me</Text>
      </Button>
    );

    fireEvent.press(getByText('Click me'));
    expect(onPress).toHaveBeenCalled();
  });

  it('applies variant styles correctly', () => {
    const { getByRole } = render(
      <Button variant='secondary'>
        <Text>Secondary Button</Text>
      </Button>
    );

    const button = getByRole('button');
    expect(button.props.className).toContain('bg-secondary');
  });

  it('handles disabled state', () => {
    const onPress = jest.fn();
    const { getByRole } = render(
      <Button disabled onPress={onPress}>
        <Text>Disabled Button</Text>
      </Button>
    );

    const button = getByRole('button');
    expect(button.props.className).toContain('opacity-50');

    fireEvent.press(button);
    expect(onPress).not.toHaveBeenCalled();
  });
});
