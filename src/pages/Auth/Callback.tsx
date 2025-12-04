import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'

export function AuthCallbackPage() {
  useEffect(() => {
    // Better-auth handles the OAuth callback automatically
    // This page can be used for loading state during callback processing
    console.log('OAuth callback processed by better-auth')
  }, [])

  // Redirect to dashboard after callback is processed
  return <Navigate to="/auth/dashboard" replace />
}
