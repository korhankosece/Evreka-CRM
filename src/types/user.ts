export type UserRole = 'admin' | 'user';
export type UserStatus = 'active' | 'inactive';

export interface User {
  id: string;
  name: string;
  email: string;
  password?: string;
  role: UserRole;
  status: UserStatus;
  createdAt: string; // ISO date string
  coordinates: {
    lat: number;
    lng: number;
  };
}
