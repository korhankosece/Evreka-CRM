import styled, { css } from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 0.875rem;
  font-weight: 500;
`;

export const StyledInput = styled.input<{ $hasError?: boolean }>`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid
    ${({ theme, $hasError }) => ($hasError ? theme.colors.error.main : theme.colors.grey[200])};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text.primary};
  background-color: ${({ theme }) => theme.colors.background.default};
  transition: all 0.2s ease-in-out;

  &:focus {
    outline: none;
    border-color: ${({ theme, $hasError }) =>
      $hasError ? theme.colors.error.main : theme.colors.primary.main};
    box-shadow: 0 0 0 2px
      ${({ theme, $hasError }) =>
        $hasError ? `${theme.colors.error.main}20` : `${theme.colors.primary.main}20`};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.disabled};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.grey[100]};
    cursor: not-allowed;
  }

  ${({ $hasError, theme }) =>
    $hasError &&
    css`
      &:hover {
        border-color: ${theme.colors.error.dark};
      }
    `}
`;

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.error.main};
  font-size: 0.75rem;
`;
