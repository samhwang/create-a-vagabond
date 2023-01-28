import { classed, ComponentProps } from '@tw-classed/react'

export const TextFieldRoot = classed.div(
  'relative',
  {
    variants: {
      error: {
        true: 'mb-6'
      }
    }
  }
)

export const TextFieldLabel = classed.label('text-gray-700')

export type TextFieldInputProps = ComponentProps<typeof TextFieldInput>
export const TextFieldInput = classed.input(
  'flex-1',
  'w-full py-2 px-4',
  'appearance-none',
  'rounded-lg border-transparent border border-gray-300 shadow-sm',
  'focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent',
  'bg-white placeholder-gray-400',
  'text-base text-gray-700',
  {
    variants: {
      error: {
        true: 'ring-2 !ring-red-500'
      }
    }
  }
)

export const TextFieldHelperText = classed.p(
  'absolute text-sm -bottom-6',
  {
    variants: {
      type: {
        helper: 'text-slate-500',
        error: 'text-red-500',
      },
    },
    defaultVariants: {
      type: 'helper'
    }
  }
)
