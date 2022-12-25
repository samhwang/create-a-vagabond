import { inferAsyncReturnType } from '@trpc/server';
import { CreateFastifyContextOptions } from '@trpc/server/adapters/fastify';

export function createContext({ req }: CreateFastifyContextOptions) {
  const user = { name: req.headers.username ?? 'anonymous' };
  return { req, user };
}

export type Context = inferAsyncReturnType<typeof createContext>;
