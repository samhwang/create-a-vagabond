import { builder } from '../../builder'

builder.prismaNode('User', {
  id: { field: 'id' },
  fields: t => ({
    email: t.exposeString('email'),
  })
})

builder.prismaObjectField(
  'Vagabond',
  'user',
  t => t.relation('user')
)
