import { classed } from '@tw-classed/react'

export const ListContainer = classed.div('container flex flex-col items-center justify-center w-full mx-auto bg-white rounded-lg shadow dark:bg-gray-800')

export const ListHeader = classed.div('w-full px-4 py-5 border-b sm:px-6')

export const ListHeaderTitle = classed.h3('text-lg font-medium leading-6 text-gray-900 dark:text-white')

export const ListHeaderSubtitle = classed.p('max-w-2xl mt-1 text-sm text-gray-500 dark:text-gray-200')

export const List = classed.ul('flex flex-col divide-y divide w-full')

export const ListItemContainer = classed.li('flex flex-row')

export const ListItem = classed.div('flex items-center flex-1 p-4 cursor-pointer select-none')

export const ListItemAvatar = classed.div('flex flex-col items-center justify-center w-10 h-10 mr-4')

export const ListItemText = classed.div('flex-1 pl-1 mr-16')

export const ListItemTextPrimary = classed.div('font-medium dark:text-white')

export const ListItemTextSecondary = classed.div('text-sm text-gray-600 dark:text-gray-200')

export const ListItemAction = classed.button('flex justify-end w-16 text-right')

{/* 
  <ListContainer>
    <ListHeader>
      <ListHeaderTitle />
      <ListHeaderSubTitle />
    </ListHeader>
    <List>
      <ListItemContainer>
        <ListItem>
          <ListItemAvatar></ListItemAvatar>
          <ListItemText>
            <ListItemTextPrimary></ListItemTextPrimary>
            <ListItemTextSecondary></ListItemTextSecondary>
          </ListItemText>
          <ListItemAction></ListItemAction>
        </ListItem>
      </ListItemContainer>
    </List>
  </ListContainer>
*/}
