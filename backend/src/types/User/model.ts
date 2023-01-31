import clerk from '@clerk/clerk-sdk-node';
import { builder } from '../../builder';

type User = {
  id: string;
  email: string;
  profileImage: string;
  username?: string;
  firstName?: string;
  lastName?: string;
};

export const UserType: PothosSchemaTypes.ObjectRef<User, User> = builder.node('User' as any, {
  id: { resolve: (user) => user.id },
  name: 'User',
  fields: (t) => ({
    email: t.exposeString('email'),
    username: t.exposeString('username', { nullable: true }),
    firstName: t.exposeString('firstName', { nullable: true }),
    lastName: t.exposeString('lastName', { nullable: true }),
    profileImage: t.exposeString('profileImage'),
  }),
  loadOne: async (id) => {
    const clerkUser = await clerk.users.getUser(id);
    return {
      id,
      email: clerkUser.emailAddresses[0].emailAddress,
      profileImage: clerkUser.profileImageUrl,
      username: clerkUser.username || undefined,
      firstName: clerkUser.firstName || undefined,
      lastName: clerkUser.lastName || undefined,
    };
  },
});

builder.prismaObjectField('Vagabond', 'user', (t) =>
  t.field({
    type: UserType,
    resolve: async (vagabond) => {
      const clerkUser = await clerk.users.getUser(vagabond.userId);
      return {
        id: vagabond.userId,
        email: clerkUser.emailAddresses[0].emailAddress,
        username: clerkUser.username || undefined,
        firstName: clerkUser.firstName || undefined,
        lastName: clerkUser.lastName || undefined,
        profileImage: clerkUser.profileImageUrl,
      };
    },
  })
);
