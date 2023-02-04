import { MenuItem } from '@mui/material';
import { graphql, useFragment } from 'react-relay';
import { RHFTextField, RHFTextFieldProps } from '../../../../components/RHF/RHFTextField';
import { VagabondCreateInput } from './__generated__/CreateVagabondDialogMutation.graphql';
import { NatureSelect_class$key } from './__generated__/NatureSelect_class.graphql';

type NatureSelectProps = RHFTextFieldProps<VagabondCreateInput> & {
  vagabondClassRef: NatureSelect_class$key;
};

export function NatureSelect({ vagabondClassRef, ...props }: NatureSelectProps) {
  const { natures } = useFragment(
    graphql`
      fragment NatureSelect_class on VagabondClass {
        natures
      }
    `,
    vagabondClassRef
  );

  return (
    <RHFTextField {...props} select>
      {natures.map((nature) => (
        <MenuItem key={nature} value={nature}>
          {nature}
        </MenuItem>
      ))}
    </RHFTextField>
  );
}
