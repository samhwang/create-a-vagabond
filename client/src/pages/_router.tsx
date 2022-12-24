import { createBrowserRouter } from 'react-router-dom';

import IndexPage from './index-page';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <IndexPage />,
  },
]);
