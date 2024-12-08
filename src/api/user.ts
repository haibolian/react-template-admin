import { UserInfo } from "#/user";
import apiService from "@/utils/apiService";
import { AxiosResponse } from "axios";

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

type LoginResponse = Response<LoginData>

// 枚举接口路径
enum ApiPath {
  Login = 'user/login',
  UserInfo = 'user/getInfo'
}

// 为 loginApi 函数添加类型注解
export const loginApi = (data: LoginData) => {
  return apiService.post(ApiPath.Login, data)
};

export const getUserInfo = () => {
  return apiService.get(ApiPath.UserInfo)
}