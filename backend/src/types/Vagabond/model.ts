import { builder } from '../../builder';

builder.prismaNode('Vagabond', {
  id: { field: 'id' },
  fields: (t) => {
    return {};
  },
});

builder.prismaObjectField('User', 'vagabondConnection', (t) => t.relatedConnection('vagabonds', { cursor: 'id' }));
