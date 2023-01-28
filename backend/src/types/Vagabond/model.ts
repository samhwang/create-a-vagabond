import { builder } from '../../builder';

builder.prismaNode('Vagabond', {
  id: { field: 'id' },
  fields: (t) => ({
    name: t.exposeString('name'),
    charm: t.exposeInt('charm'),
    cunning: t.exposeInt('cunning'),
    finesse: t.exposeInt('finesse'),
    luck: t.exposeInt('luck'),
    might: t.exposeInt('might'),
    availablePoints: t.exposeInt('availablePoints'),
  }),
});

builder.prismaObjectField('User', 'vagabondConnection', (t) => t.relatedConnection('vagabonds', { cursor: 'id' }));
