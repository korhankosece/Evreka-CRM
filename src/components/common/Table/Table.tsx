import {
  TableContainer,
  TableWrapper,
  TableScroll,
  StyledTable,
  TableHead,
  Th,
  Td,
  LoadingContainer,
  TableHeader,
  TableControls,
} from './Table.styles';

import Pagination from './Pagination';
import SearchInput from '../SearchInput';
import Toggle from '../Toggle';

export interface Column<T> {
  key: string;
  header: string;
  render?: (value: any, row: T) => React.ReactNode;
  width?: string;
}

export interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  error?: { message: string } | null;
  pagination?: {
    page: number;
    perPage: number;
    total: number;
    totalPages: number;
    showAll?: boolean;
    onPageChange: (page: number) => void;
    onPerPageChange: (perPage: number) => void;
    onShowAllToggle?: (show: boolean) => void;
  };
  search?: {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    debounceMs?: number;
  };
}

const Table = <T extends Record<string, any>>({
  data,
  columns,
  loading = false,
  error = null,
  pagination,
  search,
}: TableProps<T>) => {
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const showControls = search || (pagination?.onShowAllToggle && !loading);

  return (
    <TableContainer>
      {showControls && (
        <TableHeader>
          {search && (
            <SearchInput
              value={search.value}
              onChange={search.onChange}
              placeholder={search.placeholder}
              debounceMs={search.debounceMs}
            />
          )}
          <TableControls>
            {pagination?.onShowAllToggle && !loading && (
              <Toggle
                checked={pagination.showAll || false}
                onChange={pagination.onShowAllToggle}
                label="Show all"
              />
            )}
          </TableControls>
        </TableHeader>
      )}

      <TableWrapper>
        <TableScroll>
          <StyledTable>
            <TableHead>
              <tr>
                {columns.map((column) => (
                  <Th key={column.key} width={column.width}>
                    {column.header}
                  </Th>
                ))}
              </tr>
            </TableHead>
            <tbody>
              {loading ? (
                <LoadingContainer>
                  <Td colSpan={columns.length} style={{ textAlign: 'center' }}>
                    Loading...
                  </Td>
                </LoadingContainer>
              ) : data.length === 0 ? (
                <LoadingContainer>
                  <Td colSpan={columns.length} style={{ textAlign: 'center' }}>
                    No data found
                  </Td>
                </LoadingContainer>
              ) : (
                data.map((row, index) => (
                  <tr key={index}>
                    {columns.map((column) => (
                      <Td key={column.key}>
                        {column.render ? column.render(row[column.key], row) : row[column.key]}
                      </Td>
                    ))}
                  </tr>
                ))
              )}
            </tbody>
          </StyledTable>
        </TableScroll>
      </TableWrapper>

      {pagination && (
        <Pagination
          page={pagination.page}
          perPage={pagination.perPage}
          total={pagination.total}
          totalPages={pagination.totalPages}
          showAll={pagination.showAll}
          loading={loading}
          onPageChange={pagination.onPageChange}
          onPerPageChange={pagination.onPerPageChange}
        />
      )}
    </TableContainer>
  );
};

export default Table;
