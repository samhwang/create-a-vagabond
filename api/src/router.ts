import { initTRPC } from '@trpc/server';
import { z } from 'zod';

const t = initTRPC.create();

export const appRouter = t.router({
  helloWorld: t.procedure.input(z.string()).query((req) => {
    const { input } = req;
    return `hello ${input}`;
  }),
});

export type AppRouter = typeof appRouter;
