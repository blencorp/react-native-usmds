import { render, fireEvent } from '@testing-library/react-native';
import { Pagination } from './';

describe('Pagination', () => {
  const defaultProps = {
    currentPage: 2,
    totalPages: 5,
    totalItems: 50,
    onPageChange: jest.fn()
  };

  it('renders correctly', () => {
    const { getByText } = render(<Pagination {...defaultProps} />);

    expect(getByText('2 to 5 of 50')).toBeTruthy();
  });

  it('handles previous page navigation', () => {
    const onPageChange = jest.fn();
    const { getByTestId } = render(<Pagination {...defaultProps} onPageChange={onPageChange} />);

    fireEvent.press(getByTestId('previous-button'));
    expect(onPageChange).toHaveBeenCalledWith(1);
  });

  it('handles next page navigation', () => {
    const onPageChange = jest.fn();
    const { getByTestId } = render(<Pagination {...defaultProps} onPageChange={onPageChange} />);

    fireEvent.press(getByTestId('next-button'));
    expect(onPageChange).toHaveBeenCalledWith(3);
  });

  it('disables previous button on first page', () => {
    const { getByTestId } = render(<Pagination {...defaultProps} currentPage={1} />);

    const prevButton = getByTestId('previous-button');
    expect(prevButton.props.accessibilityState.disabled).toBe(true);
  });

  it('disables next button on last page', () => {
    const { getByTestId } = render(<Pagination {...defaultProps} currentPage={5} />);

    const nextButton = getByTestId('next-button');
    expect(nextButton.props.accessibilityState.disabled).toBe(true);
  });

  it('has correct accessibility labels', () => {
    const { getByTestId } = render(<Pagination {...defaultProps} />);

    const prevButton = getByTestId('previous-button');
    const nextButton = getByTestId('next-button');

    expect(prevButton.props.accessibilityLabel).toBe('Previous page');
    expect(nextButton.props.accessibilityLabel).toBe('Next page');
  });
});
