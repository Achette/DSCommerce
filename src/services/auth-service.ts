import QueryString from 'qs'
import { AxiosRequestConfig } from 'axios'
import { CredentialsDTO } from '../models/auth'
import { requestBackend } from '../utils/requests'
import { CLIENT_ID, CLIENT_SECRET } from '../constants/system'
import * as accessTokenRepository from '../localStorage/access-token-repository'

export const loginRequest = (loginData: CredentialsDTO) => {
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: 'Basic ' + window.btoa(CLIENT_ID + ':' + CLIENT_SECRET),
  }

  const requestBody = QueryString.stringify({
    ...loginData,
    grant_type: 'password',
  })

  const config: AxiosRequestConfig = {
    method: 'POST',
    url: '/oauth/token',
    data: requestBody,
    headers,
  }

  return requestBackend(config)
}

export const logout = () => {
  accessTokenRepository.removeToken()
}

export const saveAccessToken = (token: string) => {
  accessTokenRepository.saveToken(token)
}

export const getAccessToken = () => {
  return accessTokenRepository.getToken()
}
