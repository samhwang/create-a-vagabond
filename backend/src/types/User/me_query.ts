import { users } from '@clerk/clerk-sdk-node';
import { GraphQLError } from 'graphql';
import { builder } from '../../builder';
import { UserType } from './model';

builder.queryField('me', (t) =>
  t.field({
    type: UserType,
    resolve: async (_root, _args, ctx) => {
      if (!ctx.session) throw new GraphQLError('Please login!');

      const clerkUser = await users.getUser(ctx.session.userId);
      return {
        id: ctx.session.userId,
        email: clerkUser.emailAddresses[0].emailAddress,
        profileImage: clerkUser.profileImageUrl,
        username: clerkUser.username || undefined,
        firstName: clerkUser.firstName || undefined,
        lastName: clerkUser.lastName || undefined,
      }
    },
  })
);
