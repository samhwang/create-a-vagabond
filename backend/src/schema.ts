import { builder } from './builder'

builder.objectType(Error, {
  name: 'Error',
  fields: (t) => ({
    message: t.exposeString('message'),
  }),
});

builder.queryType()

import './types/User'
import './types/Vagabond'

export const schema = builder.toSchema();
