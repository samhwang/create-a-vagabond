import { builder, prisma } from '../../builder';

builder.queryField('me', (t) =>
  t.prismaField({
    type: 'User',
    resolve: async (_query, _root, _args, ctx) => {
      console.log(ctx.session?.userId)
      return prisma.user.findFirstOrThrow();
    },
  })
);
