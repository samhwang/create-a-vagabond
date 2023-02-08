import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import { IconButton, InputAdornment, TextField, TextFieldProps } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';

export type RHFQuantityFieldProps<T extends FieldValues> = Omit<
  TextFieldProps,
  'name' | 'helperText' | 'error' | 'type'
> & {
  name: Path<T>;
  control: Control<T>;
  downDisabled?: boolean
  downHide?: boolean
  upDisabled?: boolean
  upHide?: boolean
};

export function RHFQuantityField<T extends FieldValues>({
  control,
  name,
  disabled,
  downDisabled,
  downHide,
  upDisabled,
  upHide,
  inputProps,
  InputProps,
  ...props
}: RHFQuantityFieldProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState, formState }) => (
        <TextField
          {...props}
          {...field}
          name={name}
          defaultValue={formState.defaultValues?.[name]}
          helperText={fieldState.error?.message}
          error={Boolean(fieldState.error)}
          // type="number"
          value={`${field.value >= 0 ? '+' : ''}${field.value}`}
          onChange={(event) => field.onChange(parseInt(event.target.value, 10))}
          disabled
          inputProps={{
            ...inputProps,
            sx: {
              textAlign: 'center',
              ...inputProps?.sx,
            },
          }}
          InputProps={{
            ...InputProps,
            startAdornment: (
              <InputAdornment position="start">
                {!downHide && (
                  <IconButton
                    disabled={disabled || downDisabled}
                    onClick={() => field.onChange(field.value - 1)}
                  >
                    <Remove />
                  </IconButton>
                )}
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                {!upHide && (
                  <IconButton
                    disabled={disabled || upDisabled}
                    onClick={() => field.onChange(field.value + 1)}
                  >
                    <Add />
                  </IconButton>
                )}
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
}
