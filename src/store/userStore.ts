import { create } from 'zustand'

interface UserInfo {
  name: string,
  age: number
}

export const userStore = create(set => ({
  userInfo: {
    name: 'hbo'
  },
  token: null,
  updateUserInfo: (userInfo: UserInfo) => set( state => {
    return ({ userInfo: Object.assign({}, state.userInfo, userInfo) })
  } )
}))