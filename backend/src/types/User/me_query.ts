import { builder, prisma } from '../../builder';

builder.queryField('me', (t) =>
  t.prismaField({
    type: 'User',
    resolve: async () => {
      return prisma.user.findFirstOrThrow();
    },
  })
);
