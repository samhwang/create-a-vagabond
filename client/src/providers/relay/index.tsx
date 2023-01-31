import { Environment, Network, RecordSource, Store, FetchFunction, RelayFeatureFlags } from 'relay-runtime';
import Clerk from '@clerk/clerk-js';

import { RelayEnvironmentProvider } from 'react-relay';
import { Suspense, ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

RelayFeatureFlags.ENABLE_RELAY_RESOLVERS = true;

const clerkPublicKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
const clerk = new Clerk(clerkPublicKey);

const fetchQuery: FetchFunction = async (operation, variables, cacheConfig, uploadables) => {
  await clerk.load();
  if (!clerk.session) {
    clerk.openSignIn()
    return
  }

  const session_id = clerk.session.id;
  const jwt = localStorage.getItem('clerk-db-jwt');
  return fetch('/.netlify/functions/graphql', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      session_id,
      ...(jwt ? { authorization: `Bearer ${jwt}` } : {}),
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then((response) => response.json());
};

const network = Network.create(fetchQuery);
const store = new Store(new RecordSource());

const environment = new Environment({
  network,
  store,
});

export function RelayProvider({ children }: { children: ReactNode }) {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <Suspense>
        <ErrorBoundary fallback={<>Something went wrong when fetching!</>}>{children}</ErrorBoundary>
      </Suspense>
    </RelayEnvironmentProvider>
  );
}
