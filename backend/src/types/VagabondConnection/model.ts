import { builder } from '../../builder';

builder.prismaNode('VagabondConnection', {
  id: { field: 'id' },
  fields: (t) => ({
    type: t.exposeString('type'),
    notes: t.exposeString('notes'),
    to: t.exposeString('to'),
  }),
});

builder.prismaObjectField('Vagabond', 'connectionConnection', (t) =>
  t.relatedConnection('connections', { cursor: 'id' })
);
