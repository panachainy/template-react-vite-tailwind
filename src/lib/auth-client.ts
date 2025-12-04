import { anonymousClient } from 'better-auth/client/plugins'
import { createAuthClient } from 'better-auth/react'

export const authClient = createAuthClient({
  plugins: [anonymousClient()],
  baseURL: import.meta.env.VITE_BETTER_AUTH_URL,
  basePath: import.meta.env.VITE_BETTER_AUTH_BASE_PATH,
})
