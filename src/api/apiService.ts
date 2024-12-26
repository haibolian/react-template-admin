import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

class ApiService {
  axiosInstance: AxiosInstance
  constructor(opt: AxiosRequestConfig){
    this.axiosInstance = axios.create(opt)
    this.axiosInstance.interceptors.request.use(config => {
      // config.headers.Authorization = 'Bearer ' + localStorage.getItem('token')
      return config
    })
    this.axiosInstance.interceptors.response.use(response => {
      return response.data
    })
  }

  get(url: string, params?: { [key: string]: unknown }){
    return this.request({ url, method: 'get', params })
  }

  post(url: string, data: unknown){
    return this.request({ url, method: 'post', data })
  }
  
  put(url: string, data: unknown){
    return this.request({ url, method: 'put', data })
  }

  delete(url: string, params: { [key: string]: unknown }){
    return this.request({ url, method: 'delete', params })
  }

  request(config: AxiosRequestConfig){
    return new Promise((resolve, reject) => {
      this.axiosInstance.request(config).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }
}

const apiService = new ApiService({
  baseURL: '/api',
  timeout: 5000,
})

export default apiService;