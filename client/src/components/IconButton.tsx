import { classed } from '@tw-classed/react'

export const IconButton = classed(
  'button',
  'rounded-full',
  'h-full w-auto',
  'inline-flex items-center justify-center',
  'bg-white	hover:bg-teal-300',
  'focus:outline-none focus:bg-teal-400'
)
