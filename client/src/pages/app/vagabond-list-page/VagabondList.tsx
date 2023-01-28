import { graphql, usePaginationFragment } from 'react-relay'
import { VagabondListPaginationQuery } from './__generated__/VagabondListPaginationQuery.graphql'
import { VagabondList_user$key } from './__generated__/VagabondList_user.graphql'
import { PlusIcon } from '@heroicons/react/20/solid'
import { VagabondListItem } from './VagabondListItem'
import { List, ListContainer, ListHeader, ListHeaderTitle } from '../../../components/List'
import { Button } from '../../../components/Button'
import * as Dialog from '@radix-ui/react-dialog';
import { classed } from '@tw-classed/react'

type VagabondListProps = {
  title?: string
  user: VagabondList_user$key
}

export const VagabondList: React.FC<VagabondListProps> = props => {
  const { data } = usePaginationFragment<VagabondListPaginationQuery, VagabondList_user$key>(
    graphql`
      fragment VagabondList_user on User
      @refetchable(queryName: "VagabondListPaginationQuery")
      @argumentDefinitions(
        count: { type: "Int", defaultValue: 10 }
        cursor: { type: "String" }
      )
      {
        vagabondConnection(first: $count, after: $cursor)
        @connection(key: "VagabondList_user_vagabondConnection")
        {
          edges {
            node {
              ...VagabondListItem_vagabond
            }
          }
        }
      }
    `,
    props.user
  )

  return (
    <ListContainer>
      {props.title && (
        <ListHeader className='flex'>
          {props.title && (
            <ListHeaderTitle>
              {props.title}
            </ListHeaderTitle>
          )}
          <div className='grow' />
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <Button startIcon={<PlusIcon />} />
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay />
              <Dialog.Content>
                <Dialog.Title>
                  Add new Vagabond
                </Dialog.Title>
                <Dialog.Description>
                  create a new character
                </Dialog.Description>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </ListHeader>
      )}
      <List>
        {data.vagabondConnection.edges.map(edge => {
          if (!edge?.node) return null

          return <VagabondListItem vagabond={edge.node} />
        })}
      </List>
    </ListContainer>
  )
}

const DialogOverlay = classed(Dialog.Overlay, 'fixed bg-slate-900')
