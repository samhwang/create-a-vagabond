import { t } from '../../builder';

export const me = t.router({
  me: t.procedure.query(() => 'me yeah'),
});
