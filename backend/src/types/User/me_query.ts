import { builder, prisma } from '../../builder';

builder.queryField('me', (t) =>
  t.prismaField({
    type: 'User',
    resolve: async (_query, _root, _args, ctx) => {
      if (!ctx.session) throw new Error('Please login!');

      return prisma.user.upsert({
        where: { id: ctx.session.userId },
        update: {},
        create: { id: ctx.session.userId },
      });
    },
  })
);
