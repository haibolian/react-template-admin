import { createBrowserRouter, Navigate, RouteObject, RouterProvider } from 'react-router-dom'
import Login from '../pages/login';
import { useEffect, useState } from 'react';
import { userStore } from '@/store/userStore';
import LayoutPage from '@/layout';
import { generateRoutes } from './helper';
import AuthGuard from './AuthGuard';

const constansRoutes: RouteObject[] = [
  {
    path: '/login',
    element: <Login />,
  }
]

const Router: React.FC = () => {
  const [routes, setRoutes] = useState<RouteObject[]>([])
  const fetchUserInfo = userStore(state => state.fetchUserInfo)
  // TODO: zustand useStore方法好像并没有缓存，每次刷新都会请求一次
  useEffect(() => {
    const initRoutes = async () => {
      const userInfo = await fetchUserInfo()
      const dynamicRoutes = generateRoutes(userInfo.menus)
      setRoutes([
        {
          element: (
            <AuthGuard>
              <LayoutPage />
            </AuthGuard>
          ),
          children: [
            {
              index: true, // 默认路由，指向 /
              element: <Navigate to="/dashboard" />, // 实现重定向
            },
            ...dynamicRoutes
          ],
        },
        ...constansRoutes
      ])
    }
    initRoutes()
  }, [])

  if (routes?.length === 0) {
    return <></>;
  }
  const router = createBrowserRouter(routes)
  return <RouterProvider router={router} />
}

export default Router;
