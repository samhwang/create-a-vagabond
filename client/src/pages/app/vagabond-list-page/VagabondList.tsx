import { graphql, usePaginationFragment } from 'react-relay'
import { VagabondListPaginationQuery } from './__generated__/VagabondListPaginationQuery.graphql'
import { VagabondList_user$key } from './__generated__/VagabondList_user.graphql'
import { PlusIcon } from '@heroicons/react/20/solid'
import { useNavigate } from 'react-router-dom'
import { VagabondListItem } from './VagabondListItem'
import { List, ListContainer, ListHeader, ListHeaderTitle } from '../../../components/List'
import { Button } from '../../../components/Button'

type VagabondListProps = {
  title?: string
  user: VagabondList_user$key
}

export const VagabondList: React.FC<VagabondListProps> = props => {
  const navigate = useNavigate()
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
          <Button startIcon={<PlusIcon />} />
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
