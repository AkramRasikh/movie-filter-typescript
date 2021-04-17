import React from 'react';
import './App.css';
import { CardPayment, LoanOptions } from './components';
import useCalculateLoan from './hooks/use-calculate-loan';

const App: React.FC = () => {
  const inBankDeposit = 10000;
  const {
    loanTerm,
    loanAmount,
    monthlyPayment,
    cardPaymentDetails,
  } = useCalculateLoan(inBankDeposit);

  return (
    <div className='app'>
      <h3>Loan Calculator</h3>
      <CardPayment
        monthlyPayment={monthlyPayment}
        cardPaymentDetails={cardPaymentDetails}
      />
      <LoanOptions {...loanAmount} />
      <LoanOptions {...loanTerm} />
    </div>
  );
};

export default App;
