import { requestBackend } from '../utils/requests'
import { AxiosRequestConfig } from 'axios'

export const findMe = async () => {
  const config: AxiosRequestConfig = {
    url: '/users/me',
    withCredentials: true,
  }

  return requestBackend(config)
}
