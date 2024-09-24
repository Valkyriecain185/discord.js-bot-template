import { render, screen } from '@testing-library/react';

import { Card } from '../card';

describe('Card Component', () => {
  test('renders the Card with title and children', () => {
    render(
      <Card
        title="Test Title"
        href="https://example.com"
      >
        This is a test card.
      </Card>
    );

    const titleElement = screen.getByRole('heading', { name: /test title/i });
    expect(titleElement).toBeInTheDocument();

    const paragraphElement = screen.getByText(/this is a test card/i);
    expect(paragraphElement).toBeInTheDocument();
  });

  test('renders the Card with the correct href', () => {
    const testHref = 'https://example.com';
    render(
      <Card
        title="Test Title"
        href={testHref}
      >
        This is a test card.
      </Card>
    );

    const linkElement = screen.getByRole('link', { name: /test title/i });
    expect(linkElement).toHaveAttribute(
      'href',
      `${testHref}?utm_source=create-turbo&utm_medium=basic&utm_campaign=create-turbo"`
    );
  });

  test('applies the className prop correctly', () => {
    render(
      <Card
        className="custom-class"
        title="Test Title"
        href="https://example.com"
      >
        This is a test card.
      </Card>
    );

    const linkElement = screen.getByRole('link', { name: /test title/i });
    expect(linkElement).toHaveClass('custom-class');
  });
});
