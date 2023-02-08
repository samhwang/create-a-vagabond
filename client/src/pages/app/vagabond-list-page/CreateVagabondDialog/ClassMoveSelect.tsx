import { MenuItem } from '@mui/material';
import { useEffect } from 'react';
import { graphql, useFragment } from 'react-relay';
import { useFormContext } from 'react-hook-form';
import { RHFTextField, RHFTextFieldProps } from '../../../../components/RHF/RHFTextField';
import { VagabondCreateInput } from './__generated__/CreateVagabondDialogMutation.graphql';
import { ClassMoveSelect_class$key } from './__generated__/ClassMoveSelect_class.graphql';

type ClassMoveSelectProps = RHFTextFieldProps<VagabondCreateInput> & {
  vagabondClassRef: ClassMoveSelect_class$key;
};

export function ClassMoveSelect({ vagabondClassRef, ...props }: ClassMoveSelectProps) {
  const { name, classMoveConnection } = useFragment(
    graphql`
      fragment ClassMoveSelect_class on VagabondClass {
        name
        classMoveConnection(first: 50) {
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

  const { setValue } = useFormContext<VagabondCreateInput>();
  useEffect(() => {
    if (name === 'tinker') {
      setValue('classMoves', tinkerDefaultSkillIds);
    }
  }, [name, setValue]);

  return (
    <RHFTextField {...props} select SelectProps={{ multiple: true }}>
      {classMoveConnection.edges.map((edge) => {
        if (!edge?.node) return null;

        const skillSlug = atob(edge.node.id).split(':')[1];
        const disabled = name === 'tinker' && tinkerDefaultSkills.includes(skillSlug);

        return (
          <MenuItem key={edge.node.id} value={edge.node.id} disabled={disabled}>
            {edge.node.name}
          </MenuItem>
        );
      })}
    </RHFTextField>
  );
}

export const tinkerDefaultSkills = ['toolbox', 'repair'];
export const tinkerDefaultSkillIds = tinkerDefaultSkills.map((skill) => btoa(`ClassMove:${skill}`));
