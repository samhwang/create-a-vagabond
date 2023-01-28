import { graphql, useFragment } from 'react-relay'
import { useNavigate } from 'react-router-dom'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { ListItem, ListItemAction, ListItemContainer, ListItemText, ListItemTextPrimary, ListItemTextSecondary } from '../../../components/List'
import { VagabondListItem_vagabond$key } from './__generated__/VagabondListItem_vagabond.graphql'
import { classed } from '@tw-classed/react'

type VagabondListItemProps = {
  vagabond: VagabondListItem_vagabond$key
}

export const VagabondListItem: React.FC<VagabondListItemProps> = props => {
  const navigate = useNavigate()
  const vagabond = useFragment(
    graphql`
      fragment VagabondListItem_vagabond on Vagabond {
        id
        name
        availablePoints
      }
    `,
    props.vagabond
  )

  return (
    <ListItemContainer>
      <ListItem>
        <ListItemText>
          <ListItemTextPrimary>
            {vagabond.name}
          </ListItemTextPrimary>
          <ListItemTextSecondary>
            {vagabond.availablePoints} points left
          </ListItemTextSecondary>
        </ListItemText>
        <ListItemAction onClick={() => navigate(vagabond.id)}>
          <ClassedListIcon />
        </ListItemAction>
      </ListItem>
    </ListItemContainer>
  )
}

const ClassedListIcon = classed(
  ChevronRightIcon,
  'text-gray-500 hover:text-gray-800 dark:hover:text-white dark:text-gray-200'
)
