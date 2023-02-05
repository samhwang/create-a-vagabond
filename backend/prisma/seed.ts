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

  await prisma.drive.deleteMany({})
  const seededDrives = await prisma.drive.createMany({ data: [
    {
      id: 'ambition',
      name: 'Ambition',
      description: 'Advance when you increase your reputation with any faction.',
    },
    {
      id: 'clean_paws',
      name: 'Clean Paws',
      description: 'Advance when you accomplish an illicit, criminal goal while maintaining a believable veneer of innocence.',
    },
    {
      id: 'principles',
      name: 'Principles',
      description: 'Advance when you express or embody your moral principles at great cost to yourself or your allies.',
    },
    {
      id: 'justice',
      name: 'Justice',
      description: 'Advance when you achieve justice for someone wronged by a powerful, wealthy, or high-status individual.',
    },
    {
      id: 'loyalty',
      name: 'Loyalty',
      description: `You're loyal to someone; name them. Advance when you obey their order at a great cost to yourself.`,
    },
    {
      id: 'protection',
      name: 'Protection',
      description: 'Name your ward. Advance when you protect them from significant danger, or when time passes and your ward is safe.',
    },
    {
      id: 'crime',
      name: 'Crime',
      description: 'Advance when you illicitly score a significant prize or pull off an illegal caper against impressive odds.',
    },
    {
      id: 'discovery',
      name: 'Discovery',
      description: 'Advance when you encounter a new wonder or ruin in the forests.',
    },
    {
      id: 'infamy',
      name: 'Infamy',
      description: 'Advance when you decrease your reputation with any faction.',
    },
    {
      id: 'wanderlust',
      name: 'Wanderlust',
      description: 'Advance when you finish a journey to a clearing.',
    },
    {
      id: 'freedom',
      name: 'Freedom',
      description: 'Advance when you free a group of denizens from oppression.',
    },
    {
      id: 'revenge',
      name: 'Revenge',
      description: 'Name your foe. Advance when you cause significant harm to them or their interests.',
    },
    {
      id: 'thrills',
      name: 'Thrills',
      description: 'Advance when you escape from certain death or incarceration.',
    },
    {
      id: 'chaos',
      name: 'Chaos',
      description: 'Advance when you topple a tyrannical or dangerously overbearing figure or order.',
    },
    {
      id: 'greed',
      name: 'Greed',
      description: 'Advance when you secure a serious payday or treasure.',
    },
  ]})
  console.log(`There are ${seededDrives.count} drives are created`)

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
 
  await prisma.weaponSkill.deleteMany({})
  const seededweaponSkills = await prisma.weaponSkill.createMany({ data: [
    {
      id: 'engage_in_melee',
      name: 'Engage in Melee',
      type: 'NORMAL',
      description: 'When you engage an enemy in melee at close or intimate range, roll with Might. On a hit, trade harm. On a 10+, pick 3. On a 7-9, pick 1. ["inflict serious (+1) harm", "suffer little (-1) harm", "shift your range one step", "impress, dismay, or frighten your foe"]',
    },
    {
      id: 'grapple_an_nemy',
      name: 'Grapple an Enemy',
      type: 'NORMAL',
      description: 'When you grapple with an enemy at intimate range, roll with Might. On a hit, you choose simultaneously. Continue making choices until someone disengages, falls unconscious, or dies. On a 10+, you make one choice first, before beginning to make simultaneous choices.["you strike a fast blow; inflict injury", "you wear them down; they mark exhaustion", "you exploit weakness; mark exhaustion to inflict 2-injury", "you withdraw; disengage to close range"]',
    },
    {
      id: 'target_someone',
      name: 'Target Someone',
      type: 'NORMAL',
      description: 'When you target a vulnerable foe at far range, roll with Finesse. On a hit, you inflict injury. On a 10+, you can strike again before they get to cover—inflict injury again—or keep your position hidden, your choice.'
    },
    {
      id: 'cleave',
      name: 'Cleave',
      type: 'SPECIAL',
      description: 'When you cleave armored foes at close range, mark exhaustion and roll with Might. On a hit, you smash through their defenses and equipment; inflict 3-wear. On a 7-9, you overextend your weapon or yourself: mark wear or end up in a bad spot, your choice.'
    },
    {
      id: 'confuse_senses',
      name: 'Confuse Senses',
      type: 'SPECIAL',
      description: `When you throw something to confuse an opponent's senses at close or intimate range, roll with Finesse. On a hit, you've thrown them off balance, blinded them, deafened them, or confused them, and given yourself an opportunity. On a 10+, they have to take some time to get their bearings and restore their senses before they can act clearly again. On a 7-9, you have just a few moments.`
    },
    {
      id: 'disarm',
      name: 'Disarm',
      type: 'SPECIAL',
      description: `When you target an opponent's weapon with your strikes at close range, roll with Finesse. On a hit, they have to mark 2-exhaustion or lose their weapon—it's well out of reach. On a 10+, they have to mark 3-exhaustion instead of 2.`,
    },
    {
      id: 'harry_a_group',
      name: 'Harry a Group',
      type: 'SPECIAL',
      description: 'When you harry a group of enemies at far range, mark wear and roll with Cunning. On a 10+, both. On a 7-9, choose 1.["inflict 2-morale harm", "they are pinned or blocked"]',
    },
    {
      id: 'improvise_weapon',
      name: 'Improvise Weapon',
      type: 'SPECIAL',
      description: `When you make a weapon out of improvised materials around you, roll with Cunning. On a hit, you make a weapon; the GM will tell you its range tag and at least one other beneficial tag based on the materials you used. On a 7-9, the weapon also has a weakness tag.`,
    },
    {
      id: 'parry',
      name: 'Parry',
      type: 'SPECIAL',
      description: `When you try to parry the attacks of an enemy at close range, mark exhaustion and roll with Finesse. On a hit, you consume their attention. On a 10+, all 3. On a 7-9, pick 1.["you inflict morale or exhaustion (GM's choice)", "you disarm your opponent; their weapon is out of hand, but in reach", "you don't suffer any harm"]`,
    },
    {
      id: 'quick_shot',
      name: 'Quick Shot',
      type: 'SPECIAL',
      description: `When you fire a snap shot at an enemy at close range, roll with Luck. On a hit, inflict injury. On a 7-9, choose 1. On a 10+, choose 2.["you don't mark wear", "you don't mark exhaustion", "you move quickly and change your position (and, if you choose, range)", "you keep your target at bay—they don't move"]`,
    },
    {
      id: 'storm_a_group',
      name: 'Storm a Group',
      type: 'SPECIAL',
      description: `When you storm a group of foes in melee, mark exhaustion and roll with Might. On a hit, trade harm. On a 10+, choose 2. On a 7-9, choose 1.["you show them up; you inflict 2-morale harm", "you keep them off balance and confused; you inflict 2-exhaustion", "you avoid their blows to the best of your ability; you suffer little (-1) harm.", "you use them against each other; mark exhaustion again and they inflict their harm against themselves"]`
    },
    {
      id: 'trick_shot',
      name: 'Trick Shot',
      type: 'SPECIAL',
      description: `When you fire a clever shot designed to take advantage of the environment at any range, mark wear and roll with Finesse. On a 7-9, choose 2. On a 10+, choose 3.["your shot lands in any target of your choice within range, even if it's behind cover or hidden (inflicting injury or wear if appropriate)", "your shot strikes a second available target of your choice", "your shot cuts something, breaks something, or knocks something over, your choice", "your shot distracts an opponent and provides an opportunity"]`,
    },
    {
      id: 'vicious_strike',
      name: 'Vicious Strike',
      type: 'SPECIAL',
      description: `When you viciously strike an opponent where they are weak at intimate or close range, mark exhaustion and roll with Might. On a hit, they suffer serious (+1) harm and cannot mark wear on their armor to block it. On a 10+, you get away with the strike. On a 7-9, they score a blow against you as well.`
    }
  ]})
  console.log(`There are ${seededweaponSkills.count} weapon skills are created`)

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
      natures: {
        connect: [
          { id: 'extrovert' },
          { id: 'peacemaker' },
        ]
      },
      drives: {
        connect: [
          { id: 'ambition' },
          { id: 'clean_paws' },
          { id: 'principles' },
          { id: 'justice' },
        ]
      },
      roguishFeats: {
        connect: [
          { id: 'counterfeit' },
          { id: 'sleight_of_hand' },
        ]
      },
      weaponSkills: {
        connect: [
          { id: 'disarm' },
          { id: 'harry_a_group' },
          { id: 'improvise_weapon' },
          { id: 'parry' },
        ]
      },
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
      drives: {
        connect: [
          { id: 'justice' },
          { id: 'principles' },
          { id: 'loyalty' },
          { id: 'protection' },
        ]
      },
      roguishFeats: {},
      weaponSkills: {
        connect: [
          { id: 'cleave' },
          { id: 'disarm' },
          { id: 'parry' },
          { id: 'storm_a_group' },
        ]
      },
    }}),
    prisma.vagabondClass.create({ data: {
      id: 'harrier',
      name: 'harrier',
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
      drives: {
        connect: [
          { id: 'crime' },
          { id: 'discovery' },
          { id: 'infamy' },
          { id: 'wanderlust' },
        ]
      },
      roguishFeats: {
        connect: [
          { id: 'acrobatics' },
          { id: 'sneak' },
        ]
      },
      weaponSkills: {
        connect: [
          { id: 'disarm' },
          { id: 'harry_a_group' },
          { id: 'quick_shot' },
          { id: 'trick_shot' },
        ]
      },
    }}),
    prisma.vagabondClass.create({ data: {
      id: 'ranger',
      name: 'ranger',
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
      drives: {
        connect: [
          { id: 'discovery' },
          { id: 'freedom' },
          { id: 'revenge' },
          { id: 'protection' },
        ]
      },
      roguishFeats: {
        connect: [
          { id: 'hide' },
          { id: 'sneak' },
        ]
      },
      weaponSkills: {
        connect: [
          { id: 'cleave' },
          { id: 'disarm' },
          { id: 'harry_a_group' },
          { id: 'vicious_strike' },
        ]
      },
    }}),
    prisma.vagabondClass.create({ data: {
      id: 'ronin',
      name: 'ronin',
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
      drives: {
        connect: [
          { id: 'principles' },
          { id: 'revenge' },
          { id: 'thrills' },
          { id: 'wanderlust' },
        ]
      },
      roguishFeats: { connect: { id: 'blindside' } },
      weaponSkills: {
        connect: [
          { id: 'cleave' },
          { id: 'harry_a_group' },
          { id: 'storm_a_group' },
          { id: 'vicious_strike' },
        ]
      },
    }}),
    prisma.vagabondClass.create({ data: {
      id: 'scoundrel',
      name: 'scoundrel',
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
      drives: {
        connect: [
          { id: 'chaos' },
          { id: 'thrills' },
          { id: 'crime' },
          { id: 'infamy' },
        ]
      },
      roguishFeats: {
        connect: [
          { id: 'acrobatics' },
          { id: 'hide' },
          { id: 'sneak' },
        ]
      },
      weaponSkills: {
        connect: [
          { id: 'confuse_senses' },
          { id: 'improvise_weapon' },
          { id: 'quick_shot' },
          { id: 'vicious_strike' },
        ]
      },
    }}),
    prisma.vagabondClass.create({ data: {
      id: 'thief',
      name: 'thief',
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
      drives: {
        connect: [
          { id: 'freedom' },
          { id: 'greed' },
          { id: 'ambition' },
          { id: 'thrills' },
        ]
      },
      roguishFeats: {},
      weaponSkills: {
        connect: [
          { id: 'confuse_senses' },
          { id: 'improvise_weapon' },
          { id: 'parry' },
          { id: 'trick_shot' },
        ]
      },
    }}),
    prisma.vagabondClass.create({ data: {
      id: 'tinker',
      name: 'tinker',
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
      drives: {
        connect: [
          { id: 'greed' },
          { id: 'ambition' },
          { id: 'revenge' },
          { id: 'protection' },
        ]
      },
      roguishFeats: {
        connect: [
          { id: 'counterfeit' },
          { id: 'disable_device' },
          { id: 'pick_lock' },
        ]
      },
      weaponSkills: {
        connect: [
          { id: 'cleave' },
          { id: 'harry_a_group' },
          { id: 'improvise_weapon' },
          { id: 'trick_shot' },
        ]
      },
    }}),
    prisma.vagabondClass.create({ data: {
      id: 'vagrant',
      name: 'vagrant',
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
      drives: {
        connect: [
          { id: 'chaos' },
          { id: 'thrills' },
          { id: 'clean_paws' },
          { id: 'wanderlust' },
        ]
      },
      roguishFeats: {
        connect: [
          { id: 'pick_lock' },
          { id: 'sleight_of_hand' },
        ]
      },
      weaponSkills: {
        connect: [
          { id: 'harry_a_group' },
          { id: 'improvise_weapon' },
          { id: 'quick_shot' },
          { id: 'vicious_strike' },
        ]
      },
    }}),
  ])
  console.log(`There are ${seededVagabondClasses.length} classes are created`)
}

seedData()
