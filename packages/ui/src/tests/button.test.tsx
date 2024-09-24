import { render, screen, fireEvent } from '@testing-library/react';

import { Button } from '../button';

describe('Button Component', () => {
  const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => {});

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders the button with children', () => {
    render(<Button appName="MyApp">Click Me!</Button>);

    const buttonElement = screen.getByRole('button', { name: /click me!/i });
    expect(buttonElement).toBeInTheDocument();
  });

  test('applies the className prop correctly', () => {
    render(
      <Button
        appName="MyApp"
        className="custom-class"
      >
        Styled Button
      </Button>
    );

    const buttonElement = screen.getByRole('button', {
      name: /styled button/i,
    });
    expect(buttonElement).toHaveClass('custom-class');
  });

  test('alerts with the correct message on click', () => {
    render(<Button appName="MyApp">Click Me!</Button>);

    const buttonElement = screen.getByRole('button', { name: /click me!/i });
    fireEvent.click(buttonElement);

    expect(mockAlert).toHaveBeenCalledWith('Hello from your MyApp app!');
  });
});
