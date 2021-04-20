import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/filter app/i);
  expect(linkElement).toBeInTheDocument();
});

test('shows movies rated from 5 stars down to 1 by default', () => {});
test('filters through movie items', () => {});
test('filtered movie items ordered by rating within sublevel too', () => {});
test('shows message "no X star films" if none available', () => {});
