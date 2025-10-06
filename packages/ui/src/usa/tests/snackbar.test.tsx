import { render, fireEvent } from '@testing-library/react-native';
import { Snackbar } from '../components/ui/snackbar';

describe('Snackbar', () => {
  it('renders correctly with message', () => {
    const { getByText } = render(<Snackbar message='Test message' isVisible={true} />);
    expect(getByText('Test message')).toBeTruthy();
  });

  it('handles action button press', () => {
    const onAction = jest.fn();
    const { getByText } = render(<Snackbar message='Test message' actionLabel='Action' onAction={onAction} isVisible={true} />);

    fireEvent.press(getByText('Action'));
    expect(onAction).toHaveBeenCalled();
  });

  it('handles dismiss button press', () => {
    const onDismiss = jest.fn();
    const { getByText } = render(<Snackbar message='Test message' onDismiss={onDismiss} isVisible={true} />);

    fireEvent.press(getByText('Dismiss'));
    expect(onDismiss).toHaveBeenCalled();
  });

  it('renders two-line layout correctly', () => {
    const { getByTestId } = render(<Snackbar message='Test message' layout='two-lines' isVisible={true} />);

    const container = getByTestId('snackbar-container');
    expect(container.props.className).toContain('min-h-[70px]');
  });

  it('is not visible when isVisible is false', () => {
    const { queryByTestId } = render(<Snackbar message='Test message' isVisible={false} />);
    expect(queryByTestId('snackbar-container')).toBeNull();
  });
});
