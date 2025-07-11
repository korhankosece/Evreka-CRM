import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
`;

export const PageInfo = styled.span`
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;
