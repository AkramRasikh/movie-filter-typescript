import React from 'react';
import { CardMedia, Grid, Typography } from '@material-ui/core';

interface FilterMoviesMediaCardProps {
  title: string;
  vote_average: number;
  backdrop_path: string;
}

const FilterMoviesMediaCard: React.FC<FilterMoviesMediaCardProps> = ({
  title,
  vote_average,
  backdrop_path,
}: FilterMoviesMediaCardProps) => (
  <Grid data-testid='movie-id'>
    <Typography>{title}</Typography>
    <Typography>{vote_average}</Typography>
    <CardMedia component='img' src={backdrop_path} alt={`poster-${title}`} />
  </Grid>
);

export default React.memo(FilterMoviesMediaCard);
