import styled, { css } from 'styled-components';

interface StyledButtonProps {
  $variant: 'primary' | 'secondary';
}

export const StyledButton = styled.button<StyledButtonProps>`
  padding: 0.5rem 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border: none;

  ${({ theme, $variant }) =>
    $variant === 'primary'
      ? css`
          background-color: ${theme.colors.primary.main};
          color: ${theme.colors.primary.contrastText};

          &:hover {
            background-color: ${theme.colors.primary.dark};
          }

          &:disabled {
            background-color: ${theme.colors.grey[300]};
            cursor: not-allowed;
          }
        `
      : css`
          background-color: ${theme.colors.secondary.main};
          color: ${theme.colors.secondary.contrastText};

          &:hover {
            background-color: ${theme.colors.secondary.dark};
          }

          &:disabled {
            background-color: ${theme.colors.grey[300]};
            cursor: not-allowed;
          }
        `}
`;
