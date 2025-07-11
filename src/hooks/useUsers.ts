import { useState, useMemo } from 'react';

import { users } from '../data/users';

interface UseUsersProps {
  initialPage?: number;
  initialPerPage?: number;
  initialSearch?: string;
  initialShowAll?: boolean;
}

export const useUsers = ({
  initialPage = 1,
  initialPerPage = 10,
  initialSearch = '',
  initialShowAll = false,
}: UseUsersProps = {}) => {
  const [page, setPage] = useState(initialPage);
  const [perPage, setPerPage] = useState(initialPerPage);
  const [search, setSearch] = useState(initialSearch);
  const [showAll, setShowAll] = useState(initialShowAll);

  // Filter users based on search
  const filteredUsers = useMemo(() => {
    if (!search) return users;

    const searchLower = search.toLowerCase();
    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchLower) ||
        user.email.toLowerCase().includes(searchLower) ||
        user.role.toLowerCase().includes(searchLower)
    );
  }, [search]);

  // Calculate pagination
  const total = filteredUsers.length;
  const totalPages = Math.ceil(total / perPage);
  const start = (page - 1) * perPage;
  const end = start + perPage;
  const paginatedUsers = showAll ? filteredUsers : filteredUsers.slice(start, end);

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

  const handleShowAllToggle = (show: boolean) => {
    setShowAll(show);
    if (!show) {
      setPage(1);
    }
  };

  return {
    users: paginatedUsers,
    loading: false,
    error: null,
    page,
    perPage,
    total,
    totalPages,
    search,
    showAll,
    handlePageChange,
    handlePerPageChange,
    handleSearch,
    handleShowAllToggle,
  };
};
