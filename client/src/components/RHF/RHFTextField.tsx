import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import { TextField, TextFieldProps } from '@mui/material';

export type RHFTextFieldProps<T extends FieldValues> = Omit<TextFieldProps, 'name' | 'helperText' | 'error'> & {
  name: Path<T>;
  control: Control<T>;
};

export function RHFTextField<T extends FieldValues>({ control, name, ...props }: RHFTextFieldProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <TextField
          {...props}
          {...field}
          name={name}
          helperText={fieldState.error?.message}
          error={Boolean(fieldState.error)}
        />
      )}
    />
  );
}
