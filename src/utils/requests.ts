import { history } from './history'
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

axios.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    return error
  },
)

axios.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    if (error.response.status === 401) {
      history.push('/login')
    }

    if (error.response.status === 403) {
      return history.push('/catalog')
    }

    return Promise.reject(error)
  },
)
