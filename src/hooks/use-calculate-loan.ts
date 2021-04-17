import { useState } from 'react';

const useCalculateLoan = (inBankDeposit: number) => {
  const [loanAmount, setLoanAmount] = useState<number>(1);
  const [loanTerm, setLoanTerm] = useState<number>(1);

  const monthToInterestRatio = 0.2;
  const maxLoanTerm = 60;
  const maxLoanAmount = inBankDeposit * 5;
  const totalCostOfLoan = loanAmount + loanAmount * monthToInterestRatio;
  const interestRate = `${(monthToInterestRatio * loanTerm).toFixed(2)}%`;

  const monthlyPayment = (totalCostOfLoan / 12).toLocaleString('en-GB', {
    style: 'currency',
    currency: 'GBP',
  });

  const totalCostOfLoanFormatted = totalCostOfLoan.toLocaleString('en-GB', {
    style: 'currency',
    currency: 'GBP',
  });

  return {
    loanTerm: {
      amount: loanTerm,
      onChange: setLoanTerm,
      max: maxLoanTerm,
      heading: 'Loan Term',
    },
    loanAmount: {
      amount: loanAmount,
      onChange: setLoanAmount,
      max: maxLoanAmount,
      heading: 'Loan Amount',
    },
    cardPaymentDetails: [
      { text: 'Est. Interest Rate', detail: interestRate },
      { text: 'Total Est. Cost of Loan', detail: totalCostOfLoanFormatted },
    ],
    monthlyPayment,
  };
};

export default useCalculateLoan;
