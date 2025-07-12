import styled from 'styled-components';

export const ListContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 1rem;
`;

export const ListHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const GridContainer = styled.div`
  height: 100%;
  width: 100%;
  flex: 1;
  min-height: 0;
`;

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.h6.fontSize};
`;

export const ErrorContainer = styled(LoadingContainer)`
  color: ${({ theme }) => theme.colors.error.main};
`;
