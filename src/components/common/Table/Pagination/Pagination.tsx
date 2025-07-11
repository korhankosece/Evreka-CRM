import { PageInfo, PaginationContainer, ButtonsContainer } from './Pagination.styles';

import Button from '../../Button';
import Select from '../../Select';

export interface PaginationProps {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  loading?: boolean;
  showAll?: boolean;
  onPageChange: (page: number) => void;
  onPerPageChange: (perPage: number) => void;
}

const PAGE_SIZE_OPTIONS = [
  { value: 5, label: '5' },
  { value: 10, label: '10' },
  { value: 20, label: '20' },
  { value: 50, label: '50' },
];

const Pagination = ({
  page,
  perPage,
  total,
  totalPages,
  loading = false,
  showAll = false,
  onPageChange,
  onPerPageChange,
}: PaginationProps) => {
  return (
    <PaginationContainer>
      <div>
        <span>Rows per page: </span>
        <Select
          value={perPage}
          onChange={(value) => onPerPageChange(+value)}
          options={PAGE_SIZE_OPTIONS}
          disabled={showAll}
        />
      </div>

      <PageInfo>
        {total === 0
          ? '0'
          : showAll
          ? `Showing all ${total} items`
          : `${(page - 1) * perPage + 1} - ${Math.min(page * perPage, total)} of ${total}`}
      </PageInfo>

      <ButtonsContainer>
        <Button
          text="Previous"
          onClick={() => onPageChange(page - 1)}
          disabled={page === 1 || loading || showAll}
        />
        <Button
          text="Next"
          onClick={() => onPageChange(page + 1)}
          disabled={page === totalPages || loading || showAll}
        />
      </ButtonsContainer>
    </PaginationContainer>
  );
};

export default Pagination;
