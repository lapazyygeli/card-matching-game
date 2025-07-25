import { createBrowserRouter } from 'react-router'
import { Menu } from './pages/Menu'
import { About } from './pages/About'
import { Game } from './pages/Game'
import { Options } from './pages/Options'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Menu,
  },
  {
    path: '/about',
    Component: About,
  },
  {
    path: '/game',
    Component: function Component() {
      return <Game />
    },
  },
  {
    path: '/options',
    Component: function Component() {
      return <Options />
    },
  },
])
