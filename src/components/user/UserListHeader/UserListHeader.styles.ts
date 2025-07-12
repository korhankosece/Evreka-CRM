import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
`;

export const ViewToggleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const ViewToggleLabel = styled.span`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 0.875rem;
`;
