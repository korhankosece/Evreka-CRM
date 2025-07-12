import { useNavigate } from 'react-router-dom';

import Table from '../../common/Table';
import StatusBadge from '../../common/StatusBadge';
import Button from '../../common/Button';

import { User, UserStatus } from '../../../types';

import { CapitalizedText } from './UserTable.styles';

interface UserTableProps {
  users: User[];
  loading: boolean;
  error: null | Error;
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  search: string;
  showAll: boolean;
  onPageChange: (page: number) => void;
  onPerPageChange: (perPage: number) => void;
  onShowAllToggle: (show: boolean) => void;
  onSearch: (term: string) => void;
}

const UserTable = ({
  users,
  loading,
  error,
  page,
  perPage,
  total,
  totalPages,
  search,
  showAll,
  onPageChange,
  onPerPageChange,
  onShowAllToggle,
  onSearch,
}: UserTableProps) => {
  const navigate = useNavigate();

  const handleShowAllToggle = () => {
    onShowAllToggle(!showAll);
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
      render: (value: string) => <CapitalizedText>{value}</CapitalizedText>,
    },
    {
      key: 'status',
      header: 'Status',
      render: (value: UserStatus) => <StatusBadge status={value} text={value} />,
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
        onPageChange,
        onPerPageChange,
        onShowAllToggle: handleShowAllToggle,
      }}
      search={{
        value: search,
        onChange: onSearch,
        placeholder: 'Search users...',
      }}
    />
  );
};

export default UserTable;
