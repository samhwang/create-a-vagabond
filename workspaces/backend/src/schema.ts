import { builder } from './builder';

builder.objectType(Error, {
  name: 'Error',
  fields: (t) => ({
    message: t.exposeString('message'),
  }),
});

builder.queryType();
builder.mutationType();

import './types/ClassMove';
import './types/Drive';
import './types/Equipment'
import './types/EquipmentTag'
import './types/Nature';
import './types/Reputation';
import './types/RoguishFeat';
import './types/User';
import './types/Vagabond';
import './types/VagabondClass';
import './types/VagabondConnection';
import './types/VagabondEquipment'
import './types/WeaponSkill';

export const schema = builder.toSchema();
