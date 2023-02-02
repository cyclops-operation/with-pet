import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse
} from 'axios'

import { API_DOMAIN } from './env'

const catchCallback = (err: AxiosError) => {
  return Promise.reject(err)
}

const generatorAxiosInstance = (axiosinstance: AxiosInstance) => {
  return {
    get: <ResponseType>(
      url: string,
      options?: AxiosRequestConfig
    ): Promise<AxiosResponse<ResponseType>> => {
      return axiosinstance.get(url, options).catch(catchCallback)
    },
    post: <ParamType, ResponseType>(
      url: string,
      param?: ParamType,
      options?: AxiosRequestConfig
    ): Promise<AxiosResponse<ResponseType>> => {
      return axiosinstance.post(url, param, options).catch(catchCallback)
    },
    patch: <ParamType, ResponseType>(
      url: string,
      param: ParamType,
      options?: AxiosRequestConfig
    ): Promise<AxiosResponse<ResponseType>> => {
      return axiosinstance.patch(url, param, options).catch(catchCallback)
    },
    delete: <ResponseType>(
      url: string,
      options?: AxiosRequestConfig
    ): Promise<AxiosResponse<ResponseType>> => {
      return axiosinstance.delete(url, options)
    },
    put: <ParamType, ResponseType>(
      url: string,
      param: ParamType,
      options?: AxiosRequestConfig
    ): Promise<AxiosResponse<ResponseType>> => {
      return axiosinstance.put(url, param, options).catch(catchCallback)
    }
  }
}

const apiInstance = axios.create({
  baseURL: API_DOMAIN
})

export const api = generatorAxiosInstance(apiInstance)
