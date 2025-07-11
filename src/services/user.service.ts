import { User } from '../types';

import { users as initialUsers } from '../data/users';

const STORAGE_KEY = 'evreka_crm_users';

/**
 * Get users that were added through the UI
 * @returns Array of stored users
 */
export const getStoredUsers = (): User[] => {
  const storedUsers = localStorage.getItem(STORAGE_KEY);
  return storedUsers ? JSON.parse(storedUsers) : [];
};

/**
 * Get all users by merging initial (faker) data with stored users
 * @returns Array of all users
 */
export const getAllUsers = (): User[] => {
  const storedUsers = getStoredUsers();
  const mergedUsers = [...initialUsers];

  storedUsers.forEach((storedUser) => {
    const index = mergedUsers.findIndex((u) => u.id === storedUser.id);
    if (index !== -1) {
      mergedUsers[index] = storedUser;
    } else {
      mergedUsers.push(storedUser);
    }
  });

  return mergedUsers;
};

/**
 * Save users to localStorage
 * @param users Array of users to save
 */
export const saveUsers = (users: User[]): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
};

/**
 * Check if an email is unique across all users
 * @param email Email to check
 * @returns boolean indicating if email is unique
 */
export const isEmailUnique = (email: string): boolean => {
  const allUsers = getAllUsers();
  return !allUsers.some((user) => user.email.toLowerCase() === email.toLowerCase());
};

/**
 * Get a user by their ID
 * @param userId User ID to find
 * @returns User object if found, null otherwise
 */
export const getUserById = (userId: string): User | null => {
  const storedUsers = getStoredUsers();
  const storedUser = storedUsers.find((u) => u.id === userId);
  if (storedUser) return storedUser;

  return initialUsers.find((u) => u.id === userId) || null;
};
