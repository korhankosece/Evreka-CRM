import { BaseService, ApiResponse } from './base';
import type { User } from '../types/user';

export interface UserListParams {
  page?: number;
  per_page?: number;
  search?: string;
}

export class UserService extends BaseService {
  private readonly basePath = '/users';

  // Get paginated list of users
  async getUsers(params: UserListParams = {}): Promise<
    ApiResponse<{
      users: User[];
      total: number;
      totalPages: number;
      currentPage: number;
      perPage: number;
    }>
  > {
    const { page = 1, per_page = 10, search } = params;
    return this.getPaginated<User>(
      this.basePath,
      page,
      per_page,
      search ? { params: { search } } : undefined
    );
  }

  // Get single user by ID
  async getUser(id: string): Promise<ApiResponse<User>> {
    return this.get<User>(`${this.basePath}/${id}`);
  }

  // Create new user
  async createUser(user: Omit<User, 'id' | 'createdAt'>): Promise<ApiResponse<User>> {
    return this.post<User>(this.basePath, user);
  }

  // Delete user
  async deleteUser(id: string): Promise<ApiResponse<void>> {
    return this.delete(`${this.basePath}/${id}`);
  }
}

export const userService = new UserService();
