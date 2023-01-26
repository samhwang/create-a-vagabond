import { createSchema } from 'graphql-yoga'
 
export const schema = createSchema({
  typeDefs: `
    type Query {
      hello: String
      hi: String
    }
  `,
  resolvers: {
    Query: {
      hello: () => 'world',
      hi: () => 'world',
    }
  }
})
