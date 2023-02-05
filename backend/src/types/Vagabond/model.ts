import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection';
import { builder, prisma } from '../../builder';
import { UserType } from '../User/model';

const VagabondType = builder.prismaNode('Vagabond', {
  id: { field: 'id' },
  fields: (t) => ({
    name: t.exposeString('name'),
    value: t.exposeInt('value'),
    carrying: t.exposeInt('carrying'),
    burdened: t.int({ resolve: ({ might }) => might + 4 }),
    max: t.int({ resolve: ({ might }) => (might + 4) * 2 }),
    charm: t.exposeInt('charm'),
    cunning: t.exposeInt('cunning'),
    finesse: t.exposeInt('finesse'),
    luck: t.exposeInt('luck'),
    might: t.exposeInt('might'),
    availablePoints: t.exposeInt('availablePoints'),
  }),
});

builder.objectField(UserType, 'vagabondConnection', (t) =>
  t.connection({
    type: VagabondType,
    resolve: async (user, { first, last, before, after }) => {
      const connection = await findManyCursorConnection(
        (args) =>
          prisma.vagabond.findMany({
            ...args,
            where: { userId: user.id },
          }),
        () =>
          prisma.vagabond.count({
            where: { userId: user.id },
          }),
        { first, after, last, before }
      );
      return connection;
    },
  })
);
