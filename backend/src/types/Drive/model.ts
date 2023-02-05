import { builder } from '../../builder'

builder.prismaNode('Drive', {
  id: { field: 'id' },
  fields: t => ({
    name: t.exposeString('name'),
    description: t.exposeString('description'),
  })
})

builder.prismaObjectField(
  'VagabondClass',
  'driveConnection',
  t => t.relatedConnection(
    'drives',
    { cursor: 'id' },
  )
)
