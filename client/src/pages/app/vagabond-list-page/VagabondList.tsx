import { graphql, usePaginationFragment } from 'react-relay'
import { VagabondListPaginationQuery } from './__generated__/VagabondListPaginationQuery.graphql'
import { VagabondList_user$key } from './__generated__/VagabondList_user.graphql'
import { PlusIcon } from '@heroicons/react/20/solid'
import { VagabondListItem } from './VagabondListItem'
// import { List, ListContainer, ListHeader, ListHeaderTitle } from '../../../components/List'
import * as Dialog from '@radix-ui/react-dialog';
import { classed } from '@tw-classed/react'
import { IconButton, List, ListSubheader, Paper, Typography } from '@mui/material'
import { Add } from '@mui/icons-material'

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
    <Paper elevation={5}>
      <List
        subheader={
          <ListSubheader sx={{ display: 'flex', p: 2 }}>
            <Typography variant='h6'>
              {props.title}
            </Typography>
            <div style={{ flexGrow: 1 }} />
            <IconButton>
              <Add />
            </IconButton>
          </ListSubheader>
        }
      >
        {data.vagabondConnection.edges.map(edge => {
          if (!edge?.node) return null

          return <VagabondListItem vagabond={edge.node} />
        })}
      </List>
    </Paper>
  )
}

const DialogOverlay = classed(Dialog.Overlay, 'fixed bg-slate-900')
