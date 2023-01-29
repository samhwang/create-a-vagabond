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
    resolve: async (_, { input }, ctx) => {
      if (!ctx.session?.userId) throw new Error('Please login!')

      const vagabond = await prisma.vagabond.create({
        data: {
          name: input.name,
          userId: ctx.session.userId,
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
