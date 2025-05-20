import { UseAuth } from '@/pages/Auth/AuthContext'
import { useState } from 'react'

function Navbar() {
  const { userInfo, logout } = UseAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isExamplesOpen, setIsExamplesOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleExamples = () => {
    setIsExamplesOpen(!isExamplesOpen)
  }

  return (
    <nav className="bg-gray-800 px-4 py-3">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center">
          <div className="font-bold text-white text-xl">
            <a
              href="/"
              className="rounded px-3 py-2 text-white hover:bg-gray-700"
            >
              Home
            </a>
          </div>

          <div className="ml-6 hidden items-center sm:flex">
            <span
              className={`mr-2 inline-block h-3 w-3 rounded-full ${
                userInfo ? 'bg-green-500' : 'bg-gray-400'
              }`}
              title={userInfo ? 'Logged in' : 'Not logged in'}
            />
            <span className="font-medium text-sm text-white">
              {userInfo ? 'Logged in' : 'Not logged in'}
            </span>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={toggleMenu}
          className="inline-flex items-center rounded-lg p-2 text-gray-400 text-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 sm:hidden"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
            role="img"
          >
            <title>Menu toggle icon</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'
              }
            />
          </svg>
        </button>

        {/* Desktop navigation */}
        <div className="hidden items-center sm:flex">
          <ul className="flex space-x-4">
            <li>
              <a
                href="/auth/login"
                className="rounded px-3 py-2 text-white hover:bg-gray-700"
              >
                Login
              </a>
            </li>
            <li>
              <a
                href="/auth/dashboard"
                className="rounded px-3 py-2 text-white hover:bg-gray-700"
              >
                Dashboard
              </a>
            </li>
            <li className="relative">
              <button
                type="button"
                onClick={toggleExamples}
                className="flex items-center rounded px-3 py-2 text-white hover:bg-gray-700"
              >
                Examples
                <svg
                  className={`ml-1 h-4 w-4 transform transition-transform ${isExamplesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  role="img"
                >
                  <title>Toggle examples menu</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isExamplesOpen && (
                <div className="absolute left-0 mt-2 w-48 rounded-md bg-gray-700 py-2 shadow-lg">
                  <a
                    href="/pokemon"
                    className="block px-4 py-2 text-sm text-white hover:bg-gray-600"
                  >
                    Pokemon
                  </a>
                  <a
                    href="/zod"
                    className="block px-4 py-2 text-sm text-white hover:bg-gray-600"
                  >
                    Zod
                  </a>
                  <a
                    href="/styled"
                    className="block px-4 py-2 text-sm text-white hover:bg-gray-600"
                  >
                    Styled
                  </a>
                </div>
              )}
            </li>
          </ul>

          {userInfo && (
            <button
              type="button"
              onClick={logout}
              className="ml-4 rounded bg-red-500 px-4 py-2 text-white transition hover:bg-red-600"
            >
              Logout
            </button>
          )}
        </div>

        {/* Mobile navigation */}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } absolute top-[60px] right-0 left-0 bg-gray-800 p-4 sm:hidden`}
        >
          <div className="mb-4 flex items-center border-gray-700 border-b pb-4">
            <span
              className={`mr-2 inline-block h-3 w-3 rounded-full ${
                userInfo ? 'bg-green-500' : 'bg-gray-400'
              }`}
            />
            <span className="font-medium text-sm text-white">
              {userInfo ? 'Logged in' : 'Not logged in'}
            </span>
          </div>
          <ul className="space-y-2">
            <li>
              <a
                href="/"
                className="block rounded px-3 py-2 text-white hover:bg-gray-700"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/auth/login"
                className="block rounded px-3 py-2 text-white hover:bg-gray-700"
              >
                Login
              </a>
            </li>
            <li>
              <a
                href="/auth/dashboard"
                className="block rounded px-3 py-2 text-white hover:bg-gray-700"
              >
                Dashboard
              </a>
            </li>
            <li>
              <button
                type="button"
                onClick={toggleExamples}
                className="flex w-full items-center rounded px-3 py-2 text-white hover:bg-gray-700"
              >
                Examples
                <svg
                  className={`ml-1 h-4 w-4 transform transition-transform ${isExamplesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  role="img"
                >
                  <title> Toggle examples menu</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isExamplesOpen && (
                <div className="mt-2 ml-4 space-y-2">
                  <a
                    href="/pokemon"
                    className="block rounded px-3 py-2 text-white hover:bg-gray-700"
                  >
                    Pokemon
                  </a>
                  <a
                    href="/zod"
                    className="block rounded px-3 py-2 text-white hover:bg-gray-700"
                  >
                    Zod
                  </a>
                  <a
                    href="/styled"
                    className="block rounded px-3 py-2 text-white hover:bg-gray-700"
                  >
                    Styled
                  </a>
                </div>
              )}
            </li>
          </ul>
          {userInfo && (
            <button
              type="button"
              onClick={logout}
              className="mt-4 w-full rounded bg-red-500 px-4 py-2 text-white transition hover:bg-red-600"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
