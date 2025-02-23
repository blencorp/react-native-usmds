import { render } from '@testing-library/react-native';
import { Text, TextClassContext } from './';

describe('Text', () => {
  it('renders text correctly', () => {
    const { getByText } = render(<Text>Hello World</Text>);
    expect(getByText('Hello World')).toBeTruthy();
  });

  it('inherits class from TextClassContext', () => {
    const { getByText } = render(
      <TextClassContext.Provider value='text-primary'>
        <Text>Contextual Text</Text>
      </TextClassContext.Provider>
    );
    const textElement = getByText('Contextual Text');
    expect(textElement.props.className).toContain('text-primary');
  });

  it('merges custom className with context class', () => {
    const { getByText } = render(
      <TextClassContext.Provider value='text-primary'>
        <Text className='font-bold'>Custom Text</Text>
      </TextClassContext.Provider>
    );
    const textElement = getByText('Custom Text');
    expect(textElement.props.className).toContain('text-primary');
    expect(textElement.props.className).toContain('font-bold');
  });

  it('applies custom className', () => {
    const { getByText } = render(<Text className='custom-class'>Custom Text</Text>);
    const textElement = getByText('Custom Text');
    expect(textElement.props.className).toContain('custom-class');
  });
});
