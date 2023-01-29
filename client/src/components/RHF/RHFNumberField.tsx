import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import { TextField, TextFieldProps } from '@mui/material';

export type RHFNumberFieldProps<T extends FieldValues> = Omit<
  TextFieldProps,
  'name' | 'helperText' | 'error' | 'type'
> & {
  name: Path<T>;
  control: Control<T>;
};

export function RHFNumberField<T extends FieldValues>({ control, name, ...props }: RHFNumberFieldProps<T>) {
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
          type="number"
          onChange={(event) => field.onChange(parseInt(event.target.value, 10))}
        />
      )}
    />
  );
}
