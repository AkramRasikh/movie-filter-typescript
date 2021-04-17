import React from 'react';

interface CardDetailsProps {
  text: string;
  detail: string;
}

const CardDetails: React.FC<CardDetailsProps> = ({
  text,
  detail,
}: CardDetailsProps) => (
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <span>{text}</span>
    <span>{detail}</span>
  </div>
);

export default CardDetails;
