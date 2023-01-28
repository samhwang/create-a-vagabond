import { builder, prisma } from '../../builder'

builder.relayMutationField(
  'vagabondUpdateStats',
  {
    inputFields: t => ({
      vagabondId: t.globalID({ required: true }),
      charm: t.int({ defaultValue: 0 }),
      cunning: t.int({ defaultValue: 0 }),
      finesse: t.int({ defaultValue: 0 }),
      luck: t.int({ defaultValue: 0 }),
      might: t.int({ defaultValue: 0 }),
    })
  },
  {
    errors: { types: [Error] },
    resolve: async (_, { input }) => {
      if (input.vagabondId.typename !== 'Vagabond') {
        throw new Error('ID is wrong')
      }

      const vagabond = await prisma.vagabond.findUniqueOrThrow({
        where: { id: input.vagabondId.id }
      })

      const { charm, cunning, finesse, luck, might } = input
      const totalUsingPoints = charm! + cunning! + finesse! + luck! + might!
      if (totalUsingPoints > vagabond.availablePoints) {
        throw new Error('Using more than availables')
      }

      const updatedVagabond = await prisma.vagabond.update({
        where: { id: input.vagabondId.id },
        data: {
          charm: { increment: charm! },
          cunning: { increment: cunning! },
          finesse: { increment: finesse! },
          luck: { increment: luck! },
          might: { increment: might! },
        }
      })

      return {
        vagabond: updatedVagabond
      }
    }
  },
  {
    outputFields: t => ({
      vagabond: t.prismaField({
        type: 'Vagabond',
        resolve: (_query, result) => result.vagabond
      })
    })
  },
)