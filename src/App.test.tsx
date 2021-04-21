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
  // test('filtered movie items ordered by rating within sublevel too', () => {});
});

test('filters through movie items', async () => {
  getMovies.mockImplementation(() => mockMovieResults);
  render(<App />);
  await screen.findByText(mockMovieResults[0].title);
  expect(screen.getAllByTestId('movie-id').length).toBe(20);
  const checkbox8 = screen.getAllByRole('checkbox')[7];
  expect(checkbox8.checked).toEqual(false);
  fireEvent.click(checkbox8);
  expect(checkbox8.checked).toEqual(true);
  expect(screen.getByText('No movies found')).toBeDefined();
  expect(screen.queryAllByTestId('movie-id').length).toBe(0);
  const checkbox7 = screen.getAllByRole('checkbox')[4];
  expect(checkbox7.checked).toEqual(false);
  fireEvent.click(checkbox7);
  expect(checkbox7.checked).toEqual(true);
  expect(screen.getAllByTestId('movie-id').length).toBe(8);
  const checkbox6 = screen.getAllByRole('checkbox')[5];
  expect(checkbox6.checked).toEqual(false);
  fireEvent.click(checkbox6);
  expect(checkbox6.checked).toEqual(true);
  expect(screen.getAllByTestId('movie-id').length).toBe(10);
});
// test('shows message "no X star films" if none available', () => {});
