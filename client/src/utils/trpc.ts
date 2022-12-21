import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from 'quiz-server/src/router';

export const trpc = createTRPCReact<AppRouter>();
