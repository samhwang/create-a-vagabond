import { FastifyReply, FastifyRequest } from 'fastify';
import server from '../server';

async function handler(req: FastifyRequest, reply: FastifyReply) {
  await server.ready();
  server.server.emit('request', req, reply);
}

export default handler;
