import { classed } from '@tw-classed/react';
import { Content, Item } from '@radix-ui/react-dropdown-menu';

export const DropdownContent = classed(Content, 'bg-white', 'p-1', 'rounded-md', 'shadow-lg');

export const DropdownItem = classed(
  Item,
  'flex items-center',
  'h-6 py-0 px-1.5 pl-3',
  'rounded',
  'text-sm leading-4 text-teal-500',
  'outline-none	select-none',
  'hover:bg-teal-500 hover:text-white',
  'cursor-pointer'
);
