import { Avatar, ListItemAvatar, ListItemText, MenuItem } from '@mui/material';
import { FieldValues } from 'react-hook-form';
import { RHFTextField, RHFTextFieldProps } from '../../../../components/RHF/RHFTextField';
import { species } from './species';

type SpeciesSelectProps<T extends FieldValues> = Omit<RHFTextFieldProps<T>, 'select'>;

export function SpeciesSelect<T extends FieldValues>(props: SpeciesSelectProps<T>) {
  return (
    <RHFTextField
      {...props}
      select
      SelectProps={{
        sx: {
          '& > .MuiSelect-select': {
            display: 'flex',
          },
        },
        MenuProps: {
          sx: { maxHeight: 300 }
        }
      }}
    >
      {species.map(name => (
        <MenuItem key={name} value={name}>
          <ListItemText primary={name} />
        </MenuItem>
      ))}
    </RHFTextField>
  );
}
