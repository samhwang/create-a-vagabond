import { classed } from '@tw-classed/react';

export type TextFieldProps = React.ComponentProps<'input'> & {
  label?: string;
  helperText?: string;
  error?: boolean;
  RootProps?: React.ComponentProps<'div'>
};

export function TextField({
  label,
  helperText,
  error,
  disabled,
  RootProps,
  ...props
}: TextFieldProps) {
  return (
    <TextFieldRoot {...RootProps} disabled={disabled}>
      {label && <LabelText>{label}</LabelText>}
      <InputBase {...props} disabled={disabled} />
      {helperText && <HelperText type={error ? 'error' : 'helper'}>{helperText}</HelperText>}
    </TextFieldRoot>
  );
}

const TextFieldRoot = classed(
  'div',
  'relative',
  {
    variants: {
      disabled: {
        true: 'opacity-50 pointer-events-none'
      }
    }
  }
)

const LabelText = classed('div', 'text-gray-700');

const HelperText = classed(
  'div',
  'absolute -bottom-6',
  'text-sm',
  {
    variants: {
      type: {
        helper: 'text-slate-500',
        error: 'text-red-500 text-sm',
      },
    },
    defaultVariants: {
      type: 'helper',
    },
  }
);

const InputBase = classed(
  'input',
  'flex-1',
  'w-full py-2 px-4',
  'rounded-lg border-transparent appearance-none border border-gray-300 focus:border-transparent',
  'bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600'
);
