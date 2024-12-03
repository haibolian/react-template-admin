import { createBrowserRouter, RouteObject } from 'react-router-dom'
import Dashboard from '../pages/dashboard';
import BasicForm from '../pages/form/basic-form';
import ProForm from '../pages/form/pro-form';
import Layout from '../layout';
import Login from '../pages/login';

const routes: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'form',
        children: [
          {
            index: true,
            element: <BasicForm />,
          },
          {
            path: 'pro',
            element: <ProForm />,
          },
        ],
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
];

const router = createBrowserRouter(routes);

export default router;
