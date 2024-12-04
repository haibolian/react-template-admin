import { createBrowserRouter, Navigate, RouteObject, RouterProvider } from 'react-router-dom'
import Login from '../pages/login';
import AuthGuard from './AuthGuard';
import LayoutPage from '../layout';

const constansRoutes: RouteObject[] = [
  {
    path: '/login',
    element: <Login />,
  }
]

const Router: React.FC = () => {

  // const [ permissionRoutes ] = usePermissionRoutes();

  const asyncRoutes = {
    path: '/',
    element: (
      <AuthGuard>
        <LayoutPage />
      </AuthGuard>
    ),
    children: [
      { index: true, element: <Navigate to="/dashboard" replace /> },
      // ...permissionRoutes
    ]
  }

  const routes = [...constansRoutes, asyncRoutes ]
  const router = createBrowserRouter(routes);

  return (
    <RouterProvider router={router} />
  )
}

export default Router;
