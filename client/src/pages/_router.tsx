import { useAtomValue } from 'jotai';
import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';
import { jwtAtom } from '../providers/auth';

import IndexPage from './index-page';
import { VagabondListPage } from './vagabond/list-page';
import { VagabondInfoPage } from './vagabond/info-page'

import { AuthLayout } from './auth/_layout'
import { LoginPage } from './auth/login-page';
import { RegisterPage } from './auth/register-page';

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
        element: <VagabondInfoPage />,
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
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

function AppRoot() {
  const jwt = useAtomValue(jwtAtom);

  if (!jwt) return <Navigate to="/auth" />;

  return <Outlet />;
}
