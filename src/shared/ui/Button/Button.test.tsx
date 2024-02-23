import { Button, ThemeButton } from './Button';
import { render, screen } from '@testing-library/react';

describe('Button', () => {
  test('render in the document', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test("to have class 'clear'", () => {
    render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
    screen.debug();
  });
});
