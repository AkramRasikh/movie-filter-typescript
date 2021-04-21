import React from 'react';
import { fireEvent, render, screen, within } from '@testing-library/react';
import App from './App';
import * as moviesApisModule from './services/movie-apis';
import { mockMovieResults } from './mock-data';

jest.mock('./services/movie-apis');

const mockedMoviesApisModule = moviesApisModule as jest.Mocked<
  typeof moviesApisModule
>;

beforeEach(() => {
  jest.clearAllMocks();
});

test('shows all movies rated from 5 stars down to 1 by default', async () => {
  mockedMoviesApisModule.getMovies.mockImplementation(() =>
    Promise.resolve(mockMovieResults),
  );
  render(<App />);
  await screen.findByText(mockMovieResults[0].title);
  screen.getByText(`Movies found: ${mockMovieResults.length}`);
  expect(screen.getAllByTestId('movie-id').length).toBe(20);
  const bestRated = screen.getAllByTestId('movie-id')[0];
  const worstRated = screen.getAllByTestId('movie-id')[19];
  expect(within(bestRated).getByText(mockMovieResults[15].title)).toBeDefined();
  expect(within(worstRated).getByText(mockMovieResults[2].title)).toBeDefined();
});

test('shows error message if API fails', async () => {
  mockedMoviesApisModule.getMovies.mockImplementation(() => Promise.reject());
  render(<App />);
  await screen.findByText('Error fetching data 😥');
});

test('filters through movie items', async () => {
  mockedMoviesApisModule.getMovies.mockImplementation(() =>
    Promise.resolve(mockMovieResults),
  );
  render(<App />);
  await screen.findByText(mockMovieResults[0].title);
  expect(screen.getAllByTestId('movie-id').length).toBe(20);
  const checkbox8 = screen.getAllByRole('checkbox')[7] as HTMLInputElement;
  expect(checkbox8.checked).toEqual(false);
  fireEvent.click(checkbox8);
  expect(checkbox8.checked).toEqual(true);
  expect(screen.getByText(`Movies found: 0`)).toBeDefined();
  expect(screen.queryAllByTestId('movie-id').length).toBe(0);
  const checkbox7 = screen.getAllByRole('checkbox')[4] as HTMLInputElement;
  expect(checkbox7.checked).toEqual(false);
  fireEvent.click(checkbox7);
  expect(checkbox7.checked).toEqual(true);
  expect(screen.getAllByTestId('movie-id').length).toBe(8);
  expect(screen.queryByText('Movies found: 8')).toBeDefined();
  const checkbox6 = screen.getAllByRole('checkbox')[5] as HTMLInputElement;
  expect(checkbox6.checked).toEqual(false);
  fireEvent.click(checkbox6);
  expect(checkbox6.checked).toEqual(true);
  expect(screen.getAllByTestId('movie-id').length).toBe(10);
  expect(screen.queryByText('Movies found: 10')).toBeDefined();
});
