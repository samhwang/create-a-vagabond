import { createBrowserRouter } from 'react-router-dom';

import { HomePage } from './home';

import { AppRoot } from './app/_layout';
import { OverviewPage } from './app/overview';
import { ProfilePage } from './app/profile-page';
import { VagabondListPage } from './app/vagabond-list-page';
import { VagabondInfoPage } from './app/vagabond-page';
import { VagabondCreatePage } from './app/vagabond-create-page';
import { ClassStep } from './app/vagabond-create-page/ClassStep';
import { BackgroundStep } from './app/vagabond-create-page/BackgroundStep';
import { StatsMovesStep } from './app/vagabond-create-page/StatsMovesStep';
import { ConnectionsStep } from './app/vagabond-create-page/ConnectionsStep';
import { BuyItemStep } from './app/vagabond-create-page/BuyItemStep';
import { ReviewAndCreateStep } from './app/vagabond-create-page/ReviewAndCreateStep';

import { AuthLayout } from './auth/_layout';
import { ClerkAuth } from './auth/clerk-auth';
import { VerifyPage } from './auth/verify';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/app',
    element: <AppRoot />,
    children: [
      {
        index: true,
        element: <OverviewPage />,
      },
      {
        path: 'profile',
        element: <ProfilePage />,
      },
      {
        path: 'vagabond-create',
        element: <VagabondCreatePage />,
        children: [
          { index: true, element: <ClassStep /> },
          { path: 'background', element: <BackgroundStep /> },
          { path: 'stats_moves', element: <StatsMovesStep /> },
          { path: 'connections', element: <ConnectionsStep /> },
          { path: 'buy_items', element: <BuyItemStep /> },
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
      {
        path: 'verify',
        element: <VerifyPage />,
      },
    ],
  },
]);
