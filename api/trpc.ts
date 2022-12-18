import { serverHandler } from '../server/src/server';

async function handler(req: any, res: any) {
  return serverHandler(req, res);
}

export default handler;
