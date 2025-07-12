import { useParams, useNavigate } from 'react-router-dom';

import { useUserDetail } from '../../hooks/user';

import UserInfo from '../../components/user/UserInfo';
import UserLocationMap from '../../components/user/UserLocationMap';
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';

import {
  PageContainer,
  PageContent,
  Header,
  Title,
  LoadingMessage,
  ErrorContainer,
} from './UserDetail.styles';

const UserDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { user, loading, error } = useUserDetail(id);

  const handleBackToList = () => {
    navigate(-1);
  };

  if (loading) {
    return (
      <PageContainer>
        <PageContent>
          <Header>
            <Title>User Details</Title>
            <Button text="Back to Users" onClick={handleBackToList} variant="secondary" />
          </Header>
          <LoadingMessage>Loading user details...</LoadingMessage>
        </PageContent>
      </PageContainer>
    );
  }

  if (error || !user) {
    return (
      <PageContainer>
        <PageContent>
          <Header>
            <Title>User Details</Title>
            <Button text="Back to Users" onClick={handleBackToList} variant="secondary" />
          </Header>
          <ErrorContainer>
            <h2>User Not Found</h2>
            <p>{error?.message || 'The requested user could not be found.'}</p>
            <Button text="Return to User List" onClick={handleBackToList} variant="secondary" />
          </ErrorContainer>
        </PageContent>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <PageContent>
        <Header>
          <Title>User Details</Title>
          <Button text="Back to Users" onClick={handleBackToList} variant="secondary" />
        </Header>

        <Card title="User Information">
          <UserInfo user={user} />
          <UserLocationMap user={user} />
        </Card>
      </PageContent>
    </PageContainer>
  );
};

export default UserDetailPage;
