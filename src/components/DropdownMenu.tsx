export interface SubMenuItem {
  label: string
  href: string
}

export interface MenuItem {
  label: string
  href?: string
  subItems?: SubMenuItem[]
}

interface DropdownMenuProps {
  item: MenuItem
  isOpen: boolean
  toggleDropdown: (label: string) => void
  isMobile?: boolean
}

export function DropdownMenu({
  item,
  isOpen,
  toggleDropdown,
  isMobile = false,
}: DropdownMenuProps) {
  return (
    <>
      <button
        type="button"
        onClick={() => toggleDropdown(item.label)}
        className={`flex ${
          isMobile ? 'w-full' : ''
        } items-center rounded px-3 py-2 text-white hover:bg-gray-700`}
      >
        {item.label}
        <svg
          className={`ml-1 h-4 w-4 transform transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          role="img"
        >
          <title>Toggle {item.label} menu</title>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && item.subItems && (
        <SubMenuItems items={item.subItems} isMobile={isMobile} />
      )}
    </>
  )
}

interface SubMenuItemsProps {
  items: SubMenuItem[]
  isMobile?: boolean
}

function SubMenuItems({ items, isMobile = false }: SubMenuItemsProps) {
  const containerClass = isMobile
    ? 'mt-2 ml-4 space-y-2'
    : 'absolute left-0 mt-2 w-48 rounded-md bg-gray-700 py-2 shadow-lg'

  return (
    <div className={containerClass}>
      {items.map((subItem) => (
        <a
          key={subItem.label}
          href={subItem.href}
          className={`${
            isMobile ? 'block rounded px-3 py-2' : 'block px-4 py-2 text-sm'
          } text-white hover:bg-gray-600`}
        >
          {subItem.label}
        </a>
      ))}
    </div>
  )
}
