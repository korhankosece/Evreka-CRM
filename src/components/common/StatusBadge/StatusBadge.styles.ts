import styled from 'styled-components';

interface StyledBadgeProps {
  $status: 'active' | 'inactive';
}

export const StyledBadge = styled.span<StyledBadgeProps>`
  padding: 0.25rem 0.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background: ${({ $status, theme }) =>
    $status === 'active' ? theme.colors.success.light + '20' : theme.colors.error.light + '20'};
  color: ${({ $status, theme }) =>
    $status === 'active' ? theme.colors.success.main : theme.colors.error.main};
`;
