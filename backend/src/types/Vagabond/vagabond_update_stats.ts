import { builder, prisma } from '../../builder';

builder.relayMutationField(
  'vagabondUpdateStats',
  {
    inputFields: (t) => ({
      vagabondId: t.globalID({ required: true }),
      charm: t.int({ defaultValue: 0 }),
      cunning: t.int({ defaultValue: 0 }),
      finesse: t.int({ defaultValue: 0 }),
      luck: t.int({ defaultValue: 0 }),
      might: t.int({ defaultValue: 0 }),
    }),
  },
  {
    errors: { types: [Error] },
    resolve: async (_, { input }) => {
      if (input.vagabondId.typename !== 'Vagabond') {
        throw new Error('ID is wrong');
      }

      const vagabond = await prisma.vagabond.findUniqueOrThrow({
        where: { id: input.vagabondId.id },
      });

      const { charm, cunning, finesse, luck, might } = input;

      const charmChanges = charm! - vagabond.charm
      const cunningChanges = cunning! - vagabond.cunning
      const finesseChanges = finesse! - vagabond.finesse
      const luckChanges = luck! - vagabond.luck
      const mightChanges = might! - vagabond.might

      const totalUsingPoints = charmChanges + cunningChanges + finesseChanges + luckChanges + mightChanges;
      if (totalUsingPoints > vagabond.availablePoints) {
        throw new Error('Using more than availables');
      }

      const updatedVagabond = await prisma.vagabond.update({
        where: { id: input.vagabondId.id },
        data: {
          charm: charm!,
          cunning: cunning!,
          finesse: finesse!,
          luck: luck!,
          might: might!,
          availablePoints: { decrement: totalUsingPoints },
        },
      });

      return {
        vagabond: updatedVagabond,
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
