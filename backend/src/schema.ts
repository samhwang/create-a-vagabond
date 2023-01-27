import { builder, prisma } from './builder'

builder.objectType(Error, {
  name: 'Error',
  fields: (t) => ({
    message: t.exposeString('message'),
  }),
});

builder.queryType({
  fields: (t) => ({
    hello: t.string({
      errors: {
        types: [Error],
      },
      args: {
        name: t.arg.string(),
      },
      resolve: (parent, { name }) => {
        if (name?.slice(0, 1) !== name?.slice(0, 1).toUpperCase()) {
          throw new Error('name must be capitalized');
        }

        return `hello, ${name || 'World'}`;
      }
    }),
    me: t.prismaField({
      type: 'User',
      errors: { types: [Error] },
      resolve: async () => {
        return prisma.user.findFirstOrThrow()
      }
    })
  }),
});

builder.prismaNode('User', {
  id: { field: 'id' },
  fields: t => ({
    email: t.exposeString('email'),
    vagabonds: t.relatedConnection(
      'vagabonds',
      { cursor: 'id' }
    )
  })
})

builder.prismaNode('Vagabond', {
  id: { field: 'id' },
  fields: t => ({
    user: t.relation('user'),
  })
})

export const schema = builder.toSchema();
