import { create } from 'zustand'
import { UserInfo, UserToken } from '#/user'
import { persist } from 'zustand/middleware'

type UserStoreState = { userInfo: Partial<UserInfo>, userToken: UserToken }
type UserStoreAction = {
  setUserToken: (tokenObj: UserToken) => void,
  setUserInfo: (userInfo: UserInfo) => void
}
type UserStore = UserStoreState & UserStoreAction


export const userStore = create<UserStore>()(
  persist(set => ({
    userInfo: {},
    userToken: {},
    actions: {
      
    }
  }),
  {
    name: 'userStore'
  })
)