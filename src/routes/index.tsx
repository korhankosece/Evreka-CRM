import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '../layouts';
import { UserListPage, UserDetailPage } from '../pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <UserListPage />,
      },
      {
        path: 'user/:userId',
        element: <UserDetailPage />,
      },
    ],
  },
]);
