import { useAtomValue } from 'jotai';
import { Navigate, Outlet } from 'react-router-dom';
import { jwtAtom } from '../../providers/auth';

export function AuthLayout() {
  const jwt = useAtomValue(jwtAtom);

  if (jwt) return <Navigate to="/" />;

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Outlet />
    </div>
  );
}
