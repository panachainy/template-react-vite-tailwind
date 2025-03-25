import './App.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './pages/Core/Error'
import Example from './pages/Example/Example'
import { LogsProvider } from './providers/Logs'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Example />,
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
