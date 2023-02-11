import { MenuItem } from '@mui/material';
import { graphql, useFragment } from 'react-relay';
import { RHFTextField, RHFTextFieldProps } from '../../../../components/RHF/RHFTextField';
import { BackgroundStepInput } from '.';
import { VagabondCreateInput } from '../../vagabond-list-page/CreateVagabondDialog/__generated__/CreateVagabondDialogMutation.graphql';
import { NatureSelect_class$key } from './__generated__/NatureSelect_class.graphql';

type NatureSelectProps = RHFTextFieldProps<BackgroundStepInput | VagabondCreateInput> & {
  vagabondClassRef: NatureSelect_class$key;
};

export function NatureSelect({ vagabondClassRef, ...props }: NatureSelectProps) {
  const { natureConnection } = useFragment(
    graphql`
      fragment NatureSelect_class on VagabondClass {
        natureConnection(first: 50) {
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
      {natureConnection.edges.map(edge => {
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
