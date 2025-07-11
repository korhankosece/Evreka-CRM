import { useNavigate } from 'react-router-dom';

import Table from '../components/common/Table';
import StatusBadge from '../components/common/StatusBadge';
import Button from '../components/common/Button';

import { useUsers } from '../hooks';
import { User } from '../types';

import styled from 'styled-components';

const PageContainer = styled.div`
  padding: 2rem;
`;

const Title = styled.h1`
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const UserListPage = () => {
  const navigate = useNavigate();
  const {
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
  } = useUsers();

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
      <Title>Users</Title>
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
          onPageChange: handlePageChange,
          onPerPageChange: handlePerPageChange,
        }}
        search={{
          value: search,
          onChange: handleSearch,
          placeholder: 'Search users...',
        }}
      />
    </PageContainer>
  );
};

export default UserListPage;
