import { t } from './builder';
import { userRouter } from './routers/user';

export const appRouter = t.mergeRouters(userRouter);

export type AppRouter = typeof appRouter;
