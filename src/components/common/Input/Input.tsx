import { InputHTMLAttributes, ChangeEvent } from 'react';

import { InputContainer, Label, StyledInput, ErrorMessage } from './Input.styles';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label?: string;
  error?: string;
  onChange: (value: string) => void;
}

const Input = ({ label, error, onChange, ...props }: InputProps) => {
  return (
    <InputContainer>
      {label && <Label>{label}</Label>}
      <StyledInput
        {...props}
        onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
        $hasError={!!error}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputContainer>
  );
};

export default Input;
