import { graphql, useFragment } from 'react-relay'
import { useNavigate } from 'react-router-dom'
import { IconButton, ListItem, ListItemSecondaryAction, ListItemText } from '@mui/material'
import { ChevronRight } from '@mui/icons-material'
import { VagabondListItem_vagabond$key } from './__generated__/VagabondListItem_vagabond.graphql'

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
    <ListItem>
      <ListItemText
        primary={vagabond.name}
        secondary={`${vagabond.availablePoints} points left`}
      />
      <ListItemSecondaryAction>
        <IconButton onClick={() => navigate(vagabond.id)}>
          <ChevronRight />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}
