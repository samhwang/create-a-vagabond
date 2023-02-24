import { EquipmentTag, PrismaClient } from '@prisma/client';

export async function equipmentTagSeeding(prisma: PrismaClient) {
  await prisma.equipmentTag.deleteMany({});
  return prisma.equipmentTag.createMany({ data: EQUIPMENT_TAGS });
}

const POSITIVE_TAGS: Omit<EquipmentTag, 'vagabondEquipmentId'>[] = [
  {
    id: 'arrow-proof',
    name: 'Arrow-Proof',
    description: 'Ignore the first hit dealing injury from arrows that you suffer in a scene. (Armor)',
    type: 'POSITIVE',
  },
  {
    id: 'blunted',
    name: 'Blunted',
    description: 'This weapon inflicts exhaustion, not injury. (Hammer, Staff)',
    type: 'POSITIVE',
  },
  {
    id: 'catfolk_steel',
    name: 'Catfolk Steel',
    description:
      'Mark wear when <b>engaging in melee</b> to shift your range one step, even on a miss. (Armor, Weapons)',
    type: 'POSITIVE',
  },
  {
    id: 'ceremonial',
    name: 'Ceremonial',
    description:
      'Choose an attached faction. While this item is displayed, treat yourself as having +1 Reputation with that faction, and -1 Reputation with other factions. (Anything)',
    type: 'POSITIVE',
  },
  {
    id: 'comfortable',
    name: 'Comfortable',
    description: 'This item counts as 1 fewer Load. (Armor)',
    type: 'POSITIVE',
  },
  {
    id: 'durable',
    name: 'Durable',
    description:
      'If this item would ever be destroyed, permanently remove 1-Wear from it instead. If it ever has no wear remaining, it is destroyed. (Anything)',
    type: 'POSITIVE',
  },
  {
    id: 'eaglecraft',
    name: 'Eaglecraft',
    description: 'Mark wear when <b>engaging in melee</b> to both make and suffer another exchange of harm. (Weapons)',
    type: 'POSITIVE',
  },
  {
    id: 'fast',
    name: 'Fast',
    description:
      'Mark wear when <b>engaging in melee</b> to suffer 1 fewer harm, even on a miss. (Smaller or thinner weapons)',
    type: 'POSITIVE',
  },
  {
    id: 'friendly',
    name: 'Friendly',
    description:
      'When you <b>meet someone important</b>, mark exhaustion to roll with your Reputation +1 (Armor, nonthreatening weapons like staves)',
    type: 'POSITIVE',
  },
  {
    id: 'flexible',
    name: 'Flexible',
    description: 'When you <b>grapple</b> with someone, mark exhaustion to ignore the first choice they make. (Armor)',
    type: 'POSITIVE',
  },
  {
    id: 'foxfolk_steel',
    name: 'Foxfolk Steel',
    description: 'Ignore the first box of wear you mark on this item each session. (Weapon and some armor)',
    type: 'POSITIVE',
  },
  {
    id: 'hair_trigger',
    name: 'Hair Trigger',
    description: 'Mark wear to <b>target a vulnerable</b> foe at close range instead of far. (Crossbow)',
    type: 'POSITIVE',
  },
  {
    id: 'healers_kit',
    name: "Healer's Kit",
    description: "Mark wear to clear exhaustion. Mark 2-wear to clear injury. (Healer's Kit)",
    type: 'POSITIVE',
  },
  {
    id: 'heavy_bludgeon',
    name: 'Heavy Bludgeon',
    description: "Mark exhaustion to ignore your enemy's armor when you inflict harm. (Hammer, mace)",
    type: 'POSITIVE',
  },
  {
    id: 'heavy_draw_weight',
    name: 'Heavy Draw Weight',
    description:
      'When you <b>target a vulnerable foe</b> with this bow, mark exhaustion to inflict 1 additional injury. (Bow)',
    type: 'POSITIVE',
  },
  {
    id: 'iron_bolts',
    name: 'Iron Bolts',
    description: 'This weapon inflicts 1 additional wear when its harm is absorbed by armor. (Bow, crossbow)',
    type: 'POSITIVE',
  },
  {
    id: 'large',
    name: 'Large',
    description: 'Mark exhaustion when inflicting harm with this weapon to inflict 1 additional harm. (Weapons)',
    type: 'POSITIVE',
  },
  {
    id: 'mousefolk_steel',
    name: 'Mousefolk Steel',
    description: 'Mark wear to <b>engage in melee</b> using Cunning instead of Might. (Weapons)',
    type: 'POSITIVE',
  },
  {
    id: 'mighty',
    name: 'Mighty',
    description:
      'When you wreck something with this item, mark 2-wear to shift a miss to a 7-9 or a 7-9 to a 10+ result. (Explosives, heavy weapons)',
    type: 'POSITIVE',
  },
  {
    id: 'oiled_string',
    name: 'Oiled String',
    description: "Mark wear to use the weapon skill <b>quick shot</b> even if you don't have it.",
    type: 'POSITIVE',
  },
  {
    id: 'quick',
    name: 'Quick',
    description: 'Mark exhaustion to <b>engage in melee</b> with Finesse instead of Might. (Small or fast weapons)',
    type: 'POSITIVE',
  },
  {
    id: 'rabbitfolk_steel',
    name: 'Rabbitfolk Steel',
    description: 'Mark wear to <b>engage in melee</b> with Finesse instead of Might. (Weapons)',
    type: 'POSITIVE',
  },
  {
    id: 'reach',
    name: 'Reach',
    description:
      "When you <b>engage in melee</b>, mark wear on this weapon to inflict harm instead of trading harm; you cannot use this tag if your enemy's weapon also has <b>reach</b>. (Large, tall weapons)",
    type: 'POSITIVE',
  },
  {
    id: 'refreshing',
    name: 'Refreshing',
    description:
      'When you take some time to relax and drink or eat from this item with a group, mark 3-wear, +1 additional wear for each participant past the third. Every participant clears all exhaustion. (Meal, flask)',
    type: 'POSITIVE',
  },
  {
    id: 'sharp',
    name: 'Sharp',
    description: 'Mark wear when inflicting harm with this weapon to inflict 1 additional harm. (Edged weapons)',
    type: 'POSITIVE',
  },
  {
    id: 'short_limbs',
    name: 'Short Limbs',
    description: 'mark wear to fire a <b>quick shot</b> at far range. (Small bow)',
    type: 'POSITIVE',
  },
  {
    id: 'signature',
    name: 'Signature',
    description:
      'Whenever you earn prestige or notoriety while showing this item, mark 1 additional prestige or notoriety. (Anything displayed)',
    type: 'POSITIVE',
  },
  {
    id: 'thick',
    name: 'Thick',
    description:
      'When you mark wear on this shield to block a hit, you only ever mark 1-wear, even if you are blocking more harm from a single hit. (Shield)',
    type: 'POSITIVE',
  },
  {
    id: 'thief_kit',
    name: 'Thief Kit',
    description:
      'when you <b>attempt a roguish feat</b> appropriate for this item, you may mark wear on this item instead of marking exhaustion to avoid a risk coming to bear on a 7-9. (Tools, specially made armor or weapons)',
    type: 'POSITIVE',
  },
  {
    id: 'throwable',
    name: 'Throwable',
    description: 'Mark exhaustion to <b>target a vulnerable foe</b> with this weapon at far range. (Daggers, grenades)',
    type: 'POSITIVE',
  },
  {
    id: 'tightly_woven',
    name: 'Tightly Woven',
    description:
      'When you take a few seconds to repair this armor after a fight, clear 1-wear you marked during the fight. (Chain armor)',
    type: 'POSITIVE',
  },
  {
    id: 'tricky',
    name: 'Tricky',
    description:
      'When you use this item to <b>trick an NPC</b> by distracting them at a distance, on a 7-9 mark wear to eliminate one option from the <b>trick an NPC</b> move before the NPC picks. (Bolas, bows)',
    type: 'POSITIVE',
  },
  {
    id: 'unassuming',
    name: 'Unassuming',
    description:
      'Until you harm an enemy, they will never deem you more of a thread than other vagabonds with arms and armors. (Robes, staves)',
    type: 'POSITIVE',
  },
  {
    id: 'versatile',
    name: 'Versatile',
    description:
      "When you move to or from a range this weapon can reach, mark wear to make a quick strike and inflict injury on any opponent in this weapon's range. (Fast weapons)",
    type: 'POSITIVE',
  },
];

