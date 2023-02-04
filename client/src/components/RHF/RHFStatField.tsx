import { FieldValues, useController } from 'react-hook-form'
import { RHFQuantityField, RHFQuantityFieldProps } from './RHFQuantityField'

type RHFStatFieldProps<T extends FieldValues> =
  & Omit<RHFQuantityFieldProps<T>, 'downDisabled' | 'upDisabled'>
  & {
    startingPoint: number
    maxPoint?: number
    hasPointLeft: boolean
  }

export const RHFStatField = <T extends FieldValues>({
  startingPoint,
  maxPoint = 2,
  hasPointLeft,
  ...props
}: RHFStatFieldProps<T>) => {
  const { field } = useController({
    control: props.control,
    name: props.name
  })
  const currentPoint = field.value

  return (
    <RHFQuantityField
      {...props}
      downDisabled={currentPoint <= startingPoint}
      upDisabled={currentPoint >= maxPoint || !hasPointLeft}
    />
  )
}
