import { render, fireEvent } from '@testing-library/react-native';
import { Link } from './';

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
    const { getByText } = render(
      <Link href='#' label='Click me' visited>
        Click me
      </Link>
    );
    const linkText = getByText('Click me');
    expect(linkText.props.className).toContain('text-violet-vivid-70');
  });

  it('renders external link with icon', () => {
    const { getByText, getByTestId } = render(<Link {...defaultProps} external testID='external-link' />);

    expect(getByText('Click me')).toBeTruthy();
    expect(getByTestId('external-link').props.className).toContain('flex-row');
    expect(getByTestId('external-link').props.className).toContain('items-center');
  });

  it('handles press events correctly', () => {
    const onPress = jest.fn();
    const { getByText } = render(<Link {...defaultProps} onPress={onPress} />);
    const linkText = getByText('Click me');

    fireEvent.press(linkText);
    expect(onPress).toHaveBeenCalled();
  });

  it('renders dark background variant correctly', () => {
    const { getByText } = render(
      <Link href='#' label='Click me' variant='dark-background'>
        Click me
      </Link>
    );
    const linkText = getByText('Click me');
    expect(linkText.props.className).toContain('text-primary-light');
  });

  it('applies custom className correctly', () => {
    const { getByText } = render(<Link {...defaultProps} className='font-source-sans-pro text-base leading-[162%] underline text-primary' />);
    const linkText = getByText('Click me');

    expect(linkText.props.className).toContain('font-source-sans-pro');
    expect(linkText.props.className).toContain('text-base');
    expect(linkText.props.className).toContain('underline');
  });

  it('handles focus state correctly', () => {
    const { getByTestId } = render(
      <Link href='#' label='Click me' testID='focus-link' focus={true}>
        Click me
      </Link>
    );
    const link = getByTestId('focus-link');
    const view = link.children[0];

    expect(view.props.className).toContain('outline-none');
    expect(view.props.className).toContain('ring-4');
  });

  it('combines visited and external states correctly', () => {
    const { getByTestId } = render(
      <Link href='#' label='Click me' visited external testID='visited-external-link'>
        Click me
      </Link>
    );
    const link = getByTestId('visited-external-link');

    expect(link.props.className).toContain('text-violet-vivid-70');
    expect(link.props.className).toContain('flex-row');
  });

  it('maintains accessibility properties', () => {
    const { getByTestId } = render(<Link {...defaultProps} accessibilityLabel='Accessible link' accessibilityRole='link' testID='accessible-link' />);

    const link = getByTestId('accessible-link');
    expect(link.props.accessibilityLabel).toBe('Accessible link');
    expect(link.props.accessibilityRole).toBe('link');
  });
});
