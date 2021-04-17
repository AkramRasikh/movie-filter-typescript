import React from 'react';
import CardPaymentDetail from './card-payment-detail';

interface CardPaymentDetailsArray {
  text: string;
  detail: string;
}

interface CardProps {
  monthlyPayment: string;
  cardPaymentDetails: CardPaymentDetailsArray[];
}

const Card: React.FC<CardProps> = ({
  monthlyPayment,
  cardPaymentDetails,
}: CardProps) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <div>
        <p>{monthlyPayment}</p>
        <p>Est. Monthly Payment</p>
      </div>

      {cardPaymentDetails &&
        cardPaymentDetails.map((cardPaymentDetail, index) => (
          <CardPaymentDetail key={index} {...cardPaymentDetail} />
        ))}
    </div>
  );
};

export default Card;
