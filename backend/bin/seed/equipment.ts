import { Equipment as PrismaEquipmentType, EquipmentTag, WeaponSkill, PrismaClient } from '@prisma/client';

export async function equipmentSeeding(prisma: PrismaClient) {
  await prisma.equipment.deleteMany({});
  const promises = EQUIPMENTS.map(async (e) => {
    try {
      return await prisma.equipment.create({
        data: {
          id: e.id,
          name: e.name,
          maxWear: e.maxWear,
          value: e.value,
          load: e.load,
          range: e.range ?? undefined,
          tags: {
            connect: e.tags ? e.tags.map((id) => ({ id })) : undefined,
          },
          weaponMoveTags: {
            connect: e.weaponMoveTags ? e.weaponMoveTags.map((id) => ({ id })) : undefined,
          },
        },
      });
    } catch (error) {
      console.error('ERROR INSERTING INTO DB', error);
      console.error('RECORD:', e);
    }
  });
  return Promise.all(promises);
}

type WeaponRange = 'intimate' | 'close' | 'far';

type Equipment = Omit<PrismaEquipmentType, 'range'> & {
  range?: WeaponRange[];
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
    weaponMoveTags: ['parry', 'vicious_strike'],
  },
  {
    id: 'greatsword',
    name: 'Greatsword',
    maxWear: 2,
    value: 6,
    load: 2,
    range: ['close'],
    tags: ['sharp', 'large', 'bulky'],
    weaponMoveTags: ['cleave', 'storm_a_group', 'disarm'],
  },
  {
    id: 'mousefolk_short_sword',
    name: 'Mousefolk Short Sword',
    maxWear: 3,
    value: 6,
    load: 1,
    range: ['close'],
    tags: ['mousefolk_steel'],
    weaponMoveTags: ['parry', 'disarm'],
  },
  {
    id: 'foxfolk_longsword',
    name: 'Foxfolk Long Sword',
    maxWear: 2,
    value: 5,
    load: 1,
    range: ['close'],
    tags: ['foxfolk_steel'],
    weaponMoveTags: ['disarm', 'vicious_strike'],
  },
  {
    id: 'rabbitfolk_axe',
    name: 'Rabbitfolk Axe',
    maxWear: 2,
    value: 4,
    load: 1,
    range: ['close'],
    tags: ['rabbitfolk_steel'],
    weaponMoveTags: ['disarm'],
  },
  {
    id: 'smithy_hammer',
    name: 'Smithy Hammer',
    maxWear: 2,
    value: 5,
    load: 1,
    range: ['intimate', 'close'],
    tags: ['heavy_bludgeon'],
    weaponMoveTags: ['cleave'],
  },
  {
    id: 'staff',
    name: 'Staff',
    maxWear: 2,
    value: 4,
    load: 1,
    range: ['close'],
    tags: ['blunted'],
    weaponMoveTags: ['parry'],
  },
  {
    id: 'quarterstaff',
    name: 'Quarterstaff',
    maxWear: 3,
    value: 6,
    load: 1,
    range: ['close'],
    tags: ['reach', 'blunted'],
    weaponMoveTags: ['parry'],
  },
  {
    id: 'shortbow',
    name: 'Shortbow',
    maxWear: 4,
    value: 6,
    load: 1,
    range: ['close'],
    tags: ['short_limbs'],
    weaponMoveTags: ['quick_shot'],
  },
  {
    id: 'longbow',
    name: 'Longbow',
    maxWear: 4,
    value: 5,
    load: 1,
    range: ['far'],
    weaponMoveTags: ['harry_a_group'],
  },
  {
    id: 'trick_bow',
    name: 'Trick Bow',
    maxWear: 3,
    value: 5,
    load: 1,
    range: ['close'],
    weaponMoveTags: ['harry_a_group', 'trick_shot'],
  },
  {
    id: 'crossbow',
    name: 'Crossbow',
    maxWear: 2,
    value: 6,
    load: 1,
    range: ['far'],
    tags: ['oiled_string', 'hair_trigger', 'iron_bolts'],
    weaponMoveTags: ['trick_shot'],
  },
  {
    id: 'sling_and_rocks',
    name: 'Sling and Rocks',
    maxWear: 2,
    value: 3,
    load: 0,
    range: ['close'],
    weaponMoveTags: ['harry_a_group'],
  },
  {
    id: 'leather_armor',
    name: 'Leather Armor',
    maxWear: 2,
    value: 3,
    load: 1,
    tags: ['flexible'],
  },
  {
    id: 'chainmail',
    name: 'Chainmail',
    maxWear: 3,
    value: 3,
    load: 2,
    tags: ['weighty', 'tightly_woven'],
  },
  {
    id: 'plate_armor',
    name: 'Plate Armor',
    maxWear: 4,
    value: 3,
    load: 2,
    tags: ['arrow-proof', 'cumbersome', 'weighty'],
  },
  {
    id: 'robes',
    name: 'Robes',
    maxWear: 1,
    value: 2,
    load: 1,
    tags: ['unassuming'],
  },
];
