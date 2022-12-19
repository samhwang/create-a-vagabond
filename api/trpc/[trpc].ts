import nextHandler from "../../server/src/nextHandler";

async function handler(req: any, res: any) {
  return nextHandler(req, res);
}

export default handler;
