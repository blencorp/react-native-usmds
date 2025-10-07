import { render } from '@testing-library/react-native';
import { Banner } from '../components/ui/banner';
import { View } from 'react-native';

describe('Banner', () => {
  it('renders standard app banner correctly', () => {
    const { getByTestId, getByText } = render(<Banner variant='standard-app' />);

    const banner = getByTestId('banner');
    expect(banner.props.className).toContain('bg-muted');
    expect(getByText('An official app')).toBeTruthy();
    expect(getByText('of the United States government')).toBeTruthy();
  });

  it('renders welcome banner correctly', () => {
    const { getByTestId, getByText } = render(<Banner variant='welcome' title='Welcome Message' />);

    const banner = getByTestId('banner');
    expect(banner.props.className).toContain('h-[40px]');
    expect(getByText('Welcome Message')).toBeTruthy();
  });

  it('renders link in standard app banner', () => {
    const { getByTestId, getByText, getByRole } = render(<Banner variant='standard-app' link='Learn more' />);

    const banner = getByTestId('banner');
    expect(banner.props.className).toContain('bg-muted');

    const link = getByRole('link');
    expect(link).toBeTruthy();
    expect(getByText('Learn more')).toBeTruthy();
  });

  it('renders trailing icon when provided', () => {
    const { getByTestId } = render(<Banner variant='welcome' title='Welcome' trailingIcon={<View testID='trailing-icon' />} />);

    const banner = getByTestId('banner');
    expect(banner.props.className).toContain('h-[40px]');
    expect(getByTestId('trailing-icon')).toBeTruthy();
  });
});
