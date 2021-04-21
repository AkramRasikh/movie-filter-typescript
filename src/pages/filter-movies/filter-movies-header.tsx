import React from 'react';
import { Typography } from '@material-ui/core';

interface FilterMoviesHeaderProps {
  numberOfMovies: number;
}

const FilterMoviesHeader: React.FC<FilterMoviesHeaderProps> = ({
  numberOfMovies,
}: FilterMoviesHeaderProps) => (
  <Typography component='h1' align='center'>
    Movies found: {numberOfMovies}
  </Typography>
);

export default FilterMoviesHeader;
