import { builder, prisma } from '../../builder';

builder.relayMutationField(
  'vagabondCreate',
  {
    inputFields: (t) => ({
      name: t.string({ required: true }),
      class: t.globalID({ required: true }),
      nature: t.string({ required: true }),
      drives: t.stringList({ required: true }),
      // stats
      charm: t.int({ required: true }),
      cunning: t.int({ required: true }),
      finesse: t.int({ required: true }),
      luck: t.int({ required: true }),
      might: t.int({ required: true }),
    }),
  },
  {
    errors: { types: [Error] },
    resolve: async (_, { input }, ctx) => {
      if (!ctx.session?.userId) throw new Error('Please login!');

      if (input.drives.length !== 2) throw new Error('Pick 2 drives');

      if (input.charm > 2) throw new Error('Charm cannot be more than 2');
      if (input.cunning > 2) throw new Error('Cunning cannot be more than 2');
      if (input.finesse > 2) throw new Error('Finesse cannot be more than 2');
      if (input.luck > 2) throw new Error('Luck cannot be more than 2');
      if (input.might > 2) throw new Error('Might cannot be more than 2');

      const vagabondClass = await prisma.vagabondClass.findUnique({
        where: { id: input.class.id },
      });
      if (!vagabondClass) throw new Error(`Class ${input.class.id} is not existed`);
      if (input.charm < vagabondClass.startingCharm) throw new Error('Stats cannot be lower than starting point');
      if (input.cunning < vagabondClass.startingCunning) throw new Error('Stats cannot be lower than starting point');
      if (input.finesse < vagabondClass.startingFinesse) throw new Error('Stats cannot be lower than starting point');
      if (input.luck < vagabondClass.startingLuck) throw new Error('Stats cannot be lower than starting point');
      if (input.might < vagabondClass.startingMight) throw new Error('Stats cannot be lower than starting point');

      const vagabond = await prisma.vagabond.create({
        data: {
          name: input.name,
          userId: ctx.session.userId,
          vagabondClassId: input.class.id,
          nature: input.nature,
          drives: input.drives,
          charm: input.charm,
          cunning: input.cunning,
          finesse: input.finesse,
          luck: input.luck,
          might: input.might,
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
