import { EquipmentTagType } from '@prisma/client';
import { builder } from '../../builder';

const EquipmentTagTypeEnum = builder.enumType('EquipmentTagType', {
  values: [EquipmentTagType.POSITIVE, EquipmentTagType.NEGATIVE],
});

builder.prismaNode('EquipmentTag', {
  id: { field: 'id' },
  fields: (t) => ({
    name: t.exposeString('name'),
    description: t.exposeString('description'),
    type: t.expose('type', { type: EquipmentTagTypeEnum }),
  }),
});

builder.prismaObjectField('Equipment', 'equipmentConnection', (t) => t.relatedConnection('tags', { cursor: 'id' }));

builder.prismaObjectField('VagabondEquipment', 'equipmentConnection', (t) =>
  t.relatedConnection('tags', { cursor: 'id' })
);
