import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const seedClasses = async () => {
  await prisma.vagabondClass.deleteMany({})

  const seeded = await prisma.vagabondClass.createMany({
    data: [
      {
        name: 'adventurer',
        natures: ['extrovert', 'peacemaker'],
        drives: ['ambition', 'clean_paws', 'principles', 'justice'],
        startingCharm: 2,
        startingCunning: 1,
        startingFinesse: 0,
        startingLuck: 0,
        startingMight: -1,
        startingRoguishFeats: ['counterfeit', 'sleight_of_hand'],
        startingWeaponSkills: ['disarm', 'harry', 'improve', 'parry'],
      },
      {
        name: 'arbiter',
        natures: ['defender', 'punisher'],
        drives: ['justice', 'principles', 'loyalty', 'protection'],
        startingCharm: 1,
        startingCunning: 0,
        startingFinesse: 0,
        startingLuck: -1,
        startingMight: 2,
        startingRoguishFeats: [],
        startingWeaponSkills: ['cleave', 'disarm', 'parry', 'storm_a_group'],
      },
      {
        name: 'harrier',
        natures: ['dutiful', 'competitive'],
        drives: ['crime', 'discovery', 'infamy', 'wanderlust'],
        startingCharm: 0,
        startingCunning: -1,
        startingFinesse: 2,
        startingLuck: 1,
        startingMight: 0,
        startingRoguishFeats: ['acrobatics', 'sneak'],
        startingWeaponSkills: ['disarm', 'harry', 'quick_shot', 'trick_shot'],
      },
      {
        name: 'ranger',
        natures: ['loner', 'cynic'],
        drives: ['discovery', 'freedom', 'revenge', 'protection'],
        startingCharm: -1,
        startingCunning: 1,
        startingFinesse: 1,
        startingLuck: 0,
        startingMight: 1,
        startingRoguishFeats: ['hide', 'sneak'],
        startingWeaponSkills: ['cleave', 'disarm', 'harry', 'vicous_strike'],
      },
      {
        name: 'ronin',
        natures: ['survivor', 'pilgrim'],
        drives: ['principles', 'revenge', 'thrills', 'wanderlust'],
        startingCharm: 0,
        startingCunning: 1,
        startingFinesse: 0,
        startingLuck: -1,
        startingMight: 2,
        startingRoguishFeats: ['blindside'],
        startingWeaponSkills: ['cleave', 'harry', 'storm_a_group', 'vicous_strike'],
      },
      {
        name: 'scoundrel',
        natures: ['arsonist', 'combative'],
        drives: ['chaos', 'thrills', 'crime', 'infamy'],
        startingCharm: 1,
        startingCunning: -1,
        startingFinesse: 0,
        startingLuck: 2,
        startingMight: 0,
        startingRoguishFeats: ['acrobatics', 'hide', 'sneak'],
        startingWeaponSkills: ['confuse_senses', 'improvise', 'quick_shot', 'vicous_strike'],
      },
      {
        name: 'thief',
        natures: ['kleptomaniac', 'rebellious'],
        drives: ['freedom', 'greed', 'ambition', 'thrills'],
        startingCharm: 0,
        startingCunning: 0,
        startingFinesse: 2,
        startingLuck: 1,
        startingMight: 1,
        startingRoguishFeats: [],
        startingWeaponSkills: ['confuse_senses', 'improvise', 'parry', 'trick_shot'],
      },
      {
        name: 'tinker',
        natures: ['perfectionist', 'radical'],
        drives: ['greed', 'ambition', 'revenge', 'protection'],
        startingCharm: -1,
        startingCunning: 2,
        startingFinesse: 1,
        startingLuck: 0,
        startingMight: 0,
        startingRoguishFeats: ['counterfeit', 'disable_device', 'pick_lock'],
        startingWeaponSkills: ['cleave', 'harry', 'improvise', 'trick_shot'],
      },
      {
        name: 'vagrant',
        natures: ['glutton', 'hustler'],
        drives: ['chaos', 'thrills', 'clean_paws', 'wanderlust'],
        startingCharm: 2,
        startingCunning: 1,
        startingFinesse: -1,
        startingLuck: 0,
        startingMight: 0,
        startingRoguishFeats: ['pick_lock', 'sleight_of_hand'],
        startingWeaponSkills: ['harry', 'improvise', 'quick_shot', 'vicious_strike'],
      },
    ]
  })
  console.log(`There are ${seeded.count} classes are created`)
}

seedClasses()
