import { users } from '@clerk/clerk-sdk-node';
import { builder } from '../../builder';

const UserProfile = builder.simpleObject('UserProfile', {
  fields: (t) => ({
    email: t.string(),
    username: t.string({ nullable: true }),
    firstName: t.string({ nullable: true }),
    lastName: t.string({ nullable: true }),
    profileImage: t.string({ nullable: true }),
  }),
});

builder.prismaNode('User', {
  id: { field: 'id' },
  fields: (t) => ({
    profile: t.field({
      type: UserProfile,
      resolve: async (user) => {
        const clerkUser = await users.getUser(user.id);
        return {
          email: clerkUser.emailAddresses[0].emailAddress,
          username: clerkUser.username,
          firstName: clerkUser.firstName,
          lastName: clerkUser.lastName,
          profileImage: clerkUser.profileImageUrl,
        };
      },
    }),
  }),
});

builder.prismaObjectField('Vagabond', 'user', (t) => t.relation('user'));
