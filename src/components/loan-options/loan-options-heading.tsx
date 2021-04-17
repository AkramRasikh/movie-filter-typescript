import React from 'react';

interface LoanOptionsHeadingProps {
  amount: number;
  heading: string;
}

const LoanOptionsHeading: React.FC<LoanOptionsHeadingProps> = ({
  amount,
  heading,
}: LoanOptionsHeadingProps) => (
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <span>{heading}</span>
    <span>{amount}</span>
  </div>
);

export default LoanOptionsHeading;
