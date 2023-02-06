import { Drive, PrismaClient } from '@prisma/client'

export const driveSeeding = async (prisma: PrismaClient) => {
  await prisma.drive.deleteMany({})
  return prisma.drive.createMany({ data: drives })
}

export const drives: Drive[] = [
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
]
