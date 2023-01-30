import { builder } from '../../builder';
import { users } from '@clerk/clerk-sdk-node'
import { User, UserType } from './model'

builder.queryField('me', (t) =>
  t.field({
    type: UserType,
    resolve: async (_root, _args, ctx) => {
      if (!ctx.session) throw new Error('Please login!')

      const clerkUser = await users.getUser(ctx.session.userId)
      return new User(
        ctx.session.userId,
        clerkUser.emailAddresses[0].emailAddress,
        clerkUser.profileImageUrl,
        clerkUser.username || undefined,
        clerkUser.firstName || undefined,
        clerkUser.lastName || undefined,
      )
    },
  })
);
