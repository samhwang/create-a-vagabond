import { Vagabond, PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
import { CLASSES } from './class';

const BASE_MIGHT = 4;

export async function vagabondSeeding(prisma: PrismaClient) {
  await Promise.all([prisma.reputation.deleteMany(), prisma.vagabond.deleteMany()]);

  const promises = CLASSES.map(async (vagabondClass) => {
    const data = {
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
      roguishFeats: {
        connect: vagabondClass.roguishFeats.map((id) => ({ id })),
      },
      weaponSkills: {
        connect: vagabondClass.weaponSkills.map((id) => ({ id })),
      },
      classMoves: {
        connect: vagabondClass.classMoves.map((id) => ({ id })),
      },
      drives: {
        connect: vagabondClass.drives.slice(0, 2).map((id) => ({ id })),
      },
    };

    const { id: vagabondId } = await prisma.vagabond.create({ data });

    await prisma.reputation.create({
      data: { vagabondId },
    });

    return vagabondId;
  });

  return Promise.all(promises);
}
