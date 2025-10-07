import { render } from '@testing-library/react-native';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/card';
import { Text } from 'react-native';

describe('Card', () => {
  it('renders correctly with all compositional parts', () => {
    const { getByText, getByRole } = render(
      <Card>
        <CardHeader>
          <CardTitle>Test Card</CardTitle>
          <CardDescription>Test description</CardDescription>
        </CardHeader>
        <CardContent>
          <Text>Card content</Text>
        </CardContent>
        <CardFooter>
          <Text>Footer content</Text>
        </CardFooter>
      </Card>
    );

    expect(getByText('Test Card')).toBeTruthy();
    expect(getByText('Test description')).toBeTruthy();
    expect(getByText('Card content')).toBeTruthy();
    expect(getByText('Footer content')).toBeTruthy();
  });

  it('renders CardTitle with heading role', () => {
    const { getByRole } = render(
      <Card>
        <CardHeader>
          <CardTitle>Heading Title</CardTitle>
        </CardHeader>
      </Card>
    );

    const heading = getByRole('heading');
    expect(heading).toBeTruthy();
    expect(heading.props.children).toBe('Heading Title');
  });

  it('renders with custom className', () => {
    const { getByText } = render(
      <Card className='custom-class'>
        <CardHeader>
          <CardTitle className='custom-title'>Custom Title</CardTitle>
        </CardHeader>
      </Card>
    );

    const title = getByText('Custom Title');
    expect(title.props.className).toContain('custom-title');
  });

  it('renders minimal card with just content', () => {
    const { getByText } = render(
      <Card>
        <CardContent>
          <Text>Simple content</Text>
        </CardContent>
      </Card>
    );

    expect(getByText('Simple content')).toBeTruthy();
  });
});
