import { RouteObject } from 'react-router-dom'
import { createStore } from 'zustand/vanilla'
import { persist } from 'zustand/middleware'
import { UserInfo, UserToken } from '#/user'

type UserRoutes = RouteObject[]
type UserStoreState = { userInfo: Partial<UserInfo>, userToken: UserToken, userRoutes: UserRoutes }
type UserStoreAction = {
  actions: {
    setUserToken: (tokenObj: UserToken) => void,
    setUserInfo: (userInfo: UserInfo) => void,
    setUserRoutes: (routes: RouteObject[]) => void
  }
}
type UserStore = UserStoreState & UserStoreAction


export const userStore = createStore<UserStore>()(
  persist(set => ({
    userInfo: {},
    userRoutes: [],
    userToken: {},
    actions: {
      setUserToken: (userToken: UserToken) => set({ userToken }),
      setUserInfo: (userInfo: UserInfo) => set({ userInfo }),
      setUserRoutes: (userRoutes: RouteObject[]) => set({ userRoutes })
    }
  }),
  {
    name: 'userStore',
    partialize: state => ({ userToken: state.userToken })
  })
)
