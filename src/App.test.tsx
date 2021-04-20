import React from 'react';
import { render, screen, within } from '@testing-library/react';
import App from './App';
import { getMovies } from './services/movie-apis';
import { mockMovieResults } from './mock-data';

jest.mock('./services/movie-apis');

test('shows all movies rated from 5 stars down to 1 by default', async () => {
  getMovies.mockImplementation(() => mockMovieResults);
  render(<App />);
  await screen.findByText(mockMovieResults[0].title);
  expect(screen.getAllByTestId('movie-id').length).toBe(20);
  const bestRated = screen.getAllByTestId('movie-id')[0];
  const worstRated = screen.getAllByTestId('movie-id')[19];
  expect(within(bestRated).getByText(mockMovieResults[15].title)).toBeDefined();
  expect(within(worstRated).getByText(mockMovieResults[2].title)).toBeDefined();
});
// test('filters through movie items', () => {});
// test('filtered movie items ordered by rating within sublevel too', () => {});
// test('shows message "no X star films" if none available', () => {});
