import { createBrowserRouter } from 'react-router-dom';

import Layout from '../layouts/default/Layout';

import UserList from '../pages/UserList';
import UserDetail from '../pages/UserDetail';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <UserList />,
        children: [
          {
            path: 'add',
            element: null,
          },
        ],
      },
      {
        path: '/user/:id',
        element: <UserDetail />,
      },
    ],
  },
]);
