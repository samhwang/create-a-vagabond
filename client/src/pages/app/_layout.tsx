import { useAtomValue, useSetAtom } from 'jotai'
import { Link, Navigate, Outlet } from 'react-router-dom'
import { Avatar } from '../../components/Avatar'
import { jwtAtom } from '../../providers/auth'
import icon from '../../assets/icon.webp'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { DropdownContent, DropdownItem } from '../../components/Dropdown'
import { IconButton } from '../../components/IconButton'

export function AppRoot() {
  const jwt = useAtomValue(jwtAtom);

  if (!jwt) return <Navigate to="/auth" />;

  return (
    <div>
      <header className='h-16 bg-slate-200 border-2 border-slate-300 flex items-center justify-center px-4'>
        <Link to='/' className='text-teal-500 font-semibold	text-lg'>
          Home
        </Link>
        <div className='grow' />
        
        <DropdownMenu.Root>
          <UserMenuAvatar />
          <UserMenu />
        </DropdownMenu.Root>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  )
}

const UserMenuAvatar = () => (
  <DropdownMenu.Trigger asChild>
    <IconButton>
      <Avatar
        src={icon}
        RootProps={{ className: 'h-full w-auto p-0.5' }}
      />
    </IconButton>
  </DropdownMenu.Trigger>
)

const UserMenu = () => {
  const setJwt = useSetAtom(jwtAtom)

  return (
    <DropdownMenu.Portal>
      <DropdownContent>
        <DropdownItem>
          <Link to='vagabond-list'>
            Your Vagabonds
          </Link>
        </DropdownItem>
        <DropdownItem onClick={() => setJwt(undefined)}>
          Log Out
        </DropdownItem>
      </DropdownContent>
    </DropdownMenu.Portal>
  )
}
