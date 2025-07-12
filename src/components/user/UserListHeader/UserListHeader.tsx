import Button from '../../common/Button';
import Toggle from '../../common/Toggle';

import { Header, Title, ViewToggleContainer, ViewToggleLabel } from './UserListHeader.styles';

interface UserListHeaderProps {
  isTableView: boolean;
  onViewChange: (isTable: boolean) => void;
  onAddUser: () => void;
}

const UserListHeader = ({ isTableView, onViewChange, onAddUser }: UserListHeaderProps) => {
  return (
    <Header>
      <Title>Users</Title>
      <ViewToggleContainer>
        <ViewToggleLabel>Card View</ViewToggleLabel>
        <Toggle checked={isTableView} onChange={onViewChange} />
        <ViewToggleLabel>Table View</ViewToggleLabel>
      </ViewToggleContainer>
      <Button text="+ Add User" variant="primary" onClick={onAddUser} />
    </Header>
  );
};

export default UserListHeader;
