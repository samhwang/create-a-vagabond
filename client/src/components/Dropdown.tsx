import { classed } from '@tw-classed/react';
import { Content, Item } from '@radix-ui/react-dropdown-menu';

export const DropdownContent = classed(Content, 'bg-white', 'mt-1 p-1', 'rounded-md', 'shadow-lg', 'ring-1 ring-black ring-opacity-5');

export const DropdownItem = classed(
  Item,
  'block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600',
  'cursor-pointer'
);
