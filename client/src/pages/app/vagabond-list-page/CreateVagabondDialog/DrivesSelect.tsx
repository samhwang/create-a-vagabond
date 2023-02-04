import { MenuItem } from '@mui/material';
import { graphql, useFragment } from 'react-relay';
import { RHFTextField, RHFTextFieldProps } from '../../../../components/RHF/RHFTextField';
import { VagabondCreateInput } from './__generated__/CreateVagabondDialogMutation.graphql';
import { DrivesSelect_class$key } from './__generated__/DrivesSelect_class.graphql';

type DrivesSelectProps = RHFTextFieldProps<VagabondCreateInput> & {
  vagabondClassRef: DrivesSelect_class$key;
};
export function DrivesSelect({ vagabondClassRef, ...props }: DrivesSelectProps) {
  const { drives } = useFragment(
    graphql`
      fragment DrivesSelect_class on VagabondClass {
        drives
      }
    `,
    vagabondClassRef
  );

  return (
    <RHFTextField {...props} select SelectProps={{ multiple: true }}>
      {drives.map((drive) => (
        <MenuItem key={drive} value={drive}>
          {drive}
        </MenuItem>
      ))}
    </RHFTextField>
  );
}
