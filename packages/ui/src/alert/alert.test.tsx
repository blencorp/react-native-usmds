import { render } from '@testing-library/react-native';
import { Alert } from './';

describe('Alert', () => {
  it('renders correctly with basic props', () => {
    const { getByTestId, getByText } = render(
      <Alert
        variant='info'
        description={{
          body: 'Test alert message'
        }}
      />
    );

    expect(getByTestId('alert')).toBeTruthy();
    expect(getByText('Test alert message')).toBeTruthy();
  });

  it('renders with title', () => {
    const { getByText } = render(
      <Alert
        variant='info'
        title='Alert Title'
        description={{
          body: 'Test alert message'
        }}
      />
    );

    expect(getByText('Alert Title')).toBeTruthy();
    expect(getByText('Test alert message')).toBeTruthy();
  });

  it('renders list style correctly', () => {
    const messages = [{ text: 'First item' }, { text: 'Second item', link: 'Click here' }];

    const { getByText, getAllByText } = render(<Alert variant='info' alertStyle='list' description={{ messages }} />);

    const bulletPoints = getAllByText('•');
    expect(bulletPoints).toHaveLength(2);
    expect(getByText(/First item/)).toBeTruthy();
    expect(getByText(/Second item/)).toBeTruthy();
    expect(getByText('Click here')).toBeTruthy();
  });

  it('applies emergency variant styles', () => {
    const { getByTestId, getByText } = render(
      <Alert
        variant='emergency'
        description={{
          body: 'Emergency message'
        }}
      />
    );

    const alert = getByTestId('alert');
    expect(alert.props.className).toContain('bg-emergency');
    expect(getByText('Emergency message')).toBeTruthy();
  });
});
