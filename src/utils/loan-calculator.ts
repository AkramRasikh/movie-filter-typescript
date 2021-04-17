export {};
let setInterest = 0.2;
const loanAmount = 12000;
const loanPeriodMonths = 30;

setInterest = (loanPeriodMonths + loanPeriodMonths * 0.1) / 12;
const totalLoanPayment = loanAmount + loanAmount + setInterest;
const monthlyLoanPayment = totalLoanPayment / loanPeriodMonths;

console.log('loanAmount: ', loanAmount);
console.log('loanPeriodMonths: ', loanPeriodMonths);
console.log('setInterest: ', setInterest);
console.log('totalLoanPayment: ', totalLoanPayment);
console.log('monthlyLoanPayment: ', monthlyLoanPayment);
