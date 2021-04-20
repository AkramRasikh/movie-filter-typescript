import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { IMovies } from '../App';

interface FilterMoviePageProps {
  movies: IMovies[];
}

const FilterMoviesPage: React.FC<FilterMoviePageProps> = ({
  movies,
}: FilterMoviePageProps) => {
  return (
    <div>
      {movies.map(({ title, vote_average, id }) => (
        <Grid key={id} data-testid='movie-id'>
          <Typography>{title}</Typography>
          <Typography>{vote_average}</Typography>
        </Grid>
      ))}
    </div>
  );
};

export default FilterMoviesPage;
