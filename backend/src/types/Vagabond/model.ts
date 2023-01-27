import { builder } from '../../builder'

builder.prismaNode('Vagabond', {
  id: { field: 'id' },
  fields: t => ({
    user: t.relation('user'),
  })
})
