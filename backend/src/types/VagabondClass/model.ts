import { builder } from '../../builder'

builder.prismaNode('VagabondClass', {
  id: { field: 'id' },
  fields: t => ({
    name: t.exposeString('name'),
    startingCharm: t.exposeInt('startingCharm'),
    startingCunning: t.exposeInt('startingCunning'),
    startingFinesse: t.exposeInt('startingFinesse'),
    startingLuck: t.exposeInt('startingLuck'),
    startingMight: t.exposeInt('startingMight'),
    natures: t.stringList({
      resolve: vc => vc.natures as string[]
    }),
    drives: t.stringList({
      resolve: vc => vc.drives as string[]
    }),
    startingRoguishFeats: t.stringList({
      resolve: vc => vc.startingRoguishFeats as string[]
    }),
    startingWeaponSkills: t.stringList({
      resolve: vc => vc.startingWeaponSkills as string[]
    }),
  })
})

builder.prismaObjectField('Vagabond', 'class', t => t.relation('class'))
