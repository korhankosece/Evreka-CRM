import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import Modal from '../../common/Modal';
import Button from '../../common/Button';
import Select from '../../common/Select';
import Toggle from '../../common/Toggle';
import Input from '../../common/Input';
import { UserRole } from '../../../types';
import { useUserManagement } from '../../../hooks/user';

import { FormGroup, Label } from './AddUserModal.styles';

export interface AddUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (userData: {
    name: string;
    email: string;
    password: string;
    role: UserRole;
    isActive: boolean;
    coordinates: { lat: number; lng: number };
  }) => void;
}

const ROLES: { value: UserRole; label: string }[] = [
  { value: 'user', label: 'User' },
  { value: 'admin', label: 'Admin' },
];

const AddUserModal = ({ isOpen, onClose, onSubmit }: AddUserModalProps) => {
  const navigate = useNavigate();
  const { isEmailUnique } = useUserManagement();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'user' as UserRole,
    isActive: true,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    } else if (!isEmailUnique(formData.email)) {
      newErrors.email = 'This email is already in use';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generateRandomCoordinates = () => ({
    lat: Math.random() * (90 - -90) + -90,
    lng: Math.random() * (180 - -180) + -180,
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      onSubmit({
        ...formData,
        coordinates: generateRandomCoordinates(),
      });
      onClose();
      navigate('/');
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const handleRoleChange = (value: string | number) => {
    setFormData((prev) => ({ ...prev, role: value.toString() as UserRole }));
  };

  const handleActiveChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, isActive: checked }));
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Add New User"
      footer={
        <>
          <Button text="Cancel" onClick={onClose} variant="secondary" />
          <Button
            text="Add User"
            onClick={() =>
              handleSubmit(new Event('submit') as unknown as FormEvent<HTMLFormElement>)
            }
            variant="primary"
          />
        </>
      }
    >
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Input
            label="Name"
            value={formData.name}
            onChange={(value) => handleInputChange('name', value)}
            placeholder="Enter name"
            error={errors.name}
          />
        </FormGroup>

        <FormGroup>
          <Input
            label="Email"
            type="email"
            value={formData.email}
            onChange={(value) => handleInputChange('email', value)}
            placeholder="Enter email"
            error={errors.email}
          />
        </FormGroup>

        <FormGroup>
          <Input
            label="Password"
            type="password"
            value={formData.password}
            onChange={(value) => handleInputChange('password', value)}
            placeholder="Enter password"
            error={errors.password}
          />
        </FormGroup>

        <FormGroup>
          <Label>Role</Label>
          <Select value={formData.role} onChange={handleRoleChange} options={ROLES} />
        </FormGroup>

        <FormGroup>
          <Label>Active</Label>
          <Toggle checked={formData.isActive} onChange={handleActiveChange} />
        </FormGroup>
      </form>
    </Modal>
  );
};

export default AddUserModal;
