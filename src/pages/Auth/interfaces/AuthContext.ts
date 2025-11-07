import type { UserInfo } from './UserInfo'

export interface AuthContextType {
  userInfo: UserInfo | null
  isPending: boolean
  loginWithLine: () => Promise<void>
  loginWithGoogle: () => Promise<void>
  loginWithEmail: (email: string, password: string) => Promise<void>
  signUpWithEmail: (
    email: string,
    password: string,
    name: string,
  ) => Promise<void>
  logout: () => Promise<void>
  refreshAccessToken: () => Promise<void>
}
