import { useSearchParams } from 'react-router-dom';

interface UseUrlParamsReturn {
  page: number;
  perPage: number;
  search: string;
  showAll: boolean;
  updateParams: (updates: Record<string, string | number | boolean | null>) => void;
}

export const useUrlParams = (): UseUrlParamsReturn => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = +(searchParams.get('page') || 1);
  const perPage = +(searchParams.get('per_page') || 10);
  const search = searchParams.get('search') || '';
  const showAll = searchParams.get('show_all') === 'true';

  const updateParams = (updates: Record<string, string | number | boolean | null>) => {
    const newParams = new URLSearchParams(searchParams);

    Object.entries(updates).forEach(([key, value]) => {
      if (value === null) {
        newParams.delete(key);
      } else if (value || value === false || value === 0) {
        newParams.set(key, String(value));
      } else {
        newParams.delete(key);
      }
    });

    setSearchParams(newParams);
  };

  return {
    page,
    perPage,
    search,
    showAll,
    updateParams,
  };
};
