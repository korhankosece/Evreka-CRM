export interface Column<T> {
  key: string;
  header: string;
  width?: string;
  render?: (value: any, row: T) => React.ReactNode;
}

export interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  error?: Error | null;
  pagination?: {
    page: number;
    perPage: number;
    total: number;
    totalPages: number;
    showAll?: boolean;
    onPageChange: (page: number) => void;
    onPerPageChange: (perPage: number) => void;
    onShowAllToggle?: () => void;
  };
  search?: {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    debounceMs?: number;
  };
}
