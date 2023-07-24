export type CredentialsDTO = {
  username: string
  password: string
}

type RoleEnum = 'ROLE_ADMIN' | 'ROLE_CLIENT'

export type AccessTokenPayloadDTO = {
  exp: number
  user_name: string
  authorities: RoleEnum
}
