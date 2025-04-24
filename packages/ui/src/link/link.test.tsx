import { render, fireEvent } from '@testing-library/react-native';
import { Link } from './';
import { ReactTestInstance } from 'react-test-renderer';

describe('Link', () => {
  const defaultProps = {
    href: 'https://example.com',
    label: 'Click me'
  };

  it('renders correctly with default props', () => {
    const { getByText } = render(<Link {...defaultProps} />);
    const linkText = getByText('Click me');

    expect(linkText).toBeTruthy();
    expect(linkText.props.className).toContain('font-source-sans-pro');
    expect(linkText.props.className).toContain('text-primary');
    expect(linkText.props.className).toContain('underline');
  });

  it('renders visited state correctly', () => {
    const { getByText } = render(<Link {...defaultProps} visited />);
    const linkText = getByText('Click me');
    expect(linkText.props.className).toContain('text-violet-vivid-70');
  });

  it('renders external link with icon', () => {
    const { getByText, getByTestId } = render(<Link {...defaultProps} external testID='external-link' />);
    const link = getByTestId('external-link');
    const linkView = link.children[0] as ReactTestInstance;

    expect(getByText('Click me')).toBeTruthy();
    expect(linkView.props.className).toContain('flex-row');
    expect(linkView.props.className).toContain('items-center');
  });

  it('handles press events correctly', () => {
    const onPress = jest.fn();
    const { getByTestId } = render(<Link {...defaultProps} onPress={onPress} testID='pressable-link' />);
    const link = getByTestId('pressable-link');

    fireEvent.press(link);
    expect(onPress).toHaveBeenCalled();
  });

  it('renders dark background variant correctly', () => {
    const { getByText } = render(<Link {...defaultProps} variant='dark-background' />);
    const linkText = getByText('Click me');
    expect(linkText.props.className).toContain('text-primary-light');
  });

  it('applies custom className correctly', () => {
    const { getByText } = render(<Link {...defaultProps} className='custom-class' />);
    const linkText = getByText('Click me');

    expect(linkText.props.className).toContain('font-source-sans-pro');
    expect(linkText.props.className).toContain('text-base');
    expect(linkText.props.className).toContain('underline');
  });

  it('handles focus state correctly', () => {
    const { getByTestId } = render(<Link {...defaultProps} testID='focus-link' focus />);
    const link = getByTestId('focus-link');
    const linkView = link.children[0] as ReactTestInstance;

    expect(linkView.props.className).toContain('outline-none');
    expect(linkView.props.className).toContain('ring-4');
  });

  it('combines visited and external states correctly', () => {
    const { getByTestId, getByText } = render(<Link {...defaultProps} visited external testID='visited-external-link' />);
    const link = getByTestId('visited-external-link');
    const linkView = link.children[0] as ReactTestInstance;
    const linkText = getByText('Click me');

    expect(linkText.props.className).toContain('text-violet-vivid-70');
    expect(linkView.props.className).toContain('flex-row');
  });

  it('maintains accessibility properties', () => {
    const { getByTestId } = render(
      <Link {...defaultProps} accessibilityLabel='Accessible link' accessibilityRole='link' testID='accessible-link' />
    );

    const link = getByTestId('accessible-link');
    expect(link.props.accessibilityLabel).toBe('Accessible link');
    expect(link.props.accessibilityRole).toBe('link');
  });

  it('handles press state changes correctly', () => {
    const { getByTestId } = render(<Link {...defaultProps} testID='press-state-link' />);
    const link = getByTestId('press-state-link');
    const linkView = link.children[0] as ReactTestInstance;

    fireEvent(link, 'pressIn');
    expect(linkView.props.className).toContain('ring-4');

    fireEvent(link, 'pressOut');
    expect(linkView.props.className).not.toContain('ring-4');
  });
});
