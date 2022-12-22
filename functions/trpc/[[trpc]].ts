import { PagesFunction } from '@cloudflare/workers-types';
import trpcPlugin from 'cloudflare-pages-plugin-trpc';
import { appRouter } from 'quiz-backend/src/router';

export const onRequest: PagesFunction = async (context) => trpcPlugin({
  router: appRouter,
  endpoint: '/trpc',
})(context);
