import { render, screen } from '@testing-library/react';

import { Code } from '../code';

describe('Code Component', () => {
  test('renders the Code component with children', () => {
    render(<Code>const x = 10;</Code>);

    const codeElement = screen.getByText(/const x = 10;/i);
    expect(codeElement).toBeInTheDocument();
  });

  test('applies the className prop correctly', () => {
    render(<Code className="custom-class">const x = 10;</Code>);

    const codeElement = screen.getByText(/const x = 10;/i);
    expect(codeElement).toHaveClass('custom-class');
  });
});
