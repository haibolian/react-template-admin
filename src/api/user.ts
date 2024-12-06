// 定义返回值类型
interface LoginResponse {
  code: number;
  data: {
    accessToken: string;
    refreshToken: string;
  };
  msg: string;
}

// 为 loginApi 函数添加类型注解
export const loginApi = (): Promise<LoginResponse> => {
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