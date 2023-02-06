import { VagabondClass as PrismaVagabondClass, PrismaClient } from '@prisma/client'

export const classSeeding = async (prisma: PrismaClient) => {
  await prisma.vagabondClass.deleteMany({})
  const promises = classes.map(vagabondClass => prisma.vagabondClass.create({
    data: {
      ...vagabondClass,
      natures: { connect: vagabondClass.natures.map(id => ({ id })) },
      drives: { connect: vagabondClass.drives.map(id => ({ id })) },
      roguishFeats: { connect: vagabondClass.roguishFeats.map(id => ({ id })) },
      weaponSkills: { connect: vagabondClass.weaponSkills.map(id => ({ id })) },
      classMoves: { connect: vagabondClass.classMoves.map(id => ({ id })) },
    }
  }))

  return Promise.all(promises)
}

type VagabondClass = PrismaVagabondClass & {
  natures: string[]
  drives: string[]
  roguishFeats: string[]
  weaponSkills: string[]
  classMoves: string[]
}

export const classes: VagabondClass[] = [
  {
    id: 'adventurer',
    name: 'adventurer',
    startingCharm: 2,
    startingCunning: 1,
    startingFinesse: 0,
    startingLuck: 0,
    startingMight: -1,
    startingValue: 9,
    natures: ['extrovert', 'peacemaker'],
    drives: ['ambition', 'clean_paws', 'principles', 'justice'],
    roguishFeats: ['counterfeit', 'sleight_of_hand'],
    weaponSkills: ['disarm', 'harry_a_group', 'improvise_weapon', 'parry'],
    classMoves: ['sterling_reputation', 'subduing_strikes', 'talon_on_the_pulse', 'orator', 'well_read', 'fast_friends'],
  },
  {
    id: 'arbiter',
    name: 'arbiter',
    startingCharm: 1,
    startingCunning: 0,
    startingFinesse: 0,
    startingLuck: -1,
    startingMight: 2,
    startingValue: 10,
    natures: ['defender', 'punisher'],
    drives: ['justice', 'principles', 'loyalty', 'protection'],
    roguishFeats: [],
    weaponSkills: ['cleave', 'disarm', 'parry', 'storm_a_group'],
    classMoves: ['brute', 'carry_a_big_stick', 'crash_and_smash', 'hardy', 'strong_draw', 'guardian']
  },
  {
    id: 'harrier',
    name: 'harrier',
    startingCharm: 0,
    startingCunning: -1,
    startingFinesse: 2,
    startingLuck: 1,
    startingMight: 0,
    startingValue: 9,
    natures: ['dutiful', 'competitive'],
    drives: ['crime', 'discovery', 'infamy', 'wanderlust'],
    roguishFeats: ['acrobatics', 'sneak'],
    weaponSkills: ['disarm', 'harry_a_group', 'quick_shot', 'trick_shot'],
    classMoves: ['cross_country', 'fleet_of_foot_and_hand', 'dont_shoot_the_messenger', 'parkour', 'traveler_extraordinaire', 'smugglers_path']
  },
  {
    id: 'ranger',
    name: 'ranger',
    startingCharm: -1,
    startingCunning: 1,
    startingFinesse: 1,
    startingLuck: 0,
    startingMight: 1,
    startingValue: 9,
    natures: ['loner', 'cynic'],
    drives: ['discovery', 'freedom', 'revenge', 'protection'],
    roguishFeats: ['hide', 'sneak'],
    weaponSkills: ['cleave', 'disarm', 'harry_a_group', 'vicious_strike'],
    classMoves: ['silent_paws', 'slip_away', 'poisons_and_antidotes', 'forager', 'threatening_visage', 'dirty_fighter']
  },
  {
    id: 'ronin',
    name: 'ronin',
    startingCharm: 0,
    startingCunning: 1,
    startingFinesse: 0,
    startingLuck: -1,
    startingMight: 2,
    startingValue: 11,
    natures: ['survivor', 'pilgrim'],
    drives: ['principles', 'revenge', 'thrills', 'wanderlust'],
    roguishFeats: ['blindside'],
    weaponSkills: ['cleave', 'harry_a_group', 'storm_a_group', 'vicious_strike'],
    classMoves: ['always_armed', 'knowing_a_lords_will', 'well_mannered', 'fealty', 'the_rules_of_war', 'always_watching']
  },
  {
    id: 'scoundrel',
    name: 'scoundrel',
    startingCharm: 1,
    startingCunning: -1,
    startingFinesse: 0,
    startingLuck: 2,
    startingMight: 0,
    startingValue: 8,
    natures: ['arsonist', 'combative'],
    drives: ['chaos', 'thrills', 'crime', 'infamy'],
    roguishFeats: ['acrobatics', 'hide', 'sneak'],
    weaponSkills: ['confuse_senses', 'improvise_weapon', 'quick_shot', 'vicious_strike'],
    classMoves: ['arsonist', 'create_to_destroy', 'its_a_distraction!', 'daredevil', 'danger_mask', 'better_lucky_than_good']
  },
  {
    id: 'thief',
    name: 'thief',
    startingCharm: 0,
    startingCunning: 0,
    startingFinesse: 2,
    startingLuck: 1,
    startingMight: 1,
    startingValue: 6,
    natures: ['kleptomaniac', 'rebellious'],
    drives: ['freedom', 'greed', 'ambition', 'thrills'],
    roguishFeats: [],
    weaponSkills: ['confuse_senses', 'improvise_weapon', 'parry', 'trick_shot'],
    classMoves: ['breaking_and_entering', 'disappear_into_the_dark', 'rope_a_dope', 'small_hands', 'master_thief', 'nose_for_gold']
  },
  {
    id: 'tinker',
    name: 'tinker',
    startingCharm: -1,
    startingCunning: 2,
    startingFinesse: 1,
    startingLuck: 0,
    startingMight: 0,
    startingValue: 8,
    natures: ['perfectionist', 'radical'],
    drives: ['greed', 'ambition', 'revenge', 'protection'],
    roguishFeats: ['counterfeit', 'disable_device', 'pick_lock'],
    weaponSkills: ['cleave', 'harry_a_group', 'improvise_weapon', 'trick_shot'],
    classMoves: ['toolbox', 'repair', 'big_pockets', 'jury_rig', 'nimble_mind', 'dismantle']
  },
  {
    id: 'vagrant',
    name: 'vagrant',
    startingCharm: 2,
    startingCunning: 1,
    startingFinesse: -1,
    startingLuck: 0,
    startingMight: 0,
    startingValue: 9,
    natures: ['glutton', 'hustler'],
    drives: ['chaos', 'thrills', 'clean_paws', 'wanderlust'],
    roguishFeats: ['pick_lock', 'sleight_of_hand'],
    weaponSkills: ['harry_a_group', 'improvise_weapon', 'quick_shot', 'vicious_strike'],
    classMoves: ['instigator', 'pleasant_facade', 'desperate_smile', 'charm_offensive', 'lets_play', 'pocket_sand']
  }
]
