import { Equipment as PrismaEquipmentType, EquipmentTag, WeaponSkill, PrismaClient } from '@prisma/client';

export async function equipmentSeeding(prisma: PrismaClient) {
  await prisma.equipment.deleteMany({});
  return prisma.equipment.createMany({ data: EQUIPMENTS });
}

type Equipment = Omit<PrismaEquipmentType, 'range'> & {
  range: string[];
  tags?: EquipmentTag['id'][];
  weaponMoveTags?: WeaponSkill['id'][];
};

const EQUIPMENTS: Equipment[] = [
  {
    id: 'dagger',
    name: 'Dagger',
    maxWear: 1,
    value: 5,
    load: 0,
    range: ['intimate', 'close'],
    tags: ['quick'],
    weaponMoveTags: ['parry, vicious_strike'],
  },
  {
    id: 'mousefolkd_short_sword',
    name: 'Mousefolk Short Sword',
    maxWear: 3,
    value: 6,
    load: 1,
    range: ['close'],
    tags: ['mousefolk_steel'],
    weaponMoveTags: ['parry', 'disarm'],
  },
  {
    id: '',
    name: '',
    maxWear: 1,
    value: 1,
    load: 0,
    range: [],
  },
  {
    id: '',
    name: '',
    maxWear: 1,
    value: 1,
    load: 0,
    range: [],
  },
  {
    id: '',
    name: '',
    maxWear: 1,
    value: 1,
    load: 0,
    range: [],
  },
  {
    id: '',
    name: '',
    maxWear: 1,
    value: 1,
    load: 0,
    range: [],
  },
  {
    id: '',
    name: '',
    maxWear: 1,
    value: 1,
    load: 0,
    range: [],
  },
  {
    id: '',
    name: '',
    maxWear: 1,
    value: 1,
    load: 0,
    range: [],
  },
  {
    id: '',
    name: '',
    maxWear: 1,
    value: 1,
    load: 0,
    range: [],
  },
  {
    id: '',
    name: '',
    maxWear: 1,
    value: 1,
    load: 0,
    range: [],
  },
  {
    id: '',
    name: '',
    maxWear: 1,
    value: 1,
    load: 0,
    range: [],
  },
  {
    id: '',
    name: '',
    maxWear: 1,
    value: 1,
    load: 0,
    range: [],
  },
  {
    id: '',
    name: '',
    maxWear: 1,
    value: 1,
    load: 0,
    range: [],
  },
  {
    id: '',
    name: '',
    maxWear: 1,
    value: 1,
    load: 0,
    range: [],
  },
  {
    id: '',
    name: '',
    maxWear: 1,
    value: 1,
    load: 0,
    range: [],
  },
  {
    id: '',
    name: '',
    maxWear: 1,
    value: 1,
    load: 0,
    range: [],
  },
  {
    id: '',
    name: '',
    maxWear: 1,
    value: 1,
    load: 0,
    range: [],
  },
  {
    id: '',
    name: '',
    maxWear: 1,
    value: 1,
    load: 0,
    range: [],
  },
  {
    id: '',
    name: '',
    maxWear: 1,
    value: 1,
    load: 0,
    range: [],
  },
];
