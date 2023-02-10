import { PrismaClient } from '@prisma/client';
import { natureSeeding } from './seed/nature';
import { driveSeeding } from './seed/drive';
import { roguishFeatSeeding } from './seed/roguishFeat';
import { weaponSkillSeeding } from './seed/weaponSkill';
import { classMoveSeeding } from './seed/classMove';
import { classSeeding } from './seed/class';
import { vagabondSeeding } from './seed/vagabond';

const prisma = new PrismaClient();

async function seedData() {
  await prisma.vagabond.deleteMany();

  const [seededNatures, seededDrives, seededRoguishFeats, seededWeaponSkills, seededClassSkills] = await Promise.all([
    natureSeeding(prisma),
    driveSeeding(prisma),
    roguishFeatSeeding(prisma),
    weaponSkillSeeding(prisma),
    classMoveSeeding(prisma),
  ]);
  console.log(`There are ${seededNatures.count} natures created.
There are ${seededDrives.count} drives created.
There are ${seededRoguishFeats.count} roguish feats created.
There are ${seededWeaponSkills.count} weapon skills created.
There are ${seededClassSkills.count} class skills created.`);

  const seededVagabondClasses = await classSeeding(prisma);
  console.log(`There are ${seededVagabondClasses.length} classes created.`);

  const seededVagabonds = await vagabondSeeding(prisma);
  console.log(`There are ${seededVagabonds.count} vagabonds created.`);
}

seedData();
