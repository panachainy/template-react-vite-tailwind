import './App.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './core/Error'
import { MainLayout } from './layouts/Main'
import Example from './pages/Example/Example'
import PokemonPage from './pages/Pokemon/Index'
import { LogsProvider } from '@/providers/Logs'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <MainLayout>
        <Example />
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
])

function App() {
  return (
    <>
      <LogsProvider>
        <RouterProvider router={router} />
      </LogsProvider>
    </>
  )
}

export default App
