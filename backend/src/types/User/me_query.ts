import { builder, prisma } from '../../builder';
import { users } from '@clerk/clerk-sdk-node'

builder.queryField('me', (t) =>
  t.prismaField({
    type: 'User',
    resolve: async (_query, _root, _args, ctx) => {
      if (!ctx.session) throw new Error('Please login!')

      const clerkUser = await users.getUser(ctx.session?.userId)
      if (!clerkUser) {
        console.log('Something went wrong!')
        console.log(ctx.session)
        throw new Error('Something went wrong')
      }

      const user = await prisma.user.upsert({
        where: {
          id: ctx.session.userId
        },
        update: {
          email: clerkUser.emailAddresses[0].emailAddress,
          username: clerkUser.username || undefined,
          firstName: clerkUser.firstName || undefined,
          lastName: clerkUser.lastName || undefined,
          profileImage: clerkUser.profileImageUrl,
        },
        create: {
          id: ctx.session.userId,
          email: clerkUser.emailAddresses[0].emailAddress,
          username: clerkUser.username || undefined,
          firstName: clerkUser.firstName,
          lastName: clerkUser.lastName,
          profileImage: clerkUser.profileImageUrl,
        },
      })

      return user
    },
  })
);
