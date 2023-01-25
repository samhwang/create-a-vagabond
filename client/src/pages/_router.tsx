import { useAtomValue } from 'jotai';
import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';
import { jwtAtom } from '../providers/auth';

import IndexPage from './index-page';
import { LoginPage } from './login-page';
import { RegisterPage } from './register-page';
import { VagabondListPage } from './vagabond-list-page';
import { VagabondPage } from './vagabond-page';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppRoot />,
    children: [
      {
        index: true,
        element: <IndexPage />,
      },
      {
        path: 'vagabond-list',
        element: <VagabondListPage />,
      },
      {
        path: 'vagabond-list/:id',
        element: <VagabondPage />,
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthRoot />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
    ],
  },
]);

function AuthRoot() {
  const jwt = useAtomValue(jwtAtom);

  if (jwt) return <Navigate to="/" />;

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Outlet />
    </div>
  );
}

function AppRoot() {
  const jwt = useAtomValue(jwtAtom);

  if (!jwt) return <Navigate to="/auth" />;

  return <Outlet />;
}

// /auth
//   /login
//   /register

//   /
//   /vagabond-list
//   /vagabond-list/:id
