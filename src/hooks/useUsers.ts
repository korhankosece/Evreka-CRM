import { useState, useEffect } from 'react';

import { userService } from '../services/users';
import type { ApiError } from '../services/base';

import type { User } from '../types/user';

interface UseUsersProps {
  initialPage?: number;
  initialPerPage?: number;
  initialSearch?: string;
}

export const useUsers = ({
  initialPage = 1,
  initialPerPage = 10,
  initialSearch = '',
}: UseUsersProps = {}) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ApiError | null>(null);
  const [page, setPage] = useState(initialPage);
  const [perPage, setPerPage] = useState(initialPerPage);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useState(initialSearch);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await userService.getUsers({ page, per_page: perPage, search });
      setUsers(response.data.users);
      setTotal(response.data.total);
      setTotalPages(response.data.totalPages);
    } catch (err) {
      setError(err as ApiError);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [page, perPage, search]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handlePerPageChange = (newPerPage: number) => {
    setPerPage(newPerPage);
    setPage(1);
  };

  const handleSearch = (searchTerm: string) => {
    setSearch(searchTerm);
    setPage(1);
  };

  return {
    users,
    loading,
    error,
    page,
    perPage,
    total,
    totalPages,
    search,
    handlePageChange,
    handlePerPageChange,
    handleSearch,
    refresh: fetchUsers,
  };
};
