import React from 'react';

interface RangeSliderProps {
  amount: number;
  onChange(amount: number): any;
  max: number;
}

const RangeSlider: React.FC<RangeSliderProps> = ({
  amount,
  onChange,
  max,
}: RangeSliderProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    onChange(value);
  };
  return (
    <div className='slidecontainer'>
      <input
        type='range'
        min='1'
        max={max}
        value={amount}
        onChange={handleChange}
      />
    </div>
  );
};

export default RangeSlider;
