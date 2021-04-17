import React from 'react';
import LoanOptionsHeading from './loan-options-heading';
import LoanOptionsUnderlay from './loan-options-underlay';
import RangeSlider from './range-slider';

interface LoanOptionsProps {
  amount: number;
  onChange(amount: number): any;
  max: number;
  heading: string;
}

const LoanOptions: React.FC<LoanOptionsProps> = ({
  amount,
  onChange,
  max,
  heading,
}: LoanOptionsProps) => (
  <div>
    <LoanOptionsHeading amount={amount} heading={heading} />
    <RangeSlider amount={amount} onChange={onChange} max={max} />
    <LoanOptionsUnderlay max={max} />
  </div>
);

export default LoanOptions;
