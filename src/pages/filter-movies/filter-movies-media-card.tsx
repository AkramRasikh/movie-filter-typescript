import React from 'react';
import { CardMedia, makeStyles, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    width: '300px',
    marginBottom: '20px',
  },
}));

interface FilterMoviesMediaCardProps {
  title: string;
  vote_average: number;
  backdrop_path: string;
}

const FilterMoviesMediaCard: React.FC<FilterMoviesMediaCardProps> = ({
  title,
  vote_average,
  backdrop_path,
}: FilterMoviesMediaCardProps) => {
  const classes = useStyles();

  return (
    <Grid data-testid='movie-id' className={classes.root}>
      <Grid container justify='space-between'>
        <Typography>
          Title: <span>{title}</span>
        </Typography>
        <Typography>
          Rating: <span>{vote_average}</span>
        </Typography>
      </Grid>
      <CardMedia component='img' src={backdrop_path} alt={`poster-${title}`} />
    </Grid>
  );
};

export default React.memo(FilterMoviesMediaCard);
