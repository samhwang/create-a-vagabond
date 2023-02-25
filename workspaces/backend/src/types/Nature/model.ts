import { builder } from '../../builder';

builder.prismaNode('Nature', {
  id: { field: 'id' },
  fields: (t) => ({
    name: t.exposeString('name'),
    description: t.exposeString('description'),
  }),
});

builder.prismaObjectField('VagabondClass', 'natureConnection', (t) => t.relatedConnection('natures', { cursor: 'id' }));

builder.prismaObjectField('Vagabond', 'nature', (t) => t.relation('nature'));
