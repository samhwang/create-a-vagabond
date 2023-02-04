import { builder } from './builder';

builder.objectType(Error, {
  name: 'Error',
  fields: (t) => ({
    message: t.exposeString('message'),
  }),
});

builder.queryType();
builder.mutationType();

import './types/User';
import './types/Vagabond';
import './types/VagabondClass';

export const schema = builder.toSchema();
