import { Handler } from '@netlify/functions'

import { createYoga } from 'graphql-yoga'
import { schema } from '../schema'

const yoga = createYoga({
  schema,
  graphqlEndpoint: '/.netlify/functions/graphql'
})

export const handler: Handler = async (event, context) => {
  const response = await yoga.fetch(
    event.rawUrl,
    {
      method: event.httpMethod,
      headers: event.headers,
      body: event.body,
    },
    // Third parameter becomes your server context
    context
  )

  const headersObj: Record<string, string> = {}
  response.headers.forEach((value, key) => {
    headersObj[key] = value
  })

  return {
    statusCode: response.status,
    body: await response.text(),
    headers: headersObj,
  }
}
