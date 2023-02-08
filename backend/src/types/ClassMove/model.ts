import { builder } from '../../builder';

builder.prismaNode('ClassMove', {
  id: { field: 'id' },
  fields: (t) => ({
    name: t.exposeString('name'),
    description: t.exposeString('description'),
  }),
});

builder.prismaObjectField('VagabondClass', 'classMoveConnection', (t) =>
  t.relatedConnection('classMoves', { cursor: 'id' })
);

builder.prismaObjectField('Vagabond', 'classMoveConnection', (t) =>
  t.relatedConnection('classMoves', { cursor: 'id' })
);
