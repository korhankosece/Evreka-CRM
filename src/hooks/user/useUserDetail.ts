import { useMemo } from 'react';
import { users } from '../../data/users';

export const useUserDetail = (userId: string | undefined) => {
  const user = useMemo(() => {
    if (!userId) return null;
    return users.find((u) => u.id === userId) || null;
  }, [userId]);

  return {
    user,
    loading: false,
    error: !user ? { message: 'User not found' } : null,
  };
};
