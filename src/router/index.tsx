import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom'
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
      const dynamicRoutes = generateRoutes(userInfo.menus!)
      setRoutes([
        {
          element: (
            <AuthGuard>
              <LayoutPage />
            </AuthGuard>
          ),
          children: [
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
  const router = createBrowserRouter(routes,{
    future: {
      v7_partialHydration: true,
      v7_normalizeFormMethod: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_skipActionErrorRevalidation: true
    },
  })
  return (
    <RouterProvider
      future={{
        v7_startTransition: true,
      }}
      router={router}
    />
  )
}

export default Router;
