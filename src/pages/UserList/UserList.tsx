import { useNavigate, useSearchParams } from 'react-router-dom';

import Table from '../../components/common/Table';
import StatusBadge from '../../components/common/StatusBadge';
import Button from '../../components/common/Button';

import { useUsers } from '../../hooks';
import { User } from '../../types';

import { PageContainer, PageContent, TableContainer, Title } from './UserList.styles';

const UserList = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = +(searchParams.get('page') || 1);
  const currentPerPage = +(searchParams.get('per_page') || 10);
  const currentSearch = searchParams.get('search') || '';
  const currentShowAll = searchParams.get('show_all') === 'true';

  const {
    users,
    loading,
    error,
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
  } = useUsers({
    initialPage: currentPage,
    initialPerPage: currentPerPage,
    initialSearch: currentSearch,
    initialShowAll: currentShowAll,
  });

  // Update URL when values change
  const updateSearchParams = (updates: Record<string, string | number | boolean>) => {
    const newParams = new URLSearchParams(searchParams);

    Object.entries(updates).forEach(([key, value]) => {
      if (value || value === false) {
        newParams.set(key, String(value));
      } else {
        newParams.delete(key);
      }
    });

    setSearchParams(newParams);
  };

  const handlePageChangeWithUrl = (newPage: number) => {
    handlePageChange(newPage);
    updateSearchParams({ page: newPage });
  };

  const handlePerPageChangeWithUrl = (newPerPage: number) => {
    handlePerPageChange(newPerPage);
    updateSearchParams({ per_page: newPerPage, page: 1 });
  };

  const handleSearchWithUrl = (searchTerm: string) => {
    handleSearch(searchTerm);
    updateSearchParams({ search: searchTerm, page: 1 });
  };

  const handleShowAllToggleWithUrl = (show: boolean) => {
    handleShowAllToggle(show);
    if (show) {
      const newParams = new URLSearchParams(searchParams);
      newParams.delete('page');
      newParams.set('show_all', 'true');
      setSearchParams(newParams);
    } else {
      updateSearchParams({ show_all: false, page: 1 });
    }
  };

  const columns = [
    {
      key: 'name',
      header: 'Name',
    },
    {
      key: 'email',
      header: 'Email',
      width: '25%',
    },
    {
      key: 'role',
      header: 'Role',
      render: (value: string) => <span style={{ textTransform: 'capitalize' }}>{value}</span>,
    },
    {
      key: 'status',
      header: 'Status',
      render: (value: 'active' | 'inactive') => <StatusBadge status={value} text={value} />,
    },
    {
      key: 'createdAt',
      header: 'Created At',
      render: (value: string) => new Date(value).toLocaleDateString(),
    },
    {
      key: 'actions',
      header: 'Actions',
      width: '120px',
      render: (_: any, row: User) => (
        <Button text="Details" variant="secondary" onClick={() => navigate(`/user/${row.id}`)} />
      ),
    },
  ];

  return (
    <PageContainer>
      <PageContent>
        <Title>Users</Title>
        <TableContainer>
          <Table
            data={users}
            columns={columns}
            loading={loading}
            error={error}
            pagination={{
              page,
              perPage,
              total,
              totalPages,
              showAll,
              onPageChange: handlePageChangeWithUrl,
              onPerPageChange: handlePerPageChangeWithUrl,
              onShowAllToggle: handleShowAllToggleWithUrl,
            }}
            search={{
              value: search,
              onChange: handleSearchWithUrl,
              placeholder: 'Search users...',
            }}
          />
        </TableContainer>
      </PageContent>
    </PageContainer>
  );
};

export default UserList;
