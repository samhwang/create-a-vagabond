import { useNavigate, Outlet } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import { ReactNode } from 'react';

export function PrivateRoute({ children }: { children?: ReactNode }) {
  const navigate = useNavigate();
  const { isSignedIn, isLoaded } = useUser();
  if (!isLoaded || !isSignedIn) {
    return navigate('/');
  }

  return children ?? <Outlet />;
}
