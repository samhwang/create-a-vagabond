import { Checkbox, FormControlLabel, FormControlLabelProps } from '@mui/material';
import { Control, FieldValues, Path, useController } from 'react-hook-form';

export type RHFCheckboxFieldItemProps<T extends FieldValues> = Omit<FormControlLabelProps, 'control'> & {
  name: Path<T>;
  control: Control<T>;
  value: string;
};

export function RHFCheckboxFieldItem<T extends FieldValues>({
  name,
  control,
  value,
  ...props
}: RHFCheckboxFieldItemProps<T>) {
  const { field } = useController({ control, name });

  return (
    <FormControlLabel
      {...props}
      control={
        <Checkbox
          name={value}
          onBlur={field.onBlur}
          ref={field.ref}
          checked={field.value?.includes(value) || false}
          onChange={({ target: { name, checked } }) => {
            if (checked) return field.onChange([...(field.value || []), name]);
            field.onChange(field.value.filter((n: unknown) => n !== name));
          }}
        />
      }
    />
  );
}
