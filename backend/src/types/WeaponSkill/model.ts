import { WeaponSkillType } from '@prisma/client';
import { builder } from '../../builder';

const WeaponSkillTypeEnum = builder.enumType('WeaponSkillType', {
  values: [WeaponSkillType.NORMAL, WeaponSkillType.SPECIAL] as const,
});

builder.prismaNode('WeaponSkill', {
  id: { field: 'id' },
  fields: (t) => ({
    name: t.exposeString('name'),
    type: t.expose('type', { type: WeaponSkillTypeEnum }),
    description: t.exposeString('description'),
  }),
});

builder.prismaObjectField('VagabondClass', 'weaponSkillConnection', (t) =>
  t.relatedConnection('weaponSkills', { cursor: 'id' })
);

builder.prismaObjectField('Vagabond', 'weaponSkillConnection', (t) =>
  t.relatedConnection('weaponSkills', { cursor: 'id' })
);
