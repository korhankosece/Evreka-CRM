import {
  TableContainer,
  TableWrapper,
  TableScroll,
  StyledTable,
  TableHead,
  Th,
  LoadingContainer,
  TableHeader,
  TableControls,
  CenteredCell,
} from './Table.styles';

import VirtualizedTable from './VirtualizedTable';
import TableBody from './TableBody';
import Pagination from './Pagination';
import SearchInput from '../SearchInput';
import Toggle from '../Toggle';

import { TableProps } from './table.types';

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

  const renderContent = () => {
    if (loading) {
      return (
        <StyledTable>
          <LoadingContainer>
            <CenteredCell colSpan={columns.length}>Loading...</CenteredCell>
          </LoadingContainer>
        </StyledTable>
      );
    }

    if (data.length === 0) {
      return (
        <StyledTable>
          <LoadingContainer>
            <CenteredCell colSpan={columns.length}>No users found</CenteredCell>
          </LoadingContainer>
        </StyledTable>
      );
    }

    if (pagination?.showAll) {
      return <VirtualizedTable data={data} columns={columns} height="calc(100vh - 300px)" />;
    }

    return (
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
        <TableBody data={data} columns={columns} />
      </StyledTable>
    );
  };

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
        <TableScroll className={pagination?.showAll ? 'virtualized' : ''}>
          {renderContent()}
        </TableScroll>
      </TableWrapper>

      {pagination && !pagination.showAll && (
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
