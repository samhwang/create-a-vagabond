import { builder, prisma } from '../../builder';

builder.queryField('equipmentConnection', (t) =>
  t.prismaConnection({
    type: 'Equipment',
    cursor: 'id',
    resolve: (query) => prisma.equipment.findMany(query),
  })
);
