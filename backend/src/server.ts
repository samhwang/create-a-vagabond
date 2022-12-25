import * as dotenv from 'dotenv';
import * as dotenvExpand from 'dotenv-expand';
import fastify from 'fastify';
import { fastifyTRPCPlugin } from '@trpc/server/adapters/fastify';
import { appRouter } from './router';
import { createContext } from './context';

const config = dotenv.config();
dotenvExpand.expand(config);

export const app = fastify({
  logger: true,
  maxParamLength: 5000,
});

app.register(fastifyTRPCPlugin, {
  prefix: '/.netlify/functions/trpc',
  trpcOptions: { router: appRouter, createContext },
});

export async function start() {
  try {
    await app.listen({ port: 3000 });
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
}
