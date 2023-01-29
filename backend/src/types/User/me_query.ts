import { builder, prisma } from '../../builder';
import { users } from '@clerk/clerk-sdk-node'

builder.queryField('me', (t) =>
  t.prismaField({
    type: 'User',
    resolve: async (_query, _root, _args, ctx) => {
      const clerkUser = ctx.session ? await users.getUser(ctx.session?.userId) : undefined
      console.log(clerkUser)
      return prisma.user.findFirstOrThrow();
    },
  })
);
