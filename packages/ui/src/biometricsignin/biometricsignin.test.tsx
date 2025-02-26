import { render, fireEvent } from '@testing-library/react-native';
import { BiometricSignIn } from './';

describe('BiometricSignIn', () => {
  it('renders correctly with Face ID', () => {
    const { getByTestId, getByText } = render(<BiometricSignIn biometricType='faceId' checked={false} onCheckedChange={() => {}} />);

    const checkbox = getByTestId('biometric-checkbox');
    expect(checkbox.props.accessibilityState.checked).toBe(false);
    expect(getByText('Enable Face ID for sign in')).toBeTruthy();
  });

  it('renders correctly with Touch ID', () => {
    const { getByText } = render(<BiometricSignIn biometricType='touchId' checked={false} onCheckedChange={() => {}} />);

    expect(getByText('Enable Touch ID for sign in')).toBeTruthy();
  });

  it('handles check state changes', () => {
    const onCheckedChange = jest.fn();
    const { getByTestId } = render(<BiometricSignIn biometricType='faceId' checked={false} onCheckedChange={onCheckedChange} />);

    fireEvent.press(getByTestId('biometric-pressable'));
    expect(onCheckedChange).toHaveBeenCalledWith(true);
  });

  it('respects disabled state', () => {
    const onCheckedChange = jest.fn();
    const { getByTestId } = render(<BiometricSignIn biometricType='faceId' checked={false} disabled onCheckedChange={onCheckedChange} />);

    const checkbox = getByTestId('biometric-checkbox');
    expect(checkbox.props.accessibilityState.disabled).toBe(true);
    fireEvent.press(getByTestId('biometric-pressable'));
    expect(onCheckedChange).not.toHaveBeenCalled();
  });

  it('renders biometric type correctly', () => {
    const { getByText } = render(<BiometricSignIn biometricType='biometric' checked={false} onCheckedChange={() => {}} />);

    expect(getByText('Enable Biometric for sign in')).toBeTruthy();
  });

  it('shows checked state correctly', () => {
    const { getByTestId } = render(<BiometricSignIn biometricType='faceId' checked={true} onCheckedChange={() => {}} />);

    const checkbox = getByTestId('biometric-checkbox');
    expect(checkbox.props.accessibilityState.checked).toBe(true);
    expect(checkbox.props.className).toContain('bg-primary');
  });
});
