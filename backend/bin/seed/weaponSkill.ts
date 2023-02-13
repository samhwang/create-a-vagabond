import { WeaponSkill, PrismaClient } from '@prisma/client';

export async function weaponSkillSeeding(prisma: PrismaClient) {
  await prisma.weaponSkill.deleteMany({});
  return prisma.weaponSkill.createMany({ data: WEAPON_SKILLS });
}

export const WEAPON_SKILLS: WeaponSkill[] = [
  {
    id: 'engage_in_melee',
    name: 'Engage in Melee',
    type: 'NORMAL',
    description:
      'When you engage an enemy in melee at close or intimate range, roll with Might. On a hit, trade harm. On a 10+, pick 3. On a 7-9, pick 1. ["inflict serious (+1) harm", "suffer little (-1) harm", "shift your range one step", "impress, dismay, or frighten your foe"]',
  },
  {
    id: 'grapple_an_enemy',
    name: 'Grapple an Enemy',
    type: 'NORMAL',
    description:
      'When you grapple with an enemy at intimate range, roll with Might. On a hit, you choose simultaneously. Continue making choices until someone disengages, falls unconscious, or dies. On a 10+, you make one choice first, before beginning to make simultaneous choices.["you strike a fast blow; inflict injury", "you wear them down; they mark exhaustion", "you exploit weakness; mark exhaustion to inflict 2-injury", "you withdraw; disengage to close range"]',
  },
  {
    id: 'target_someone',
    name: 'Target Someone',
    type: 'NORMAL',
    description:
      'When you target a vulnerable foe at far range, roll with Finesse. On a hit, you inflict injury. On a 10+, you can strike again before they get to cover—inflict injury again—or keep your position hidden, your choice.',
  },
  {
    id: 'cleave',
    name: 'Cleave',
    type: 'SPECIAL',
    description:
      'When you cleave armored foes at close range, mark exhaustion and roll with Might. On a hit, you smash through their defenses and equipment; inflict 3-wear. On a 7-9, you overextend your weapon or yourself: mark wear or end up in a bad spot, your choice.',
  },
  {
    id: 'confuse_senses',
    name: 'Confuse Senses',
    type: 'SPECIAL',
    description: `When you throw something to confuse an opponent's senses at close or intimate range, roll with Finesse. On a hit, you've thrown them off balance, blinded them, deafened them, or confused them, and given yourself an opportunity. On a 10+, they have to take some time to get their bearings and restore their senses before they can act clearly again. On a 7-9, you have just a few moments.`,
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
    description:
      'When you harry a group of enemies at far range, mark wear and roll with Cunning. On a 10+, both. On a 7-9, choose 1.["inflict 2-morale harm", "they are pinned or blocked"]',
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
    description: `When you storm a group of foes in melee, mark exhaustion and roll with Might. On a hit, trade harm. On a 10+, choose 2. On a 7-9, choose 1.["you show them up; you inflict 2-morale harm", "you keep them off balance and confused; you inflict 2-exhaustion", "you avoid their blows to the best of your ability; you suffer little (-1) harm.", "you use them against each other; mark exhaustion again and they inflict their harm against themselves"]`,
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
    description: `When you viciously strike an opponent where they are weak at intimate or close range, mark exhaustion and roll with Might. On a hit, they suffer serious (+1) harm and cannot mark wear on their armor to block it. On a 10+, you get away with the strike. On a 7-9, they score a blow against you as well.`,
  },
];
