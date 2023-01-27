import { builder } from '../../builder'

builder.prismaNode('User', {
  id: { field: 'id' },
  fields: t => ({
    email: t.exposeString('email'),
    vagabonds: t.relatedConnection(
      'vagabonds',
      { cursor: 'id' }
    )
  })
})
