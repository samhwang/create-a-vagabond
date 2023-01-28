import { ComponentProps } from '@tw-classed/react'
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import { TextFieldHelperText, TextFieldInput, TextFieldInputProps, TextFieldLabel, TextFieldRoot } from '../Form/TextField'
// import { TextField, TextFieldProps } from '../Form/TextField';

export type RHFTextFieldProps<T extends FieldValues> = Omit<TextFieldInputProps, 'name'> & {
  label?: string
  name: Path<T>;
  control: Control<T>;
};

export function RHFTextField<T extends FieldValues>({
  control,
  name,
  label,
  ...props
}: RHFTextFieldProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <TextFieldRoot error={Boolean(fieldState.error)}>
          {label && (
            <TextFieldLabel>
              {label}
            </TextFieldLabel>
          )}
          <TextFieldInput
            {...field}
            {...props}
            error={Boolean(fieldState.error)}
          />
          {fieldState.error && (
            <TextFieldHelperText type='error'>
              {fieldState.error.message}
            </TextFieldHelperText>
          )}
        </TextFieldRoot>
      )}
    />
  );
}
