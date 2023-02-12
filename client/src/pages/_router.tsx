import { createBrowserRouter } from 'react-router-dom';

import IndexPage from './app/index-page';
import { VagabondListPage } from './app/vagabond-list-page';
import { VagabondInfoPage } from './app/vagabond-page';

import { AuthLayout } from './auth/_layout';
import { AppRoot } from './app/_layout';
import { ClerkAuth } from './auth/clerk-auth';

import { VagabondCreatePage } from './app/vagabond-create-page';
import { ClassStep } from './app/vagabond-create-page/ClassStep';
import { BackgroundStep } from './app/vagabond-create-page/BackgroundStep';
import { StatsMovesStep } from './app/vagabond-create-page/StatsMovesStep';
import { ConnectionsStep } from './app/vagabond-create-page/ConnectionsStep';
import { ReviewAndCreateStep } from './app/vagabond-create-page/ReviewAndCreateStep';

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
          { path: 'stats_moves', element: <StatsMovesStep /> },
          { path: 'connections', element: <ConnectionsStep /> },
          { path: 'review_create', element: <ReviewAndCreateStep /> },
        ],
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
