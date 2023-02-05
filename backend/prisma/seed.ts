import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const seedData = async () => {
  await prisma.vagabond.deleteMany()

  await prisma.nature.deleteMany({})
  const seededNatures = await prisma.nature.createMany({ data: [
    {
      id: 'extrovert',
      name: 'Extrovert',
      description: 'Clear your exhaustion track when you share a moment of real warmth, friendship, or enjoyment with someone.',
    },
    {
      id: 'peacemaker',
      name: 'Peacemaker',
      description: 'Clear your exhaustion track when you resolve a dangerous conflict nonviolently.',
    },

    {
      id: 'defender',
      name: 'Defender',
      description: `Clear your exhaustion track when you put yourself in harm's way to defend someone against injustice or dire threat.`,
    },
    {
      id: 'punisher',
      name: 'Punisher',
      description: 'Clear your exhaustion track when you tell a powerful or dangerous villain to their face that you will punish them.',
    },

    {
      id: 'dutiful',
      name: 'Dutiful',
      description: 'Clear your exhaustion track when you take on a dangerous or difficult task on behalf of another.',
    },
    {
      id: 'competitive',
      name: 'Competitive',
      description: 'Clear your exhaustion track when you take dramatically unnecessary risks to show off.',
    },

    {
      id: 'loner',
      name: 'Loner',
      description: 'Clear your exhaustion track when you enter a dangerous situation alone, without backup or assistance.',
    },
    {
      id: 'cynic',
      name: 'Cynic',
      description: 'Clear your exhaustion track when you openly and directly ask dangerous questions about an accepted "truth".',
    },

    {
      id: 'survivor',
      name: 'Survivor',
      description: `Clear your exhaustion track when you try to flee or cover allies' flight from a dangerous or overwhelming situation.`,
    },
    {
      id: 'pilgrim',
      name: 'Pilgrim',
      description: `Clear your exhaustion track when you find an expert in a skill you don't possess.`,
    },

    {
      id: 'arsonist',
      name: 'Arsonist',
      description: 'Clear your exhaustion track when you use needlessly destructive or damaging methods to solve a problem.',
    },
    {
      id: 'combative',
      name: 'Combative',
      description: 'Clear your exhaustion track when you try to start a fight against overwhelming opposition.',
    },

    {
      id: 'kleptomaniac',
      name: 'Kleptomaniac',
      description: 'Clear your exhaustion track when you try to selfishly steal something valuable or important.',
    },
    {
      id: 'rebellious',
      name: 'Rebellious',
      description: 'Clear your exhaustion track when you grievously insult, defy, or anger figures of authority.',
    },

    {
      id: 'perfectionist',
      name: 'Perfectionist',
      description: `Clear your exhaustion track when you replace someone else's existing tool or resource with something truly great.`,
    },
    {
      id: 'radical',
      name: 'Radical',
      description: 'Clear your exhaustion track when you espouse dangerous ideas to the wrong audience.',
    },

    {
      id: 'glutton',
      name: 'Glutton',
      description: 'Clear your exhaustion track when you overindulge on vices like drink, food, and gambling.',
    },
    {
      id: 'hustler',
      name: 'Hustler',
      description: 'Clear your exhaustion track when you try to spring a con on a powerful or dangerous mark.',
    },
  ]})
  console.log(`There are ${seededNatures.count} natures are created`)

  // drives

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
      id: 'adventurer',
      name: 'adventurer',
      startingCharm: 2,
      startingCunning: 1,
      startingFinesse: 0,
      startingLuck: 0,
      startingMight: -1,
      drives: ['ambition', 'clean_paws', 'principles', 'justice'],
      natures: {
        connect: [
          { id: 'extrovert' },
          { id: 'peacemaker' },
        ]
      },
      startingRoguishFeats: {
        connect: [
          { id: 'counterfeit' },
          { id: 'sleight_of_hand' },
        ]
      },
      startingWeaponSkills: ['disarm', 'harry', 'improve', 'parry'],
    }}),
    prisma.vagabondClass.create({ data: {
      id: 'arbiter',
      name: 'arbiter',
      startingCharm: 1,
      startingCunning: 0,
      startingFinesse: 0,
      startingLuck: -1,
      startingMight: 2,

      natures: {
        connect: [
          { id: 'defender' },
          { id: 'punisher' },
        ]
      },
      drives: ['justice', 'principles', 'loyalty', 'protection'],
      startingRoguishFeats: {},
      startingWeaponSkills: ['cleave', 'disarm', 'parry', 'storm_a_group'],
    }}),
    prisma.vagabondClass.create({ data: {
      id: 'harrier',
      name: 'harrier',
      drives: ['crime', 'discovery', 'infamy', 'wanderlust'],
      startingCharm: 0,
      startingCunning: -1,
      startingFinesse: 2,
      startingLuck: 1,
      startingMight: 0,
      natures: {
        connect: [
          { id: 'dutiful' },
          { id: 'competitive' },
        ]
      },
      startingRoguishFeats: {
        connect: [
          { id: 'acrobatics' },
          { id: 'sneak' },
        ]
      },
      startingWeaponSkills: ['disarm', 'harry', 'quick_shot', 'trick_shot'],
    }}),
    prisma.vagabondClass.create({ data: {
      id: 'ranger',
      name: 'ranger',
      drives: ['discovery', 'freedom', 'revenge', 'protection'],
      startingCharm: -1,
      startingCunning: 1,
      startingFinesse: 1,
      startingLuck: 0,
      startingMight: 1,
      natures: {
        connect: [
          { id: 'loner' },
          { id: 'cynic' },
        ]
      },
      startingRoguishFeats: {
        connect: [
          { id: 'hide' },
          { id: 'sneak' },
        ]
      },
      startingWeaponSkills: ['cleave', 'disarm', 'harry', 'vicous_strike'],
    }}),
    prisma.vagabondClass.create({ data: {
      id: 'ronin',
      name: 'ronin',
      drives: ['principles', 'revenge', 'thrills', 'wanderlust'],
      startingCharm: 0,
      startingCunning: 1,
      startingFinesse: 0,
      startingLuck: -1,
      startingMight: 2,
      natures: {
        connect: [
          { id: 'survivor' },
          { id: 'pilgrim' },
        ]
      },
      startingRoguishFeats: { connect: { id: 'blindside' } },
      startingWeaponSkills: ['cleave', 'harry', 'storm_a_group', 'vicous_strike'],
    }}),
    prisma.vagabondClass.create({ data: {
      id: 'scoundrel',
      name: 'scoundrel',
      drives: ['chaos', 'thrills', 'crime', 'infamy'],
      startingCharm: 1,
      startingCunning: -1,
      startingFinesse: 0,
      startingLuck: 2,
      startingMight: 0,
      natures: {
        connect: [
          { id: 'arsonist' },
          { id: 'combative' },
        ]
      },
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
      id: 'thief',
      name: 'thief',
      drives: ['freedom', 'greed', 'ambition', 'thrills'],
      startingCharm: 0,
      startingCunning: 0,
      startingFinesse: 2,
      startingLuck: 1,
      startingMight: 1,
      natures: {
        connect: [
          { id: 'kleptomaniac' },
          { id: 'rebellious' },
        ]
      },
      startingRoguishFeats: {},
      startingWeaponSkills: ['confuse_senses', 'improvise', 'parry', 'trick_shot'],
    }}),
    prisma.vagabondClass.create({ data: {
      id: 'tinker',
      name: 'tinker',
      drives: ['greed', 'ambition', 'revenge', 'protection'],
      startingCharm: -1,
      startingCunning: 2,
      startingFinesse: 1,
      startingLuck: 0,
      startingMight: 0,
      natures: {
        connect: [
          { id: 'perfectionist' },
          { id: 'radical' },
        ]
      },
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
      id: 'vagrant',
      name: 'vagrant',
      drives: ['chaos', 'thrills', 'clean_paws', 'wanderlust'],
      startingCharm: 2,
      startingCunning: 1,
      startingFinesse: -1,
      startingLuck: 0,
      startingMight: 0,
      natures: {
        connect: [
          { id: 'glutton' },
          { id: 'hustler' },
        ]
      },
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
