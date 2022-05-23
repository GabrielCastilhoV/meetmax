import {
  FiGrid,
  FiUser,
  FiUsers,
  FiMessageSquare,
  FiBell,
  FiSettings
} from 'react-icons/fi'

import { BiWorld } from 'react-icons/bi'

type NavigationRoutes = {
  title: string
  url: string
  icon: React.ReactNode
}

export const navigationRoutes: NavigationRoutes[] = [
  {
    title: 'Feed',
    url: '/',
    icon: <FiGrid />
  },
  {
    title: 'Community',
    url: '/community',
    icon: <FiUsers />
  },
  {
    title: 'Messages',
    url: '/messages',
    icon: <FiMessageSquare />
  },
  {
    title: 'Notification',
    url: '/notification',
    icon: <FiBell />
  },
  {
    title: 'Explore',
    url: '/explore',
    icon: <BiWorld />
  },
  {
    title: 'Profile',
    url: '/profile',
    icon: <FiUser />
  },
  {
    title: 'Settings',
    url: '/settings',
    icon: <FiSettings />
  }
]
