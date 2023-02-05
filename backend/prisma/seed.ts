import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const seedData = async () => {
  await prisma.vagabond.deleteMany()

  await prisma.roguishFeat.deleteMany({})
  const seededRoguishFeats = await prisma.roguishFeat.createMany({ data: [
    {
      id: 'acrobatics',
      name: 'Acrobatics',
      description: 'Adeptly climbing, vaulting, jumping',
      risks: ['Break something', 'detection', 'plunge into danger']
    },
    {
      id: 'blindside',
      name: 'Blindside',
      description: 'Backstab, murder, sneak attack, suckerpunch',
      risks: ['Draw unwanted attention', 'leave evidence', 'plunge into danger'],
    },
    {
      id: 'counterfeit',
      name: 'Counterfeit',
      description: 'Copying, forgery, fakery',
      risks: ['Leave evidence', 'take too long', 'weak result'],
    },
    {
      id: 'disable_device',
      name: 'Disable Device',
      description: 'Disarming traps, turning off mechanisms',
      risks: ['Break something', 'draw unwanted attention', 'expend resources'],
    },
    {
      id: 'hide',
      name: 'Hide',
      description: 'Disappear from view, remain hidden',
      risks: ['Expend resources', 'leave evidence', 'take too long'],
    },
    {
      id: 'pick_lock',
      name: 'Pick Lock',
      description: 'Open a locked door, chest, etc.',
      risks: ['Break something', 'detection', 'plunge into danger'],
    },
    {
      id: 'pickpocket',
      name: 'Pickpocket',
      description: 'Subtly steal from a pocket',
      risks: ['Leave evidence', 'take too long', 'weak result'],
    },
    {
      id: 'sleight_of_hand',
      name: 'Sleight of Hand',
      description: 'Palming, switching, ditching, flourishes',
      risks: ['Draw unwanted attention', 'leave evidence', 'weak result'],
    },
    {
      id: 'sneak',
      name: 'Sneak',
      description: 'Get into or out of places without being seen',
      risks: ['Break something', 'draw unwanted attention', 'plunge into danger'],
    },
  ]})
  console.log(`There are ${seededRoguishFeats.count} roguish feats are created`)
 
  await prisma.vagabondClass.deleteMany({})
  const seededVagabondClasses = await Promise.all([
    prisma.vagabondClass.create({ data: {
      name: 'adventurer',
      natures: ['extrovert', 'peacemaker'],
      drives: ['ambition', 'clean_paws', 'principles', 'justice'],
      startingCharm: 2,
      startingCunning: 1,
      startingFinesse: 0,
      startingLuck: 0,
      startingMight: -1,
      startingRoguishFeats: {
        connect: [
          { id: 'counterfeit' },
          { id: 'sleight_of_hand' },
        ]
      },
      startingWeaponSkills: ['disarm', 'harry', 'improve', 'parry'],
    }}),
    prisma.vagabondClass.create({ data: {
      name: 'arbiter',
      natures: ['defender', 'punisher'],
      drives: ['justice', 'principles', 'loyalty', 'protection'],
      startingCharm: 1,
      startingCunning: 0,
      startingFinesse: 0,
      startingLuck: -1,
      startingMight: 2,
      startingRoguishFeats: {},
      startingWeaponSkills: ['cleave', 'disarm', 'parry', 'storm_a_group'],
    }}),
    prisma.vagabondClass.create({ data: {
      name: 'harrier',
      natures: ['dutiful', 'competitive'],
      drives: ['crime', 'discovery', 'infamy', 'wanderlust'],
      startingCharm: 0,
      startingCunning: -1,
      startingFinesse: 2,
      startingLuck: 1,
      startingMight: 0,
      startingRoguishFeats: {
        connect: [
          { id: 'acrobatics' },
          { id: 'sneak' },
        ]
      },
      startingWeaponSkills: ['disarm', 'harry', 'quick_shot', 'trick_shot'],
    }}),
    prisma.vagabondClass.create({ data: {
      name: 'ranger',
      natures: ['loner', 'cynic'],
      drives: ['discovery', 'freedom', 'revenge', 'protection'],
      startingCharm: -1,
      startingCunning: 1,
      startingFinesse: 1,
      startingLuck: 0,
      startingMight: 1,
      startingRoguishFeats: {
        connect: [
          { id: 'hide' },
          { id: 'sneak' },
        ]
      },
      startingWeaponSkills: ['cleave', 'disarm', 'harry', 'vicous_strike'],
    }}),
    prisma.vagabondClass.create({ data: {
      name: 'ronin',
      natures: ['survivor', 'pilgrim'],
      drives: ['principles', 'revenge', 'thrills', 'wanderlust'],
      startingCharm: 0,
      startingCunning: 1,
      startingFinesse: 0,
      startingLuck: -1,
      startingMight: 2,
      startingRoguishFeats: { connect: { id: 'blindside' } },
      startingWeaponSkills: ['cleave', 'harry', 'storm_a_group', 'vicous_strike'],
    }}),
    prisma.vagabondClass.create({ data: {
      name: 'scoundrel',
      natures: ['arsonist', 'combative'],
      drives: ['chaos', 'thrills', 'crime', 'infamy'],
      startingCharm: 1,
      startingCunning: -1,
      startingFinesse: 0,
      startingLuck: 2,
      startingMight: 0,
      startingRoguishFeats: {
        connect: [
          { id: 'acrobatics' },
          { id: 'hide' },
          { id: 'sneak' },
        ]
      },
      startingWeaponSkills: ['confuse_senses', 'improvise', 'quick_shot', 'vicous_strike'],
    }}),
    prisma.vagabondClass.create({ data: {
      name: 'thief',
      natures: ['kleptomaniac', 'rebellious'],
      drives: ['freedom', 'greed', 'ambition', 'thrills'],
      startingCharm: 0,
      startingCunning: 0,
      startingFinesse: 2,
      startingLuck: 1,
      startingMight: 1,
      startingRoguishFeats: {},
      startingWeaponSkills: ['confuse_senses', 'improvise', 'parry', 'trick_shot'],
    }}),
    prisma.vagabondClass.create({ data: {
      name: 'tinker',
      natures: ['perfectionist', 'radical'],
      drives: ['greed', 'ambition', 'revenge', 'protection'],
      startingCharm: -1,
      startingCunning: 2,
      startingFinesse: 1,
      startingLuck: 0,
      startingMight: 0,
      startingRoguishFeats: {
        connect: [
          { id: 'counterfeit' },
          { id: 'disable_device' },
          { id: 'pick_lock' },
        ]
      },
      startingWeaponSkills: ['cleave', 'harry', 'improvise', 'trick_shot'],
    }}),
    prisma.vagabondClass.create({ data: {
      name: 'vagrant',
      natures: ['glutton', 'hustler'],
      drives: ['chaos', 'thrills', 'clean_paws', 'wanderlust'],
      startingCharm: 2,
      startingCunning: 1,
      startingFinesse: -1,
      startingLuck: 0,
      startingMight: 0,
      startingRoguishFeats: {
        connect: [
          { id: 'pick_lock' },
          { id: 'sleight_of_hand' },
        ]
      },
      startingWeaponSkills: ['harry', 'improvise', 'quick_shot', 'vicious_strike'],
    }}),
  ])
  console.log(`There are ${seededVagabondClasses.length} classes are created`)
}

seedData()
