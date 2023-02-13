import {
  FormControl,
  FormControlProps,
  FormHelperText,
  FormHelperTextProps,
  FormLabel,
  FormLabelProps,
  RadioGroup,
} from '@mui/material';
import { Control, FieldValues, Path, useController } from 'react-hook-form';
import { ReactNode } from 'react';

export type RHFCheckboxFieldProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;

  label?: string;
  FormControlProps?: Omit<FormControlProps, 'error'>;
  FormLabelProps?: FormLabelProps;
  FormHelperTextProps?: FormHelperTextProps;

  children?: ReactNode;
};

export function RHFRadioGroupField<T extends FieldValues>({
  control,
  name,
  label,
  FormControlProps,
  FormLabelProps,
  FormHelperTextProps,
  children,
}: RHFCheckboxFieldProps<T>) {
  const { field, fieldState } = useController({ control, name });

  return (
    <FormControl variant="standard" error={Boolean(fieldState.error)} {...FormControlProps}>
      {label && <FormLabel {...FormLabelProps}>{label}</FormLabel>}
      <RadioGroup {...field} value={field.value || ''}>
        {children}
      </RadioGroup>
      {fieldState.error && <FormHelperText {...FormHelperTextProps}>{fieldState.error.message}</FormHelperText>}
    </FormControl>
  );
}
