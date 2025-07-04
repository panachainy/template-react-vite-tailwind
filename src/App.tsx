import './App.css'

import { LogsProvider } from '@/providers/Logs'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './core/Error'
import { MainLayout } from './layouts/Main'
import { AuthProvider } from './pages/Auth/AuthContext'
import { AuthDashboardPage } from './pages/Auth/AuthDashboardPage'
import { AuthCallbackPage } from './pages/Auth/Callback'
import { LoginPage } from './pages/Auth/LoginPage'
import Home from './pages/Home/Home'
import PokemonPage from './pages/Pokemon/Index'
import ShadcnDemoPage from './pages/ShadcnDemo'
import { StyledExamplePage } from './pages/Styled/Index'
import ZodExample from './pages/Zod/Index'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <MainLayout>
        <Home />
      </MainLayout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: 'auth/login',
    element: (
      <MainLayout>
        <LoginPage />
      </MainLayout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: 'auth/callback',
    element: (
      <MainLayout>
        <AuthCallbackPage />
      </MainLayout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: 'auth/dashboard',
    element: (
      <MainLayout>
        <AuthDashboardPage />
      </MainLayout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: '/pokemon',
    element: (
      <MainLayout>
        <PokemonPage />
      </MainLayout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: '/zod',
    element: (
      <MainLayout>
        <ZodExample />
      </MainLayout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: '/styled',
    element: (
      <MainLayout>
        <StyledExamplePage />
      </MainLayout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: '/shadcn',
    element: (
      <MainLayout>
        <ShadcnDemoPage />
      </MainLayout>
    ),
    errorElement: <ErrorPage />,
  },
])

function App() {
  return (
    <AuthProvider>
      <LogsProvider>
        <RouterProvider router={router} />
      </LogsProvider>
    </AuthProvider>
  )
}

export default App
