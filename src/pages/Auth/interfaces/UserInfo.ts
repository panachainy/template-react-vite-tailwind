export interface UserInfo {
  user: {
    id: string
    email: string
    name: string
    image?: string | null
    emailVerified: boolean
    createdAt: Date
    updatedAt: Date
  }
  session: {
    id: string
    userId: string
    expiresAt: Date
    ipAddress?: string | null
    userAgent?: string | null
  }
}
