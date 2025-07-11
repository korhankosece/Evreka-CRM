import { faker } from '@faker-js/faker';

import type { User } from '../types/user';

export const users: User[] = Array.from({ length: 5000 }, () => {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  return {
    id: faker.string.uuid(),
    name: `${firstName} ${lastName}`,
    email: faker.internet.email({ firstName, lastName }),
    role: faker.helpers.arrayElement(['admin', 'user']),
    status: faker.helpers.arrayElement(['active', 'inactive']),
    createdAt: faker.date.past({ years: 2 }),
  };
});
