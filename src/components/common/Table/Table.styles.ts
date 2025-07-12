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
  width: 100%;

  &.virtualized {
    overflow-y: hidden;
    overflow-x: auto;
    min-width: 0;
    display: flex;
  }

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

export const CenteredCell = styled(Td)`
  text-align: center;
`;

// New styled components for virtualized table
export const VirtualizedTh = styled.div<{ width?: string }>`
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey[200]};
  background: ${({ theme }) => theme.colors.grey[50]};
  color: ${({ theme }) => theme.colors.text.primary};
  width: ${({ width }) => width || 'auto'};
`;

export const VirtualizedTd = styled.div`
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey[100]};
  color: ${({ theme }) => theme.colors.text.primary};
  height: 100%;
  display: flex;
  align-items: center;
`;

export const VirtualizedRow = styled.div`
  display: flex;
  align-items: center;
  &:hover {
    background-color: ${({ theme }) => theme.colors.grey[50]};
  }
`;

export const VirtualizedHeaderRow = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.grey[50]};
  position: sticky;
  top: 0;
  z-index: 1;
`;

export const VirtualizedWrapper = styled.div`
  width: 100%;
  min-width: 0;
  flex: 1;
`;

export const VirtualizedContainer = styled.div`
  min-width: 800px;
`;

export const VirtualizedBodyContainer = styled.div<{ height: string }>`
  height: ${({ height }) => height};
`;

export const VirtualizedCell = styled.div<{ width?: string }>`
  flex: ${({ width }) => (width ? `0 0 ${width}` : 1)};
`;

