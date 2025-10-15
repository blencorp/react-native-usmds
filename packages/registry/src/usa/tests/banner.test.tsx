import { render } from '@testing-library/react-native';
import { Banner } from '../components/ui/banner';
import { View } from 'react-native';

describe('Banner', () => {
  it('renders standard app banner correctly', () => {
    const { getByTestId, getByText } = render(<Banner variant='standard-app' />);

    const banner = getByTestId('banner');
    expect(banner.props.className).toContain('bg-muted');
    expect(getByText('An official website of the United States government')).toBeTruthy();
    expect(getByText("Here's how you know")).toBeTruthy();
  });

  it('renders welcome banner correctly', () => {
    const { getByTestId, getByText } = render(<Banner variant='welcome' title='Welcome Message' />);

    const banner = getByTestId('banner');
    expect(banner.props.className).toContain('h-[40px]');
    expect(getByText('Welcome Message')).toBeTruthy();
  });

  it('renders different languages', () => {
    const { getByText } = render(<Banner variant='standard-app' language='es' />);
    expect(getByText('Un sitio oficial del Gobierno de Estados Unidos')).toBeTruthy();
    expect(getByText('Así es como usted puede verificarlo')).toBeTruthy();
  });

  it('renders different domains', () => {
    const { getByText } = render(<Banner variant='standard-app' domain='mil' />);
    expect(getByText('An official website of the United States government')).toBeTruthy();
    expect(getByText("Here's how you know")).toBeTruthy();
  });

  it('renders trailing icon when provided', () => {
    const { getByTestId } = render(<Banner variant='welcome' title='Welcome' trailingIcon={<View testID='trailing-icon' />} />);

    const banner = getByTestId('banner');
    expect(banner.props.className).toContain('h-[40px]');
    expect(getByTestId('trailing-icon')).toBeTruthy();
  });
});
