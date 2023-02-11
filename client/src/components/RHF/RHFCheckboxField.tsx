import { FormControl, FormControlProps, FormGroup, FormGroupProps, FormHelperText, FormHelperTextProps, FormLabel, FormLabelProps } from '@mui/material'
import { Control, FieldValues, Path, useController } from 'react-hook-form'

export type RHFCheckboxFieldProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;

  label?: string
  FormControlProps?: Omit<FormControlProps, 'error'>
  FormLabelProps?: FormLabelProps
  FormGroupProps?: FormGroupProps
  FormHelperTextProps?: FormHelperTextProps

  children?: React.ReactNode
}

export const RHFCheckboxField = <T extends FieldValues>({
  control,
  name,
  label,
  FormControlProps,
  FormLabelProps,
  FormGroupProps,
  FormHelperTextProps,
  children,
}: RHFCheckboxFieldProps<T>) => {
  const { fieldState } = useController({ control, name })

  return (
    <FormControl
      variant='standard'
      error={Boolean(fieldState.error)}
      {...FormControlProps}
    >
      {label && (
        <FormLabel {...FormLabelProps}>
          {label}
        </FormLabel>
      )}
      <FormGroup {...FormGroupProps}>
        {children}
      </FormGroup>
      {fieldState.error && (
        <FormHelperText {...FormHelperTextProps}>
          {fieldState.error.message}
        </FormHelperText>
      )}
    </FormControl>
  )
}
