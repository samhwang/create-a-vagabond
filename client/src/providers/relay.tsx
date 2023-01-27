import { Environment, Network, RecordSource, Store, FetchFunction } from 'relay-runtime';

import { RelayEnvironmentProvider } from 'react-relay';
import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

const fetchQuery: FetchFunction = async (operation, variables, cacheConfig, uploadables) => {
  return fetch('/.netlify/functions/graphql', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
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

export function RelayProvider({ children }: { children: React.ReactNode }) {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <Suspense>
        <ErrorBoundary fallback={<>Something went wrong when fetching!</>}>{children}</ErrorBoundary>
      </Suspense>
    </RelayEnvironmentProvider>
  );
}
