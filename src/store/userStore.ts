import { persist } from 'zustand/middleware'
import { UserInfo, UserToken } from '#/user'
import { create } from 'zustand'
import { getUserInfo } from '@/api/user'

type UserStoreState = { userInfo: Partial<UserInfo>, userToken: UserToken }
type UserStoreAction = {
  setUserToken: (tokenObj: UserToken) => void,
  setUserInfo: (userInfo: UserInfo) => void,
  fetchUserInfo: () => Promise<UserInfo>
}
type UserStore = UserStoreState & UserStoreAction


export const userStore = create<UserStore>()(
  persist(set => ({
    userInfo: {},
    userToken: {},
    setUserToken: (userToken: UserToken) => set({ userToken }),
    setUserInfo: (userInfo: UserInfo) => set({ userInfo }),
    fetchUserInfo: async (): Promise<UserInfo> => {
      const { data } = await getUserInfo()
      set({ userInfo: data })
      return data
    }
  }),
  {
    name: 'userStore',
    partialize: state => ({ userToken: state.userToken })
  })
)
