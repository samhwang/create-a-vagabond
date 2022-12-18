import * as dotenv from 'dotenv';
import * as dotenvExpand from 'dotenv-expand';
import fastify, { FastifyRequest, FastifyReply } from 'fastify';
import { fastifyTRPCPlugin } from '@trpc/server/adapters/fastify';
import { appRouter } from './router';
import { createContext } from './context';

const config = dotenv.config();
dotenvExpand.expand(config);

const app = fastify({
  logger: true,
  maxParamLength: 5000,
});

app.register(fastifyTRPCPlugin, {
  prefix: '/api/trpc',
  trpcOptions: { router: appRouter, createContext },
});

export async function serverHandler(req: FastifyRequest, res: FastifyReply) {
  await app.ready();
  app.server.emit('request', req, res);
}

export default app;
