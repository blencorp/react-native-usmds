import { render } from '@testing-library/react-native';
import { Card } from './';

describe('Card', () => {
  const defaultProps = {
    title: 'Test Card',
    description: 'Test description',
    buttonText: 'Click me'
  };

  it('renders correctly with basic props', () => {
    const { getByText } = render(<Card {...defaultProps} testID='card' />);

    expect(getByText('Test Card')).toBeTruthy();
    expect(getByText('Test description')).toBeTruthy();
    expect(getByText('Click me')).toBeTruthy();
  });

  it('renders media-first variant with image', () => {
    const { getByTestId } = render(<Card {...defaultProps} variant='media-first' showMedia mediaUrl='test.jpg' testID='card-media' />);

    const card = getByTestId('card-media');
    expect(card).toBeTruthy();
  });

  it('renders inset variant with image', () => {
    const { getByTestId } = render(<Card {...defaultProps} variant='inset' showMedia mediaUrl='test.jpg' testID='card-inset' />);

    const card = getByTestId('card-inset');
    expect(card).toBeTruthy();
  });

  it('renders with custom className', () => {
    const { getByTestId } = render(<Card {...defaultProps} testID='custom-card' className='custom-class' />);

    const card = getByTestId('custom-card');
    expect(card.props.className).toContain('custom-class');
  });
});
