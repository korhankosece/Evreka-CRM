import { User } from '../../../types';
import { DetailRow, Label, Value } from './UserInfo.styles';

interface UserInfoProps {
  user: User;
}

const UserInfo = ({ user }: UserInfoProps) => {
  return (
    <>
      <DetailRow>
        <Label>Name</Label>
        <Value>{user.name}</Value>
      </DetailRow>

      <DetailRow>
        <Label>Email</Label>
        <Value>{user.email}</Value>
      </DetailRow>

      <DetailRow>
        <Label>Location</Label>
        <Value>
          {user.coordinates.lat.toFixed(6)}, {user.coordinates.lng.toFixed(6)}
        </Value>
      </DetailRow>
    </>
  );
};

export default UserInfo;
