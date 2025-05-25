import { DropdownMenu } from '../../../components/DropdownMenu'
import type { NavigationProps } from './types'

export function DesktopNavigation({
  items,
  userInfo,
  logout,
  openDropdowns,
  toggleDropdown,
}: NavigationProps) {
  return (
    <div className="hidden items-center sm:flex">
      <ul className="flex space-x-4">
        {items.map((item) => (
          <li key={item.label} className={item.subItems ? 'relative' : ''}>
            {item.href ? (
              <a
                href={item.href}
                className="rounded px-3 py-2 text-white hover:bg-gray-700"
              >
                {item.label}
              </a>
            ) : (
              <DropdownMenu
                item={item}
                isOpen={openDropdowns[item.label]}
                toggleDropdown={toggleDropdown}
              />
            )}
          </li>
        ))}
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
  )
}
