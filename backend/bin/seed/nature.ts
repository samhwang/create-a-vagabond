import { Nature, PrismaClient } from '@prisma/client';

export async function natureSeeding(prisma: PrismaClient) {
  await prisma.nature.deleteMany({});
  return prisma.nature.createMany({ data: NATURES });
}

export const NATURES: Nature[] = [
  {
    id: 'extrovert',
    name: 'Extrovert',
    description:
      'Clear your exhaustion track when you share a moment of real warmth, friendship, or enjoyment with someone.',
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
    description:
      'Clear your exhaustion track when you tell a powerful or dangerous villain to their face that you will punish them.',
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
    description:
      'Clear your exhaustion track when you enter a dangerous situation alone, without backup or assistance.',
  },
  {
    id: 'cynic',
    name: 'Cynic',
    description:
      'Clear your exhaustion track when you openly and directly ask dangerous questions about an accepted "truth".',
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
    description:
      'Clear your exhaustion track when you use needlessly destructive or damaging methods to solve a problem.',
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
];
