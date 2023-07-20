import { getAccessToken } from './auth-service'
import { requestBackend } from '../utils/requests'

export const findMe = async () => {
  const headers = {
    Authorization: 'Bearer ' + getAccessToken(),
  }

  return requestBackend({ url: `/users/me`, headers })
}
