import { render } from '@testing-library/react-native';
import { Alert, AlertTitle, AlertDescription } from './';
import { Info } from 'lucide-react-native';

describe('Alert', () => {
  it('renders correctly with icon and description', () => {
    const { getByText } = render(
      <Alert icon={Info}>
        <AlertDescription>Test alert message</AlertDescription>
      </Alert>
    );

    expect(getByText('Test alert message')).toBeTruthy();
  });

  it('renders with title and description', () => {
    const { getByText } = render(
      <Alert icon={Info}>
        <AlertTitle>Alert Title</AlertTitle>
        <AlertDescription>Test alert message</AlertDescription>
      </Alert>
    );

    expect(getByText('Alert Title')).toBeTruthy();
    expect(getByText('Test alert message')).toBeTruthy();
  });

  it('applies destructive variant styles', () => {
    const { getByText } = render(
      <Alert icon={Info} variant='destructive'>
        <AlertDescription>Destructive message</AlertDescription>
      </Alert>
    );

    expect(getByText('Destructive message')).toBeTruthy();
  });

  it('renders with custom className', () => {
    const { getByText } = render(
      <Alert icon={Info} className='custom-class'>
        <AlertDescription>Custom styled alert</AlertDescription>
      </Alert>
    );

    expect(getByText('Custom styled alert')).toBeTruthy();
  });
});
