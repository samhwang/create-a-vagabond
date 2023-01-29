import { Handler } from '@netlify/functions';
import { sessions } from '@clerk/clerk-sdk-node'

import { createYoga } from 'graphql-yoga';
import { schema } from '../schema';

const yoga = createYoga({
  schema,
  graphqlEndpoint: '/.netlify/functions/graphql',
});

export const handler: Handler = async (event, context) => {
  const { sessionid, authorization } = event.headers
  const clientToken = authorization?.replace('Bearer ', '')
  const session = clientToken && sessionid
    ? await sessions
      .verifySession(sessionid, clientToken)
      .catch(error => {
        console.log(error)
        return undefined
      })
    : undefined

  const response = await yoga.fetch(
    event.rawUrl,
    {
      method: event.httpMethod,
      headers: event.headers,
      body: event.body,
    },
    // Third parameter becomes your server context
    {
      ...context,
      session
    }
  );

  const headersObj: Record<string, string> = {};
  response.headers.forEach((value, key) => {
    headersObj[key] = value;
  });

  return {
    statusCode: response.status,
    body: await response.text(),
    headers: headersObj,
  };
};
