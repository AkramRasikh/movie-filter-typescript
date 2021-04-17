import React from 'react';

interface LoanOptionsUnderlayProps {
  max: number;
}

const LoanOptionsUnderlay: React.FC<LoanOptionsUnderlayProps> = ({
  max,
}: LoanOptionsUnderlayProps) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
    }}
  >
    <span>-</span>
    <span>{max}</span>
  </div>
);

export default LoanOptionsUnderlay;
