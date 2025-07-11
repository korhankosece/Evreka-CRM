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
