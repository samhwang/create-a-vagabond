import { builder } from '../../builder';

builder.prismaNode('Equipment', {
  id: { field: 'id' },
  fields: (t) => ({
    name: t.exposeString('name'),
    maxWear: t.exposeInt('maxWear'),
    value: t.exposeInt('value'),
    load: t.exposeInt('load'),
    range: t.stringList({
      resolve: (equipment) => equipment.range as string[],
    }),
  }),
});

builder.prismaObjectField('Vagabond', 'equipmentConnection', t =>
  t.relatedConnection('equipment', { cursor: 'id' })
)

builder.prismaObjectField('EquipmentTag', 'equipmentConnection', (t) =>
  t.relatedConnection('equipment', { cursor: 'id' })
);

builder.prismaObjectField('WeaponSkill', 'equipmentConnection', (t) =>
  t.relatedConnection('equipment', { cursor: 'id' })
);
