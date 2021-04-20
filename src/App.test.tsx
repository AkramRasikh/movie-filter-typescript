import React from 'react';
import { fireEvent, render, screen, within } from '@testing-library/react';
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

test('filters through movie items', async () => {
  getMovies.mockImplementation(() => mockMovieResults);
  render(<App />);
  await screen.findByText(mockMovieResults[0].title);
  expect(screen.getAllByTestId('movie-id').length).toBe(20);
  const checkbox8 = screen.getByTestId('vote-score-8');
  fireEvent.click(checkbox8);
  expect(screen.getByText('No movies found')).toBeDefined();
  expect(screen.queryAllByTestId('movie-id').length).toBe(0);
  const checkbox7 = screen.getByTestId('vote-score-7');
  fireEvent.click(checkbox7);
  expect(screen.getAllByTestId('movie-id')).toBe(8);
  const checkbox6 = screen.getByTestId('vote-score-6');
  fireEvent.click(checkbox6);
  expect(screen.getAllByTestId('movie-id')).toBe(16);
});
// test('filtered movie items ordered by rating within sublevel too', () => {});
// test('shows message "no X star films" if none available', () => {});
