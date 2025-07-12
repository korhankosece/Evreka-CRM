import { ReactNode } from 'react';
import { CardContainer, CardTitle } from './Card.styles';

interface CardProps {
  children: ReactNode;
  title?: string;
  className?: string;
}

const Card = ({ children, title, className }: CardProps) => {
  return (
    <CardContainer className={className}>
      {title && <CardTitle>{title}</CardTitle>}
      {children}
    </CardContainer>
  );
};

export default Card;
