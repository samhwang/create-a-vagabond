import { MenuItem } from '@mui/material';
import { graphql, useFragment } from 'react-relay';
import { RHFTextField, RHFTextFieldProps } from '../../../../components/RHF/RHFTextField';
import { BackgroundStepInput } from '.';
import { VagabondCreateInput } from '../ReviewAndCreateStep/__generated__/ReviewAndCreateStepMutation.graphql';
import { DrivesSelect_class$key } from './__generated__/DrivesSelect_class.graphql';

type DrivesSelectProps = RHFTextFieldProps<BackgroundStepInput | VagabondCreateInput> & {
  vagabondClassRef: DrivesSelect_class$key;
};
export function DrivesSelect({ vagabondClassRef, ...props }: DrivesSelectProps) {
  const { driveConnection } = useFragment(
    graphql`
      fragment DrivesSelect_class on VagabondClass {
        driveConnection(first: 50) {
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
    <RHFTextField {...props} select SelectProps={{ multiple: true }}>
      {driveConnection.edges.map((edge) => {
        if (!edge?.node) return null;

        return (
          <MenuItem key={edge.node.id} value={edge.node.id}>
            {edge.node.name}
          </MenuItem>
        );
      })}
    </RHFTextField>
  );
}
