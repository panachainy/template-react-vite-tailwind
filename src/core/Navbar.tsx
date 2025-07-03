import type { MenuItem } from '@/components/DropdownMenu'
import { UseAuth } from '@/pages/Auth/AuthContext'
import { useState } from 'react'
import { StatusIndicator } from '../components/StatusIndicator'
import { DesktopNavigation } from './components/navigation/DesktopNavigation'
import { MobileNavigation } from './components/navigation/MobileNavigation'

const navigationItems: MenuItem[] = [
  {
    label: 'Login',
    href: '/auth/login',
  },
  {
    label: 'Dashboard',
    href: '/auth/dashboard',
  },
  {
    label: 'Examples',
    subItems: [
      { label: 'Pokemon', href: '/pokemon' },
      { label: 'Zod', href: '/zod' },
      { label: 'Styled', href: '/styled' },
      { label: 'Shadcn', href: '/shadcn' },
    ],
  },
]

function Navbar() {
  const { userInfo, logout } = UseAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdowns, setOpenDropdowns] = useState<{
    [key: string]: boolean
  }>({})

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleDropdown = (label: string) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [label]: !prev[label],
    }))
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
            <StatusIndicator isLoggedIn={!!userInfo} />
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
        <DesktopNavigation
          items={navigationItems}
          userInfo={userInfo}
          logout={logout}
          openDropdowns={openDropdowns}
          toggleDropdown={toggleDropdown}
        />

        {/* Mobile navigation */}
        <MobileNavigation
          isOpen={isMenuOpen}
          items={navigationItems}
          userInfo={userInfo}
          logout={logout}
          openDropdowns={openDropdowns}
          toggleDropdown={toggleDropdown}
        />
      </div>
    </nav>
  )
}

export default Navbar
