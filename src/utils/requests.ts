import { BASE_URL } from '../constants/system'
import axios, { AxiosRequestConfig } from 'axios'
import { getAccessToken } from '../services/auth-service'

export const requestBackend = (config: AxiosRequestConfig) => {
  const headers = config.withCredentials
    ? {
        ...config.headers,
        Authorization: 'Bearer ' + getAccessToken(),
      }
    : config.headers

  return axios({ ...config, baseURL: BASE_URL, headers })
}
