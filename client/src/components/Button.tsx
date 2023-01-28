import { classed, ComponentProps, deriveClassed } from '@tw-classed/react';

export const ButtonBase = classed(
  'button',
  'inline-flex justify-center items-center',
  'py-2 px-4 w-max',
  'focus:outline-none focus:ring-2 focus:ring-offset-2',
  'disabled:cursor-not-allowed disabled:opacity-75',
  'text-white text-center text-base font-semibold',
  'shadow-md',
  'rounded-lg',
  'transition ease-in duration-200',
  {
    variants: {
      color: {
        primary: 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200',
        // secondary: '',
        success: 'bg-green-500 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200',
        error: 'bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200',
        // warning: '',
        // info: '',
      },
    },
    defaultVariants: {
      color: 'primary'
    }
  }
);

export type ButtonProps = ComponentProps<typeof ButtonBase> & {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  loading?: boolean
}

export const Button = deriveClassed<typeof ButtonBase, ButtonProps>(
  ({
    loading = false,
    disabled,
    startIcon,
    endIcon,
    children,
    ...props
  }, ref) => {
    return (
      <ButtonBase
        {...props}
        ref={ref}
        disabled={disabled || loading}
      >
        {loading && <span className='w-5 h-5'><LoadingIcon /></span>}
        {!loading && startIcon && <span className='w-5 h-5'>{startIcon}</span>}
        {children}
        {!loading && endIcon && <span className='w-5 h-5'>{endIcon}</span>}
      </ButtonBase>
    )
  }
)

const LoadingIcon = () => (
  <svg width="20" height="20" fill="currentColor" className="mr-2 animate-spin" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
    <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z" />
  </svg>
)
