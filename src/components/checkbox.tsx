import React from 'react';
import { Checkbox } from '@material-ui/core';

interface CheckboxFieldProps {
  id: number;
  checked: boolean;
  setChecked(checked: boolean): void;
}

const CheckboxField: React.FC<CheckboxFieldProps> = ({
  checked,
  setChecked,
}: CheckboxFieldProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Checkbox
      checked={checked}
      onChange={handleChange}
      inputProps={{
        'aria-label': 'primary checkbox',
      }}
    />
  );
};

export default React.memo(CheckboxField);
