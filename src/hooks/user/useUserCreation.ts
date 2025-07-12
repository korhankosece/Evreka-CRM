import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useUserManagement } from './index';

import { User, UserRole } from '../../types';

interface UserCreationData {
  name: string;
  email: string;
  password: string;
  role: UserRole;
  isActive: boolean;
  coordinates: { lat: number; lng: number };
}

interface UseUserCreationReturn {
  handleAddUser: (userData: UserCreationData) => void;
  showSuccessToast: boolean;
  showErrorToast: boolean;
  setShowSuccessToast: (show: boolean) => void;
  setShowErrorToast: (show: boolean) => void;
}

export const useUserCreation = (onUserAdded: (user: User) => void): UseUserCreationReturn => {
  const navigate = useNavigate();
  const { createUser } = useUserManagement();
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);

  const handleAddUser = (userData: UserCreationData) => {
    const newUser = createUser(userData);
    if (newUser) {
      onUserAdded(newUser);
      navigate(-1);
      setShowSuccessToast(true);
    } else {
      setShowErrorToast(true);
    }
  };

  return {
    handleAddUser,
    showSuccessToast,
    showErrorToast,
    setShowSuccessToast,
    setShowErrorToast,
  };
};
