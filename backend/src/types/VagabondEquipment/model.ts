import { builder } from '../../builder';

builder.prismaNode('VagabondEquipment', {
  id: { field: 'id' },
  fields: (t) => ({
    name: t.exposeString('name'),
    wear: t.exposeInt('wear'),
  }),
});

builder.prismaObjectField('EquipmentTag', 'vagabondEquipmentConnection', (t) =>
  t.relatedConnection('equipment', { cursor: 'id' })
);

builder.prismaObjectField('WeaponSkill', 'vagabondEquipmentConnection', (t) =>
  t.relatedConnection('VagabondEquipment', { cursor: 'id' })
);
