import { MenuItem } from '@mui/material'
import { graphql, useFragment } from 'react-relay'
import { RHFTextField, RHFTextFieldProps } from '../../../../components/RHF/RHFTextField'
import { VagabondCreateInput } from './__generated__/CreateVagabondDialogMutation.graphql'
import { WeaponSkillSelect_class$key } from './__generated__/WeaponSkillSelect_class.graphql'

type WeaponSkillSelectProps = RHFTextFieldProps<VagabondCreateInput> & {
  vagabondClassRef: WeaponSkillSelect_class$key;
};

export function WeaponSkillSelect({ vagabondClassRef, ...props }: WeaponSkillSelectProps) {
  const { weaponSkillConnection } = useFragment(
    graphql`
      fragment WeaponSkillSelect_class on VagabondClass {
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

  return (
    <RHFTextField {...props} select>
      {weaponSkillConnection.edges.map(edge => {
        if (!edge?.node) return null

        return (
          <MenuItem key={edge?.node.id} value={edge?.node.id}>
            {edge?.node.name}
          </MenuItem>
        )
      })}
    </RHFTextField>
  );
}
