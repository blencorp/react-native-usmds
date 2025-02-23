import { render } from '@testing-library/react-native';
import { StepIndicator } from './';

describe('StepIndicator', () => {
  it('renders correctly with basic props', () => {
    const { getByText } = render(<StepIndicator steps={3} currentStep={2} title='Step 2' />);

    expect(getByText('2')).toBeTruthy();
    expect(getByText('of 3')).toBeTruthy();
    expect(getByText('Step 2')).toBeTruthy();
  });

  it('renders with small size variant', () => {
    const { getByText } = render(<StepIndicator steps={3} currentStep={2} title='Step 2' size='small' />);

    expect(getByText('Step 2')).toBeTruthy();
  });

  it('renders correct number of segments', () => {
    const { getByTestId } = render(<StepIndicator steps={4} currentStep={2} title='Step 2' testID='step-indicator' />);

    const stepIndicator = getByTestId('step-indicator');
    expect(stepIndicator).toBeTruthy();
  });
});
