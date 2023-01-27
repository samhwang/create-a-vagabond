import { builder, prisma } from '../../builder'

builder.queryField('me', t => t.prismaField({
  type: 'User',
  errors: { types: [Error] },
  resolve: async () => {
    return prisma.user.findFirstOrThrow()
  }
}))
