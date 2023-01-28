import { builder, prisma } from '../../builder';

builder.relayMutationField(
  'vagabondCreate',
  {
    inputFields: (t) => ({
      name: t.string({ required: true }),
    }),
  },
  {
    errors: { types: [Error] },
    resolve: async (_, { input }) => {
      const user = await prisma.user.findFirstOrThrow();

      const vagabond = await prisma.vagabond.create({
        data: {
          name: input.name,
          userId: user.id,
        },
      });

      return {
        vagabond,
      };
    },
  },
  {
    outputFields: (t) => ({
      vagabond: t.prismaField({
        type: 'Vagabond',
        resolve: (_query, result) => result.vagabond,
      }),
    }),
  }
);
