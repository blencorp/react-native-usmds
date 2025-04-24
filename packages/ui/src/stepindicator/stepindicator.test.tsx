import { render } from '@testing-library/react-native';
import { StepIndicator } from './';

describe('StepIndicator', () => {
  it('renders correctly with basic props', () => {
    const { getByText } = render(<StepIndicator steps={3} currentStep={1} title='Test Step' />);

    expect(getByText('1')).toBeTruthy();
    expect(getByText('of 3')).toBeTruthy();
    expect(getByText('Test Step')).toBeTruthy();
  });

  it('renders correct number of steps', () => {
    const { getByTestId } = render(<StepIndicator steps={4} currentStep={2} title='Test Step' testID='step-indicator' />);

    const stepIndicator = getByTestId('step-indicator');
    expect(stepIndicator).toBeTruthy();
  });

  it('renders with small size variant', () => {
    const { getByTestId } = render(<StepIndicator steps={3} currentStep={1} title='Test Step' size='small' testID='step-indicator' />);

    const stepIndicator = getByTestId('step-indicator');
    expect(stepIndicator).toBeTruthy();
  });

  it('displays current step and total steps correctly', () => {
    const { getByText } = render(<StepIndicator steps={5} currentStep={3} title='Test Step' />);

    expect(getByText('3')).toBeTruthy();
    expect(getByText('of 5')).toBeTruthy();
    expect(getByText('Test Step')).toBeTruthy();
  });

  it('renders with custom title', () => {
    const customTitle = 'Custom Step Title';
    const { getByText } = render(<StepIndicator steps={3} currentStep={1} title={customTitle} />);

    expect(getByText(customTitle)).toBeTruthy();
  });
});
