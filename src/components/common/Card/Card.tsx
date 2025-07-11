import { ReactNode } from 'react';
import { CardContainer, CardTitle } from './Card.styles';

interface CardProps {
  children: ReactNode;
  title?: string;
}

const Card = ({ children, title }: CardProps) => {
  return (
    <CardContainer>
      {title && <CardTitle>{title}</CardTitle>}
      {children}
    </CardContainer>
  );
};

export default Card;
