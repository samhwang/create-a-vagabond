import { EquipmentTag, PrismaClient } from '@prisma/client';

export async function equipmentTagSeeding(prisma: PrismaClient) {
  await prisma.equipmentTag.deleteMany({});
  return prisma.equipmentTag.createMany({ data: EQUIPMENT_TAGS });
}

export const EQUIPMENT_TAGS: EquipmentTag[] = [
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
    description: 'Mark wear when engaging in melee to shift your range one step, even on a miss. (Armor, Weapons)',
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
    description: 'Mark wear when egaging in melee to both make and suffer another exchange of harm. (Weapons)',
    type: 'POSITIVE',
  },
  {
    id: 'fast',
    name: 'Fast',
    description:
      'Mark wear when engaging in melee to suffer 1 fewer harm, even on a miss. (Smaller or thinner weapons)',
    type: 'POSITIVE',
  },
  {
    id: 'friendly',
    name: 'Friendly',
    description:
      'When you meet someone important, mark exhaustion to roll with your Reputation +1 (Armor, nonthreatning weapons like staves)',
    type: 'POSITIVE',
  },
];
