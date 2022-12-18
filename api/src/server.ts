import * as dotenv from 'dotenv';
import * as dotenvExpand from 'dotenv-expand';
import fastify from 'fastify';
import { fastifyTRPCPlugin } from '@trpc/server/dist/adapters/fastify';
import { appRouter } from './router';
import { createContext } from './context';

const config = dotenv.config();
dotenvExpand.expand(config);

const server = fastify({
  logger: true,
  maxParamLength: 5000,
});

server.register(fastifyTRPCPlugin, {
  prefix: '/trpc',
  trpcOptions: { router: appRouter, createContext },
});

export default server;
