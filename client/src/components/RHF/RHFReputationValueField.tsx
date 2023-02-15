import { FieldValues, useController } from 'react-hook-form';
import { RHFQuantityField, RHFQuantityFieldProps } from './RHFQuantityField';

type RHFReputationValueFieldProps<T extends FieldValues> = Omit<
  RHFQuantityFieldProps<T>,
  'downDisabled' | 'upDisabled'
> & {
  startingPoint: number;
  maxPoint: number;
  minPoint: number;
};

export function RHFReputationValueField<T extends FieldValues>({
  startingPoint,
  maxPoint,
  minPoint,
  ...props
}: RHFReputationValueFieldProps<T>) {
  const { field } = useController({
    control: props.control,
    name: props.name,
  });
  const currentPoint = field.value;

  return <RHFQuantityField {...props} downDisabled={currentPoint <= minPoint} upDisabled={currentPoint >= maxPoint} />;
}
