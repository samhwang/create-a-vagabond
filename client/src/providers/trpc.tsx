import { QueryClient, QueryClientProvider, QueryErrorResetBoundary } from '@tanstack/react-query'
import { createTRPCReact, httpBatchLink } from '@trpc/react-query';
import type { AppRouter } from 'quiz-backend/src/router';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ErrorBoundary, FallbackProps } from 'react-error-boundary'
import { Suspense } from 'react'

export const trpc = createTRPCReact<AppRouter>();

const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: `/trpc`,
    }),
  ],
})

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    }
  }
})

type TRPCProviderProps = {
  children: React.ReactNode | undefined
}

export function TRPCProvider ({ children }: TRPCProviderProps) {
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <QueryErrorBoundary>
          <Suspense fallback='Loading...'>
            {children}
          </Suspense>
        </QueryErrorBoundary>
      </QueryClientProvider>
    </trpc.Provider>
  )
}

type QueryErrorBoundaryProps = {
  children: React.ReactNode | undefined
}

export function QueryErrorBoundary ({ children }: QueryErrorBoundaryProps) {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          onReset={reset}
          fallbackRender={QueryErrorBoundaryFallback}
        >
          {children}
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  )
}

function QueryErrorBoundaryFallback({ resetErrorBoundary }: FallbackProps) {
  return (
    <div>
      There was an error!
      <button
        type='button'
        onClick={() => resetErrorBoundary()}
      >
        Try again
      </button>
    </div>
  )
}