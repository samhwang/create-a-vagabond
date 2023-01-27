import { builder } from './builder';

import './types/User';
import './types/Vagabond';

builder.objectType(Error, {
  name: 'Error',
  fields: (t) => ({
    message: t.exposeString('message'),
  }),
});

builder.queryType();

export const schema = builder.toSchema();
