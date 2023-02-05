import { builder, prisma } from '../../builder';

builder.relayMutationField(
  'vagabondCreate',
  {
    inputFields: (t) => ({
      name: t.string({ required: true }),
      class: t.globalID({ required: true }),
      nature: t.globalID({ required: true }),
      drives: t.globalIDList({ required: true }),
      roguishFeats: t.globalIDList({ required: true }),
      weaponSkill: t.globalID({ required: true }),
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
        include: {
          roguishFeats: true
        }
      })
      if (!vagabondClass) throw new Error(`Class ${input.class.id} is not existed`)
      if (input.charm < vagabondClass.startingCharm) throw new Error('Stats cannot be lower than starting point')
      if (input.cunning < vagabondClass.startingCunning) throw new Error('Stats cannot be lower than starting point')
      if (input.finesse < vagabondClass.startingFinesse) throw new Error('Stats cannot be lower than starting point')
      if (input.luck < vagabondClass.startingLuck) throw new Error('Stats cannot be lower than starting point')
      if (input.might < vagabondClass.startingMight) throw new Error('Stats cannot be lower than starting point')

      const featIds = input.roguishFeats.map(feat => feat.id)
      const startingFeatIds = vagabondClass.roguishFeats.map(feat => feat.id)
      startingFeatIds.forEach(startingFeatId => {
        if (!featIds.includes(startingFeatId)) throw new Error('Selected feats must include class starting feats')
      })

      const vagabond = await prisma.vagabond.create({
        data: {
          name: input.name,
          userId: ctx.session.userId,
          vagabondClassId: input.class.id,

          charm: input.charm,
          cunning: input.cunning,
          finesse: input.finesse,
          luck: input.luck,
          might: input.might,

          natureId: input.nature.id,
          drives: { connect: input.drives.map(({ id }) => ({ id })) },
          roguishFeats: { connect: featIds.map(id => ({ id })) },
          weaponSkills: { connect: { id: input.weaponSkill.id } }
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
