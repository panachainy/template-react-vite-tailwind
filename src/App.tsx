import './App.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/Core/Error'
import Example from './pages/Example/Example'

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
      <RouterProvider router={router} />
    </>
  )
}

export default App
