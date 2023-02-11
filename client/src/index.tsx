import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { ThemeProvider } from './providers/theme';
import { AuthProvider } from './providers/auth';
import { RelayProvider } from './providers/relay';
import './providers/i18n';
import { router } from './pages/_router';
import reportWebVitals from './reportWebVitals';
import { Provider as JotaiProvider } from 'jotai';

async function renderRoot() {
  if (import.meta.env.DEV) {
    const { worker } = await import('./__mocks__/msw/browser');
    await worker.start();
  }

  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <ThemeProvider>
        <SnackbarProvider>
          <AuthProvider>
            <JotaiProvider>
              <RelayProvider>
                <RouterProvider router={router} />
              </RelayProvider>
            </JotaiProvider>
          </AuthProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </StrictMode>
  );
}

renderRoot();

reportWebVitals();
