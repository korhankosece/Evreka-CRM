import { useNavigate } from 'react-router-dom';

import Card from '../../common/Card';
import StatusBadge from '../../common/StatusBadge';
import Button from '../../common/Button';

import { User } from '../../../types';

import {
  CardContent,
  UserName,
  UserEmail,
  UserRole,
  UserInfo,
  ActionContainer,
} from './UserCard.styles';

interface UserCardProps {
  user: User;
}

const UserCard = ({ user }: UserCardProps) => {
  const navigate = useNavigate();

  return (
    <Card>
      <CardContent>
        <UserInfo>
          <UserName>{user.name}</UserName>
          <UserEmail>{user.email}</UserEmail>
          <UserRole>{user.role}</UserRole>
          <StatusBadge status={user.status} text={user.status} />
        </UserInfo>
        <ActionContainer>
          <Button text="Details" variant="secondary" onClick={() => navigate(`/user/${user.id}`)} />
        </ActionContainer>
      </CardContent>
    </Card>
  );
};

export default UserCard;
