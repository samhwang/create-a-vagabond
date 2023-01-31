import { users } from '@clerk/clerk-sdk-node';
import { GraphQLError } from 'graphql';
import { builder } from '../../builder';
import { UserType, User } from './model';

builder.queryField('me', (t) =>
  t.field({
    type: UserType,
    resolve: async (_root, _args, ctx) => {
      if (!ctx.session) throw new GraphQLError('Please login!');

      const clerkUser = await users.getUser(ctx.session.userId);
      // return {
      //   id: ctx.session.userId,
      //   email: clerkUser.emailAddresses[0].emailAddress,
      //   profileImage: clerkUser.profileImageUrl,
      //   username: clerkUser.username,
      //   firstName: clerkUser.firstName,
      //   lastName: clerkUser.lastName,
      // }
      return new User(
        ctx.session.userId,
        clerkUser.emailAddresses[0].emailAddress,
        clerkUser.profileImageUrl,
        clerkUser.username || undefined,
        clerkUser.firstName || undefined,
        clerkUser.lastName || undefined
      );
    },
  })
);
