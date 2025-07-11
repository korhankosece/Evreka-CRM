import { useParams } from 'react-router-dom';

const UserDetailPage = () => {
  const { userId } = useParams();

  return (
    <div>
      <h1>User Detail</h1>
      <p>User ID: {userId}</p>
    </div>
  );
};

export default UserDetailPage;
