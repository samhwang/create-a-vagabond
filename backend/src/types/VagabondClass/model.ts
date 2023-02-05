import { builder } from '../../builder';

builder.prismaNode('VagabondClass', {
  id: { field: 'id' },
  fields: (t) => ({
    name: t.exposeString('name'),
    startingCharm: t.exposeInt('startingCharm'),
    startingCunning: t.exposeInt('startingCunning'),
    startingFinesse: t.exposeInt('startingFinesse'),
    startingLuck: t.exposeInt('startingLuck'),
    startingMight: t.exposeInt('startingMight'),
    startingValue: t.exposeInt('startingValue'),
  }),
});

builder.prismaObjectField('Vagabond', 'class', (t) => t.relation('class'));
