import { createBrowserRouter } from 'react-router-dom';

import IndexPage from './app/index-page';
import { VagabondListPage } from './app/vagabond-list-page';
import { VagabondInfoPage } from './app/vagabond-page'

import { AuthLayout } from './auth/_layout'
import { LoginPage } from './auth/login-page';
import { RegisterPage } from './auth/register-page';
import { AppRoot } from './app/_layout'

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

