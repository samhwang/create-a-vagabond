import { builder, prisma } from '../../builder'

builder.queryField('roguishFeatConnection', t => t.prismaConnection(
  {
    type: 'RoguishFeat',
    cursor: 'id',
    resolve: query => prisma.roguishFeat.findMany(query)
  }
))
