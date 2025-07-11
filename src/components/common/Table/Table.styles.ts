import styled from 'styled-components';

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
`;

export const TableHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

export const TableControls = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const TableWrapper = styled.div`
  flex: 1;
  min-height: 0;
  border: 1px solid ${({ theme }) => theme.colors.grey[200]};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  display: flex;
  flex-direction: column;
  overflow: hidden; /* Contains the scrollbar */
`;

export const TableScroll = styled.div`
  overflow: auto;
  flex: 1;
  min-height: 0;

  /* Custom scrollbar styling */
  &::-webkit-scrollbar {
    width: 8px;
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
  min-width: 800px;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  position: sticky;
  top: 0;
  z-index: 1;
  background: ${({ theme }) => theme.colors.grey[50]};
`;

export const Th = styled.th<{ width?: string }>`
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey[200]};
  width: ${({ width }) => width || 'auto'};
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const Td = styled.td`
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey[100]};
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const LoadingContainer = styled.tr`
  td {
    padding: 2rem;
    text-align: center;
  }
`;
