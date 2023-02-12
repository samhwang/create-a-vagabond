import { FormControlLabel, Radio } from '@mui/material';
import { useAtomValue } from 'jotai';
import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { graphql, useFragment } from 'react-relay';
import { StatsMovesStepInput, statsMovesStepInputAtom } from '.';
import { RHFRadioGroupField } from '../../../../components/RHF/RHFRadioGroupField';
import { WeaponSkillField_class$key } from './__generated__/WeaponSkillField_class.graphql';

export type WeaponSkillFieldProps = {
  vagabondClassRef: WeaponSkillField_class$key;
};

export function WeaponSkillField({ vagabondClassRef }: WeaponSkillFieldProps) {
  const vagabondClass = useFragment(
    graphql`
      fragment WeaponSkillField_class on VagabondClass {
        weaponSkillConnection(first: 50) {
          edges {
            node {
              id
              name
            }
          }
        }
      }
    `,
    vagabondClassRef
  );
  const { control, setValue } = useFormContext<StatsMovesStepInput>();

  // sync value from local storage
  const { weaponSkill } = useAtomValue(statsMovesStepInputAtom);
  useEffect(() => {
    if (weaponSkill) setValue('weaponSkill', weaponSkill);
  }, [weaponSkill, setValue]);

  return (
    <RHFRadioGroupField control={control} name="weaponSkill" label="Weapon Skill">
      {vagabondClass.weaponSkillConnection.edges.map((edge) => {
        if (!edge?.node) return null;

        return <FormControlLabel key={edge.node.id} label={edge.node.name} value={edge.node.id} control={<Radio />} />;
      })}
    </RHFRadioGroupField>
  );
}
