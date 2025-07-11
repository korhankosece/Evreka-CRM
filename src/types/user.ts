export type UserRole = 'admin' | 'user';
export type UserStatus = 'active' | 'inactive';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  createdAt: Date;
  status: UserStatus;
}
