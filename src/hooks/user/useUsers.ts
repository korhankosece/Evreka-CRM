import { useState } from 'react';

import { getAllUsers } from '../../services/user.service';

import { User } from '../../types';

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
  const [users, setUsers] = useState(() => getAllUsers());
  const [page, setPage] = useState(initialPage);
  const [perPage, setPerPage] = useState(initialPerPage);
  const [search, setSearch] = useState(initialSearch);
  const [showAll, setShowAll] = useState(initialShowAll);

  const addUser = (newUser: User) => {
    setUsers((prev) => [...prev, newUser]);
  };

  const filteredUsers = !search
    ? users
    : users.filter((user) => {
        const searchLower = search.toLowerCase();
        return (
          user.name.toLowerCase().includes(searchLower) ||
          user.email.toLowerCase().includes(searchLower) ||
          user.role.toLowerCase().includes(searchLower)
        );
      });

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
    allFilteredUsers: filteredUsers,
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
    addUser,
  };
};
