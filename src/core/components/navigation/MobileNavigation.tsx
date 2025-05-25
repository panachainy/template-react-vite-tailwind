import { DropdownMenu } from '../../../components/DropdownMenu'
import { StatusIndicator } from '../../../components/StatusIndicator'
import type { NavigationProps } from './types'

interface MobileNavigationProps extends NavigationProps {
  isOpen: boolean
}

export function MobileNavigation({
  isOpen,
  items,
  userInfo,
  logout,
  openDropdowns,
  toggleDropdown,
}: MobileNavigationProps) {
  return (
    <div
      className={`${
        isOpen ? 'block' : 'hidden'
      } absolute top-[60px] right-0 left-0 bg-gray-800 p-4 sm:hidden`}
    >
      <div className="mb-4 flex items-center border-gray-700 border-b pb-4">
        <StatusIndicator isLoggedIn={!!userInfo} />
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
        {items.map((item) => (
          <li key={item.label}>
            {item.href ? (
              <a
                href={item.href}
                className="block rounded px-3 py-2 text-white hover:bg-gray-700"
              >
                {item.label}
              </a>
            ) : (
              <DropdownMenu
                item={item}
                isOpen={openDropdowns[item.label]}
                toggleDropdown={toggleDropdown}
                isMobile
              />
            )}
          </li>
        ))}
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
  )
}
