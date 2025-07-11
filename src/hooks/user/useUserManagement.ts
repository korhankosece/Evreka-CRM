import { faker } from '@faker-js/faker';

import { User, UserRole } from '../../types';

import {
  getStoredUsers,
  saveUsers,
  isEmailUnique as checkEmailUnique,
} from '../../services/user.service';

interface CreateUserData {
  name: string;
  email: string;
  password: string;
  role: UserRole;
  isActive: boolean;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export const useUserManagement = () => {
  const isEmailUnique = (email: string): boolean => {
    return checkEmailUnique(email);
  };

  const createUser = (userData: CreateUserData): User | null => {
    if (!isEmailUnique(userData.email)) {
      return null;
    }

    const newUser: User = {
      id: faker.string.uuid(),
      name: userData.name,
      email: userData.email,
      password: userData.password,
      role: userData.role,
      status: userData.isActive ? 'active' : 'inactive',
      createdAt: new Date().toISOString(),
      coordinates: userData.coordinates,
    };

    const storedUsers = getStoredUsers();
    const updatedUsers = [...storedUsers, newUser];
    saveUsers(updatedUsers);

    return newUser;
  };

  return {
    createUser,
    isEmailUnique,
  };
};
