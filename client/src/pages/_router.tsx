import { createBrowserRouter } from 'react-router-dom';

import IndexPage from './app/index-page';
import { VagabondListPage } from './app/vagabond-list-page';
import { VagabondInfoPage } from './app/vagabond-page';

import { AuthLayout } from './auth/_layout';
import { AppRoot } from './app/_layout';
import { ClerkAuth } from './auth/clerk-auth';
import { BackgroundStep, ClassStep, ReviewStep, StatsStep, VagabondCreatePage } from './app/vagabond-create-page';

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
        path: 'vagabond-create',
        element: <VagabondCreatePage />,
        children: [
          { index: true, element: <ClassStep /> },
          { path: 'background', element: <BackgroundStep /> },
          { path: 'stats', element: <StatsStep /> },
          { path: 'review', element: <ReviewStep /> },
        ]
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
        element: <ClerkAuth />,
      },
    ],
  },
]);
