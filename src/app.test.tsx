import { render, screen } from '@testing-library/react';
import App from './App';

describe('Component: App', () => {
  it('should render correctly', () => {
    const expectedText = /todos/i;

    render(<App />);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
