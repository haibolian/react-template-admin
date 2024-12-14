export type PermissionMenus = {
  name: string,
  path: string,
  component: string,
  children?: PermissionMenus[],
  redirect?: string,
  order?: number,
  show?: boolean,
  inLayout?: boolean,
  keepAlive?: boolean,
  title: string,
  icon?: string,
}

export type UserInfo = {
  username?: string,
  avatar?: string,
  email?: string,
  phone?: string,
  about?: string,
  menus?: PermissionMenus[]
}

export type UserToken = {
  accessToken?: string,
  refreshToken?: string
}
