import { users } from '@clerk/clerk-sdk-node';
import { builder } from '../../builder';

export class User {
  id: string
  email: string
  profileImage: string
  username?: string
  firstName?: string
  lastName?: string

  constructor(id: string, email: string, profileImage: string, username?: string, firstName?: string, lastName?: string) {
    this.id = id
    this.email = email
    this.profileImage = profileImage
    this.username = username
    this.firstName = firstName
    this.lastName = lastName
  }
}

export const UserType = builder.node(User, {
  id: { resolve: user => user.id },
  name: 'User',
  fields: t => ({
    email: t.exposeString('email'),
    username: t.exposeString('username', { nullable: true }),
    firstName: t.exposeString('firstName', { nullable: true }),
    lastName: t.exposeString('lastName', { nullable: true }),
    profileImage: t.exposeString('profileImage'),
  }),
  loadOne: async id => {
    const clerkUser = await users.getUser(id)
    return new User(
      id,
      clerkUser.emailAddresses[0].emailAddress,
      clerkUser.profileImageUrl,
      clerkUser.username || undefined,
      clerkUser.firstName || undefined,
      clerkUser.lastName || undefined,
    )
  },
})

builder.prismaObjectField('Vagabond', 'user', t => t.field({
  type: UserType,
  resolve: async vagabond => {
    const clerkUser = await users.getUser(vagabond.userId)
    return {
      id: vagabond.userId,
      email: clerkUser.emailAddresses[0].emailAddress,
      username: clerkUser.username || undefined,
      firstName: clerkUser.firstName || undefined,
      lastName: clerkUser.lastName || undefined,
      profileImage: clerkUser.profileImageUrl
    }
  }
}))
