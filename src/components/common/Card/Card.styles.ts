import styled from 'styled-components';

export const CardContainer = styled.div`
  background: ${({ theme }) => theme.colors.background.paper};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 24px;
  margin-bottom: 24px;
`;

export const CardTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 16px 0;
  color: ${({ theme }) => theme.colors.text.primary};
`;
