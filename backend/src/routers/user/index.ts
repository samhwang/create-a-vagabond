import { t } from '../../builder';
import { me } from './me';

export const userRouter = t.router({
  user: t.mergeRouters(me),
});
