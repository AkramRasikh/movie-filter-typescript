import React, { useState, useEffect } from 'react';
import { Checkbox, Grid } from '@material-ui/core';

interface CheckboxFieldProps {
  id: number;
  updateFilteredRating(id: number, checked: boolean): void;
}

const CheckboxField: React.FC<CheckboxFieldProps> = ({
  id,
  updateFilteredRating,
}: CheckboxFieldProps) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    updateFilteredRating(id, checked);
  }, [checked]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Grid>
      <label>{id}</label>
      <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{
          'aria-label': 'primary checkbox',
          role: 'checkbox',
        }}
      />
    </Grid>
  );
};

export default CheckboxField;
