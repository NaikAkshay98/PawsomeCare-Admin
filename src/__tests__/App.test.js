import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/components/App';

test('renders App component', () => {
  render(<App />);
  const linkElement = screen.getByText(/App Component/i);
  expect(linkElement).toBeInTheDocument();
});
