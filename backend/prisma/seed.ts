import { PrismaClient } from '@prisma/client';
import { natureSeeding } from './seed/nature';
import { driveSeeding } from './seed/drive';
import { roguishFeatSeeding } from './seed/roguishFeat';
import { weaponSkillSeeding } from './seed/weaponSkill';
import { classMoveSeeding } from './seed/classMove';
import { classSeeding } from './seed/class';

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
  console.log(`
    There are ${seededNatures.count} natures are created
    There are ${seededDrives.count} drives are created
    There are ${seededRoguishFeats.count} roguish feats are created
    There are ${seededWeaponSkills.count} weapon skills are created
    There are ${seededClassSkills.count} class skills are created
  `);

  const seededVagabondClasses = await classSeeding(prisma);
  console.log(`There are ${seededVagabondClasses.length} classes are created`);
}

seedData();
