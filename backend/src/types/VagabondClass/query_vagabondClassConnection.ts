import { builder, prisma } from '../../builder'

builder.queryField('vagabondClassConnection', t => t.prismaConnection(
  {
    type: 'VagabondClass',
    cursor: 'id',
    resolve: query => prisma.vagabondClass.findMany(query)
  }
))
