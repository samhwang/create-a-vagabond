import { graphql, useFragment } from 'react-relay';
import { useNavigate } from 'react-router-dom';
import { Divider, IconButton, ListItem, ListItemSecondaryAction, ListItemText } from '@mui/material';
import { ChevronRight } from '@mui/icons-material';
import { VagabondListItem_vagabond$key } from './__generated__/VagabondListItem_vagabond.graphql';

type VagabondListItemProps = {
  vagabond: VagabondListItem_vagabond$key;
};

export function VagabondListItem({ vagabond }: VagabondListItemProps) {
  const navigate = useNavigate();
  const vagabondFragment = useFragment(
    graphql`
      fragment VagabondListItem_vagabond on Vagabond {
        id
        name
        availablePoints
      }
    `,
    vagabond
  );

  return (
    <>
      <ListItem>
        <ListItemText primary={vagabondFragment.name} secondary={`${vagabondFragment.availablePoints} points left`} />
        <ListItemSecondaryAction>
          <IconButton onClick={() => navigate(vagabondFragment.id)}>
            <ChevronRight />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider variant='middle' />
    </>
  );
}