const NEGATIVE_TAGS: Omit<EquipmentTag, 'vagabondEquipmentId'>[] = [
  {
    id: 'bulky',
    name: 'Bulky',
    description:
      'This weapon cannot be hidden and is always visible while on your body. Mark exhaustion whenever you <b>attempt a roguish feat</b> or <b>trust fate</b> to sneak, hide, blindside or perform an act of acrobatics. (Large weapons)',
    type: 'NEGATIVE',
  },
  {
    id: 'cumbersome',
    name: 'Cumbersome',
    description: 'Mark 1-exhaustion when you don your armor--clear 1-exhaustion when you take it off. (Heavy armor)',
    type: 'NEGATIVE',
  },
  {
    id: 'fragile',
    name: 'Fragile',
    description:
      'When you make a weapon move with this weapon, mark wear on it. Mark exhaustion to ignore this effect. (Light weapons)',
    type: 'NEGATIVE',
  },
  {
    id: 'hated',
    name: 'Hated',
    description:
      'Take -2 Reputation with the faction that loathes this item while it is displayed. If you reveal this item to foes from that faction, they clear morale as they are energized by their anger at you. (Anything)',
    type: 'NEGATIVE',
  },
  {
    id: 'shoddy',
    name: 'Shoddy',
    description: 'Repairing this item costs twice as much Value per box of wear cleared. (Anything)',
    type: 'NEGATIVE',
  },
  {
    id: 'slow',
    name: 'Slow',
    description:
      'When you <b>engage in melee</b> with this weapon, choose one fewer option. Mark wear to ignore this effect. (Heavy weapons)',
    type: 'NEGATIVE',
  },
  {
    id: 'ugly',
    name: 'Ugly',
    description:
      'Take -1 to <b>meet someone important</> while they can see this item. Mark exhaustion to hide it. (Weapons or handheld items)',
    type: 'NEGATIVE',
  },
  {
    id: 'unwieldy',
    name: 'Unwieldy',
    description:
      'Take a -1 to all weapon moves--both basic and special weapon moves--made with this weapon. Mark exhaustion to ignore this effect.',
    type: 'NEGATIVE',
  },
  {
    id: 'weighty',
    name: 'Weighty',
    description: 'This item counts as 1 additional Load. (Anything large)',
    type: 'NEGATIVE',
  },
  {
    id: 'wicked',
    name: 'Wicked',
    description:
      'Anyone who sees this weapon will deem its wielder a threat, at least to be watched, carefully. When you inflict any harm with this weapon, mark notoriety with an observing faction for each harm inflicted. (Cruel weapons)',
    type: 'NEGATIVE',
  },
];

export const EQUIPMENT_TAGS = [...POSITIVE_TAGS, ...NEGATIVE_TAGS];
