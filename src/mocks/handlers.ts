import { http, HttpResponse, delay } from 'msw';
import { faker } from '@faker-js/faker';

import type { User, UserRole, UserStatus } from '../types/user';

// Generate initial users data
const USERS_STORE = Array.from({ length: 5000 }, () => {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  return {
    id: faker.string.uuid(),
    name: `${firstName} ${lastName}`,
    email: faker.internet.email({ firstName, lastName }),
    role: faker.helpers.arrayElement(['admin', 'user']) as UserRole,
    createdAt: faker.date.past({ years: 2 }),
    status: faker.helpers.arrayElement(['active', 'inactive']) as UserStatus,
  };
});

export const handlers = [
  // GET /api/users - Get paginated users
  http.get('/api/users', async ({ request }) => {
    await delay();

    const url = new URL(request.url);
    const page = Number(url.searchParams.get('page')) || 1;
    const perPage = Number(url.searchParams.get('per_page')) || 10;
    const search = url.searchParams.get('search') || '';

    let filteredUsers = USERS_STORE;
    if (search) {
      const searchLower = search.toLowerCase();
      filteredUsers = USERS_STORE.filter(
        (user) =>
          user.name.toLowerCase().includes(searchLower) ||
          user.email.toLowerCase().includes(searchLower)
      );
    }

    const start = (page - 1) * perPage;
    const end = start + perPage;
    const paginatedUsers = filteredUsers.slice(start, end);
    const total = filteredUsers.length;
    const totalPages = Math.ceil(total / perPage);

    return HttpResponse.json({
      data: {
        users: paginatedUsers,
        total,
        totalPages,
        currentPage: page,
        perPage,
      },
    });
  }),

  // GET /api/users/:id - Get single user
  http.get('/api/users/:id', async ({ params }) => {
    await delay();

    const user = USERS_STORE.find((user) => user.id === params.id);
    if (!user) {
      return new HttpResponse(null, {
        status: 404,
        statusText: 'User not found',
      });
    }

    return HttpResponse.json({ data: user });
  }),

  // POST /api/users - Create new user
  http.post('/api/users', async ({ request }) => {
    await delay();

    const body = (await request.json()) as Omit<User, 'id' | 'createdAt'>;
    const newUser: User = {
      id: faker.string.uuid(),
      createdAt: new Date(),
      name: body.name,
      email: body.email,
      role: body.role,
      status: body.status,
    };

    USERS_STORE.unshift(newUser);

    return HttpResponse.json({ data: newUser }, { status: 201 });
  }),

  // PUT /api/users/:id - Update user
  http.put('/api/users/:id', async ({ params, request }) => {
    await delay();

    const body = (await request.json()) as Partial<Omit<User, 'id' | 'createdAt'>>;
    const userIndex = USERS_STORE.findIndex((user) => user.id === params.id);

    if (userIndex === -1) {
      return new HttpResponse(null, {
        status: 404,
        statusText: 'User not found',
      });
    }

    const updatedUser: User = {
      ...USERS_STORE[userIndex],
      ...body,
    };

    USERS_STORE[userIndex] = updatedUser;

    return HttpResponse.json({ data: updatedUser });
  }),

  // DELETE /api/users/:id - Delete user
  http.delete('/api/users/:id', async ({ params }) => {
    await delay();

    const userIndex = USERS_STORE.findIndex((user) => user.id === params.id);

    if (userIndex === -1) {
      return new HttpResponse(null, {
        status: 404,
        statusText: 'User not found',
      });
    }

    USERS_STORE.splice(userIndex, 1);

    return new HttpResponse(null, { status: 204 });
  }),
];
