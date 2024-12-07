import { UserInfo } from "#/user";

// 定义返回值类型
type Response<T> = {
  code: number;
  data: T;
  msg: string;
}
interface LoginData {
  accessToken: string;
  refreshToken: string;
}

// 为 loginApi 函数添加类型注解
export const loginApi = (): Promise<Response<LoginData>> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        code: 200,
        data: {
          accessToken: '123',
          refreshToken: '456'
        },
        msg: 'success'
      });
    }, 500);
  });
};

export const getUserInfo = (): Promise<Response<UserInfo>> => {
  return new Promise((resolve, reject) => {
    
    setTimeout(()=> {
      resolve({
        code: 200,
        data: {
          username: 'admin',
          avatar: 'https://avatars.githubusercontent.com/u/116473695?v=4',
          email: 'admin@gmail.com',
          phone: '123456789',
          about: 'I am a front-end engineer',
          menus: [{
            name: 'dashboard',
            path: 'dashboard',
            component: 'dashboard'
          }]
        },
        msg: ''
      })
    }, 50)
  })
}