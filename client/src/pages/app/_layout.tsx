import { useAtomValue } from 'jotai'
import { Navigate, Outlet } from 'react-router-dom'
import { jwtAtom } from '../../providers/auth'

export function AppRoot() {
  const jwt = useAtomValue(jwtAtom);

  if (!jwt) return <Navigate to="/auth" />;

  return (
    <div>
      <header className='h-10 bg-slate-200	border-2 border-slate-300'>
        header
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        footer
      </footer>
    </div>
  )
}
