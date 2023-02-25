import { PrismaClient } from '@prisma/client';
import { natureSeeding } from './seed/nature';
import { driveSeeding } from './seed/drive';
import { roguishFeatSeeding } from './seed/roguishFeat';
import { weaponSkillSeeding } from './seed/weaponSkill';
import { classMoveSeeding } from './seed/classMove';
import { classSeeding } from './seed/class';
import { vagabondSeeding } from './seed/vagabond';
import { equipmentTagSeeding } from './seed/equipmentTag';
import { equipmentSeeding } from './seed/equipment';

const prisma = new PrismaClient();

async function seedData() {
  await prisma.vagabond.deleteMany();

  const [seededNatures, seededDrives, seededRoguishFeats, seededWeaponSkills, seededClassSkills, seededEquipmentTags] =
    await Promise.all([
      natureSeeding(prisma),
      driveSeeding(prisma),
      roguishFeatSeeding(prisma),
      weaponSkillSeeding(prisma),
      classMoveSeeding(prisma),
      equipmentTagSeeding(prisma),
    ]);
  console.log(`There are ${seededNatures.count} natures created.
There are ${seededDrives.count} drives created.
There are ${seededRoguishFeats.count} roguish feats created.
There are ${seededWeaponSkills.count} weapon skills created.
There are ${seededClassSkills.count} class skills created.
There are ${seededEquipmentTags.count} equipment skills created.`);

  const seededVagabondClasses = await classSeeding(prisma);
  console.log(`There are ${seededVagabondClasses.length} classes created.`);

  const seededEquipment = await equipmentSeeding(prisma);
  console.log(`There are ${seededEquipment.length} equipments created.`);

  const seededVagabonds = await vagabondSeeding(prisma);
  console.log(`There are ${seededVagabonds.length} vagabonds created.`);
}

seedData();
