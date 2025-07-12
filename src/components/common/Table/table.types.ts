export interface Column<T, V = unknown> {
  key: string;
  header: string;
  width?: string;
  render?: (value: V, row: T) => React.ReactNode;
}

export type TableColumn<T> = Column<T, unknown>;

export interface TableProps<T> {
  data: T[];
  columns: TableColumn<T>[];
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
