import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './providers/twind';
import { RouterProvider } from 'react-router-dom';
import { Provider as JotaiProvider } from 'jotai';
import { TRPCProvider } from './providers/trpc';
import { router } from './pages/_router';

import reportWebVitals from './reportWebVitals';

async function renderRoot() {
  if (import.meta.env.DEV) {
    const { worker } = await import('./__mocks__/msw/browser');
    await worker.start();
  }

  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <JotaiProvider>
        <TRPCProvider>
          <RouterProvider router={router} />
        </TRPCProvider>
      </JotaiProvider>
    </StrictMode>
  );
}

renderRoot();

reportWebVitals();
