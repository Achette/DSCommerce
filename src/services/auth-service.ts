import QueryString from 'qs'
import jwtDecode from 'jwt-decode'
import { AxiosRequestConfig } from 'axios'
import { requestBackend } from '../utils/requests'
import { CLIENT_ID, CLIENT_SECRET } from '../constants/system'
import { AccessTokenPayloadDTO, CredentialsDTO } from '../models/auth'
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

export const getAccessTokenPayload = (): AccessTokenPayloadDTO | undefined => {
  try {
    const token = accessTokenRepository.getToken()
    return token == null
      ? undefined
      : (jwtDecode(token) as AccessTokenPayloadDTO)
  } catch (error) {
    return undefined
  }
}

export const isAuthenticated = (): boolean => {
  const tokenPayload = getAccessTokenPayload()

  return !!(tokenPayload && tokenPayload.exp * 1000 > Date.now())
}
