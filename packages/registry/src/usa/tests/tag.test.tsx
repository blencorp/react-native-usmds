import { render } from '@testing-library/react-native';
import { Tag } from '../components/ui/tag';

describe('Tag', () => {
  it('renders correctly with label', () => {
    const { getByText } = render(<Tag label='Test Tag' />);
    expect(getByText('Test Tag')).toBeTruthy();
  });

  it('renders with big size variant', () => {
    const { getByText } = render(<Tag label='Big Tag' size='big' />);
    expect(getByText('Big Tag')).toBeTruthy();
  });

  it('applies custom className', () => {
    const { getByText } = render(<Tag label='Custom Tag' className='custom-class' />);
    expect(getByText('Custom Tag')).toBeTruthy();
  });
});
