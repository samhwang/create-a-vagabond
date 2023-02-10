import { builder } from '../../builder';

const ReputationType = builder.prismaNode('Reputation', {
  id: { field: 'id' },
  fields: (t) => ({
    faction: t.exposeString('faction'),
    score: t.exposeInt('score'),
    prestige: t.exposeInt('prestige'),
    notoriety: t.exposeInt('notoriety'),
  }),
});

builder.prismaObjectField('Vagabond', 'reputation', (t) => t.relatedConnection('reputations', { cursor: 'id' }));
