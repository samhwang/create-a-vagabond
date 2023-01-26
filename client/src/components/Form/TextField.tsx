import { classed } from '@tw-classed/react'
import { InputBase } from './InputBase'

export type TextFieldProps = React.ComponentProps<'input'> & {
  label?: string
  helperText?: string
  error?: boolean
}

export const TextField = ({
  label,
  helperText,
  error,
  ...props
}: TextFieldProps) => {
  return (
    <div>
      {label && <LabelText>{label}</LabelText>}
      <InputBase {...props} />
      {helperText && <HelperText type={error ? 'error' : 'helper'}>{helperText}</HelperText>}
    </div>
  )
}

const LabelText = classed(
  'div',
  'text-slate-700'
)

const HelperText = classed(
  'div',
  '-mt-1.5',
  {
    variants: {
      type: {
        helper: 'text-slate-500',
        error: 'text-red-400 text-sm',
      }
    },
    defaultVariants: {
      type: 'helper'
    },
  }
)
