import styled from 'styled-components';

export const TableContainer = styled.div`
  background: ${({ theme }) => theme.colors.background.default};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.small};
  padding: 1rem;
  min-height: 400px;
  display: flex;
  flex-direction: column;
`;

export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  flex: 1;

  /* Custom scrollbar styling */
  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.grey[100]};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.grey[300]};
    border-radius: 4px;

    &:hover {
      background: ${({ theme }) => theme.colors.grey[400]};
    }
  }
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
  min-width: 800px; /* Ensures table doesn't shrink too much on small screens */
`;

export const Th = styled.th<{ width?: string }>`
  text-align: left;
  padding: 1rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.grey[200]};
  color: ${({ theme }) => theme.colors.text.primary};
  width: ${({ width }) => width || 'auto'};
  white-space: nowrap; /* Prevents header text from wrapping */
`;

export const Td = styled.td`
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey[100]};
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const LoadingContainer = styled.tr`
  height: 400px;
`;
