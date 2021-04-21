import React, { useState, useEffect } from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import { Checkbox } from '../../components';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    '& p': {
      margin: 'auto 0',
    },
  },
}));

interface FilterMovieCheckBoxProps {
  ratingNumber: number;
  updateFilteredRating(id: number, checked: boolean): void;
}

const FilterMoviesCheckBox: React.FC<FilterMovieCheckBoxProps> = ({
  ratingNumber,
  updateFilteredRating,
}: FilterMovieCheckBoxProps) => {
  const [checked, setChecked] = useState(false);
  const classes = useStyles();
  useEffect(() => {
    updateFilteredRating(ratingNumber, checked);
  }, [checked]);

  return (
    <Grid className={classes.root}>
      <Typography>Rated {ratingNumber} star</Typography>
      <Checkbox id={ratingNumber} checked={checked} setChecked={setChecked} />
    </Grid>
  );
};

export default FilterMoviesCheckBox;
