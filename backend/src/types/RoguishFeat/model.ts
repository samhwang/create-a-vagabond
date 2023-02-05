import { builder } from '../../builder'

builder.prismaNode('RoguishFeat', {
  id: { field: 'id' },
  fields: t => ({
    name: t.exposeString('name'),
    description: t.exposeString('description'),
    risks: t.stringList({
      resolve: feat => feat.risks as string[]
    })
  })
})

builder.prismaObjectField(
  'VagabondClass',
  'roguishFeatConnection',
  t => t.relatedConnection(
    'roguishFeats',
    { cursor: 'id' },
  )
)
