import { getUserById } from '../../services/user.service';

export const useUserDetail = (userId: string | undefined) => {
  if (!userId) return { user: null, loading: false, error: { message: 'User not found' } };

  const user = getUserById(userId);

  return {
    user,
    loading: false,
    error: !user ? { message: 'User not found' } : null,
  };
};
