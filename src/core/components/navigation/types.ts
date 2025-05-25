import type { MenuItem } from '@/components/DropdownMenu'
import type { UserInfo } from '@/pages/Auth/interfaces/UserInfo'

export interface NavigationProps {
  items: MenuItem[]
  userInfo: UserInfo | null
  logout: () => void
  openDropdowns: { [key: string]: boolean }
  toggleDropdown: (label: string) => void
}
