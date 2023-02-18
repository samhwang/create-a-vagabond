import { Checkbox, FormControlLabel, FormControlLabelProps, Typography } from '@mui/material';
import { Control, FieldValues, Path, useController } from 'react-hook-form';

export type RHFCheckboxFieldItemProps<T extends FieldValues> = Omit<FormControlLabelProps, 'control'> & {
  name: Path<T>;
  control: Control<T>;
  value: string;
  max?: number
  helperText: string
  // HelperTextProps: TypographyProps
};

export function RHFCheckboxFieldItem<T extends FieldValues>({
  name,
  control,
  value,
  max,
  helperText,
  // HelperTextProps,
  ...props
}: RHFCheckboxFieldItemProps<T>) {
  const { field } = useController({ control, name });

  let disabled = useCheckBoxItemDisabled(
    control,
    name,
    value,
    max,
    props.disabled
  )
  
  return (
    <>
      <FormControlLabel
        {...props}
        disabled={disabled}
        control={
          <Checkbox
            name={value}
            onBlur={field.onBlur}
            ref={field.ref}
            checked={field.value?.includes(value) || false}
            onChange={({ target: { name, checked } }) => {
              const isMultiple = Array.isArray(field.value)
              if (isMultiple) {
                if (checked) return field.onChange([...(field.value || []), name]);
                field.onChange(field.value.filter((n: unknown) => n !== name));
              }
              else field.onChange(name)
            }}
          />
        }
      />
      {helperText && (
        <Typography
          ml={4}
          variant='subtitle2'
          color='GrayText'
          // {...HelperTextProps}
        >
          {helperText}
        </Typography>
      )}
    </>
  );
}

const useCheckBoxItemDisabled = <T extends FieldValues>(
  control: Control<T>,
  name: Path<T>,
  value: string,
  max: number = Number.MAX_SAFE_INTEGER,
  disabled: boolean = false,
) => {
  const { field } = useController({ control, name });

  if (disabled) return disabled

  const isMultiple = Array.isArray(field.value)
  if (!isMultiple) return disabled

  const isSelected = field.value?.includes(value)
  const isEnough = field.value?.length === max
  return isEnough && !isSelected
}
