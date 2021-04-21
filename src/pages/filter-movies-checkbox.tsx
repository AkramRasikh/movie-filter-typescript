import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Checkbox } from '../components';

interface FilterMovieCheckBoxProps {
  ratingNumber: number;
  updateFilteredRating(id: number, checked: boolean): void;
}

const FilterMoviesCheckBox: React.FC<FilterMovieCheckBoxProps> = ({
  ratingNumber,
  updateFilteredRating,
}: FilterMovieCheckBoxProps) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    updateFilteredRating(ratingNumber, checked);
  }, [checked]);

  return (
    <Grid>
      <Typography>Rated {ratingNumber} star</Typography>
      <Checkbox id={ratingNumber} checked={checked} setChecked={setChecked} />
    </Grid>
  );
};

export default FilterMoviesCheckBox;
