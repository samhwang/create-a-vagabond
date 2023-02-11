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
      render={({ field, fieldState, formState }) => (
        <TextField
          {...props}
          {...field}
          name={name}
          defaultValue={formState.defaultValues?.[name]}
          helperText={fieldState.error?.message}
          error={Boolean(fieldState.error)}
          InputLabelProps={{
            ...props.InputLabelProps,
            shrink: field.value ? true : props.InputLabelProps?.shrink
          }}
        />
      )}
    />
  );
}
