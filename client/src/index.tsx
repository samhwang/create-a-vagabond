import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { RouterProvider } from 'react-router-dom';

import { AuthProvider } from './providers/auth';

import { router } from './pages/_router';

import reportWebVitals from './reportWebVitals';
import { RelayProvider } from './providers/relay';
import { ThemeProvider } from './providers/theme';

async function renderRoot() {
  if (import.meta.env.DEV) {
    const { worker } = await import('./__mocks__/msw/browser');
    await worker.start();
  }

  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <ThemeProvider>
        <AuthProvider>
          <RelayProvider>
            <RouterProvider router={router} />
          </RelayProvider>
        </AuthProvider>
      </ThemeProvider>
    </StrictMode>
  );
}

renderRoot();

reportWebVitals();
