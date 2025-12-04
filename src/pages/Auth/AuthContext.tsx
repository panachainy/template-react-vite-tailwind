import { useContext } from 'react'
import { createContext } from 'react'
import type { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { authClient } from '../../lib/auth-client'
import type { AuthContextType } from './interfaces/AuthContext'
import type { UserInfo } from './interfaces/UserInfo'

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { data: session, isPending } = authClient.useSession()

  const userInfo: UserInfo | null = session || null

  // Function to handle login with different providers
  const loginWithLine = async () => {
    await authClient.signIn.social({
      provider: 'line',
    })
  }

  const loginWithGoogle = async () => {
    await authClient.signIn.social({
      provider: 'google',
    })
  }

  const loginWithEmail = async (email: string, password: string) => {
    await authClient.signIn.email({
      email,
      password,
    })
  }

  const loginAnonymously = async () => {
    await authClient.signIn.anonymous()
  }

  const signUpWithEmail = async (
    email: string,
    password: string,
    name: string,
  ) => {
    await authClient.signUp.email({
      email,
      password,
      name,
    })
  }

  const logout = async () => {
    await authClient.signOut()
  }

  const refreshAccessToken = async () => {
    // Better-auth handles token refresh automatically
    console.log('Token refresh handled by better-auth')
  }

  return (
    <AuthContext.Provider
      value={{
        userInfo,
        isPending,
        loginWithLine,
        loginWithGoogle,
        loginWithEmail,
        loginAnonymously,
        signUpWithEmail,
        logout,
        refreshAccessToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const authCtx = useContext(AuthContext)

  if (!authCtx) {
    throw new Error('PrivateRoute must be used within an AuthProvider')
  }

  return authCtx.userInfo ? children : <Navigate to="auth/login" />
}

const UseAuth = (): AuthContextType => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export { AuthContext, UseAuth }
