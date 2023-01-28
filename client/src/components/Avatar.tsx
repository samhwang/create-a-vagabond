import { classed } from '@tw-classed/react';
import {
  Root,
  AvatarProps as RootProps,
  Image,
  AvatarImageProps as ImageProps,
  Fallback,
  AvatarFallbackProps as FallbackProps,
} from '@radix-ui/react-avatar';

type AvatarProps = {
  src?: string;
  initial?: string;
  RootProps?: RootProps;
  ImageProps?: ImageProps;
  FallbackProps?: FallbackProps;
};

export function Avatar({ src, initial, RootProps, ImageProps, FallbackProps }: AvatarProps) {
  return (
    <ClassedRoot {...RootProps}>
      <ClassedImage src={src} {...ImageProps} />
      <ClassedFallback delayMs={600} {...FallbackProps}>
        {initial}
      </ClassedFallback>
    </ClassedRoot>
  );
}

const ClassedRoot = classed(
  Root,
  'inline-flex items-center justify-center align-middle',
  'overflow-hidden select-none',
  'rounded-full',
  'w-8 h-8'
);

const ClassedImage = classed(Image,
  'inline-block',
  'w-full h-full',
  'rounded-full',
  'ring-2 ring-white'
);

const ClassedFallback = classed(
  Fallback,
  'w-full h-full',
  'flex items-center justify-center',
  'bg-white',
  'text-base text-violet-700 font-medium',
  'leading-4'
);
