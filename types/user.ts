export type UserInfo = {
  username: string,
  avatar?: string,
  email?: string,
  phone?: string,
  about?: string,
}

export type UserToken = {
  accessToken?: string,
  refreshToken?: string
}