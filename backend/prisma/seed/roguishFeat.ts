import { PrismaClient, RoguishFeat as PrismaRoguishFeat } from '@prisma/client';

export const roguishFeatSeeding = async (prisma: PrismaClient) => {
  await prisma.roguishFeat.deleteMany({});
  return prisma.roguishFeat.createMany({ data: ROGUISH_FEATS });
};

type RoguishFeat = Omit<PrismaRoguishFeat, 'risks'> & {
  risks: string[];
};

export const ROGUISH_FEATS: RoguishFeat[] = [
  {
    id: 'acrobatics',
    name: 'Acrobatics',
    description: 'Adeptly climbing, vaulting, jumping',
    risks: ['Break something', 'detection', 'plunge into danger'],
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
];
