import { Avatar, ListItemAvatar, ListItemText, MenuItem } from '@mui/material';
import { FieldValues } from 'react-hook-form';
import { RHFTextField, RHFTextFieldProps } from '../../../../components/RHF/RHFTextField';
import { species } from './species'

type SpeciesSelectProps<T extends FieldValues> = Omit<RHFTextFieldProps<T>, 'select'>

export const SpeciesSelect = <T extends FieldValues>(props: SpeciesSelectProps<T>) => {
  return (
    <RHFTextField
      {...props}
      select
      SelectProps={{ sx: {
        '& > .MuiSelect-select': {
          display: 'flex'
        }
      }}}
    >
      {Object.entries(species).map(([name, image]) => (
        <MenuItem key={name} value={name}>
          <ListItemAvatar>
            <Avatar
              src={image}
              alt={name}
            />
          </ListItemAvatar>
          <ListItemText primary={name} />
        </MenuItem>
      ))}
    </RHFTextField>
  )
}
