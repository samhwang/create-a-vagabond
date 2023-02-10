import { Vagabond, PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
import { CLASSES } from './class';

const BASE_MIGHT = 4;

type DefaultVagabond = Omit<Vagabond, 'id'>;

const DEFAULT_VAGABONDS: DefaultVagabond[] = CLASSES.map((vagabondClass) => {
  return {
    userId: faker.datatype.uuid(),
    vagabondClassId: vagabondClass.id,
    name: faker.name.firstName(),
    species: faker.animal.type(),
    details: faker.random.words(10),
    demeanor: faker.random.word(),
    background_home: faker.random.words(10),
    background_vagabond: faker.random.words(10),
    background_leftBehind: faker.random.words(10),
    value: vagabondClass.startingValue,
    charm: vagabondClass.startingCharm,
    carrying: vagabondClass.startingMight * 2 + BASE_MIGHT,
    might: vagabondClass.startingMight,
    cunning: vagabondClass.startingCunning,
    finesse: vagabondClass.startingFinesse,
    luck: vagabondClass.startingLuck,
    availablePoints: 1,
    natureId: vagabondClass.natures[0],
  };
});

export async function vagabondSeeding(prisma: PrismaClient) {
  await Promise.all([prisma.reputation.deleteMany(), prisma.vagabond.deleteMany()]);

  const vagabondIds = await prisma.vagabond.createMany({
    data: DEFAULT_VAGABONDS,
  });

  return vagabondIds;
}
