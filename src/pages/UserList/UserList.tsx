import { useLocation, Outlet, useNavigate, useSearchParams } from 'react-router-dom';

import AddUserModal from '../../components/user/AddUserModal';
import UserTable from '../../components/user/UserTable';
import VirtualizedCardList from '../../components/user/VirtualizedCardList/VirtualizedCardList';
import UserListHeader from '../../components/user/UserListHeader/UserListHeader';
import ToastManager from '../../components/common/ToastManager/ToastManager';

import { useUsers, useUrlParams, useUserCreation } from '../../hooks';

import { PageContainer, PageContent, TableContainer } from './UserList.styles';

const UserList = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const { page, perPage, search, showAll, isTableView, updateParams } = useUrlParams();

  const {
    users,
    allFilteredUsers,
    loading,
    error,
    page: currentPage,
    perPage: currentPerPage,
    total,
    totalPages,
    search: currentSearch,
    showAll: currentShowAll,
    handlePageChange,
    handlePerPageChange,
    handleSearch,
    handleShowAllToggle,
    addUser,
  } = useUsers({
    initialPage: page,
    initialPerPage: perPage,
    initialSearch: search,
    initialShowAll: showAll,
  });

  const {
    handleAddUser,
    showSuccessToast,
    showErrorToast,
    setShowSuccessToast,
    setShowErrorToast,
  } = useUserCreation(addUser);

  const handlePageChangeWithUrl = (newPage: number) => {
    handlePageChange(newPage);
    updateParams({ page: newPage });
  };

  const handlePerPageChangeWithUrl = (newPerPage: number) => {
    handlePerPageChange(newPerPage);
    updateParams({ per_page: newPerPage, page: 1 });
  };

  const handleSearchWithUrl = (searchTerm: string) => {
    handleSearch(searchTerm);
    updateParams({ search: searchTerm, page: 1 });
  };

  const handleShowAllToggleWithUrl = (show: boolean) => {
    handleShowAllToggle(show);
    if (show) {
      updateParams({ show_all: true, page: null });
    } else {
      updateParams({ show_all: false, page: 1 });
    }
  };

  const handleViewChange = (tableView: boolean) => {
    updateParams({ view: tableView ? 'table' : 'card' });
  };

  const handleAddUserClick = () => {
    if (location.pathname !== '/add') {
      navigate({
        pathname: '/add',
        search: searchParams.toString(),
      });
    }
  };

  const handleCloseModal = () => {
    navigate({
      pathname: '/',
      search: searchParams.toString(),
    });
  };

  const isAddModalOpen = location.pathname === '/add';

  return (
    <PageContainer>
      <PageContent>
        <UserListHeader
          isTableView={isTableView}
          onViewChange={handleViewChange}
          onAddUser={handleAddUserClick}
        />
        <TableContainer>
          {isTableView ? (
            <UserTable
              users={users}
              loading={loading}
              error={error}
              page={currentPage}
              perPage={currentPerPage}
              total={total}
              totalPages={totalPages}
              search={currentSearch}
              showAll={currentShowAll}
              onPageChange={handlePageChangeWithUrl}
              onPerPageChange={handlePerPageChangeWithUrl}
              onShowAllToggle={handleShowAllToggleWithUrl}
              onSearch={handleSearchWithUrl}
            />
          ) : (
            <VirtualizedCardList
              users={allFilteredUsers}
              loading={loading}
              error={error}
              search={currentSearch}
              onSearch={handleSearchWithUrl}
            />
          )}
        </TableContainer>
      </PageContent>

      {isAddModalOpen && (
        <AddUserModal isOpen={true} onClose={handleCloseModal} onSubmit={handleAddUser} />
      )}

      <ToastManager
        successMessage={showSuccessToast ? 'User created successfully!' : undefined}
        errorMessage={showErrorToast ? 'Failed to create user. Email already exists.' : undefined}
        onSuccessDismiss={() => setShowSuccessToast(false)}
        onErrorDismiss={() => setShowErrorToast(false)}
      />

      <Outlet />
    </PageContainer>
  );
};

export default UserList;
