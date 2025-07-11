import { ButtonHTMLAttributes } from 'react';

import { StyledButton } from './Button.styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

const Button = ({ text, variant = 'primary', ...props }: ButtonProps) => {
  return (
    <StyledButton $variant={variant} {...props}>
      {text}
    </StyledButton>
  );
};

export default Button;
