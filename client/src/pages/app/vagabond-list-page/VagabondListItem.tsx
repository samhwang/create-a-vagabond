import { graphql, useFragment } from 'react-relay';
import { useNavigate } from 'react-router-dom';
import { Chip, Divider, IconButton, ListItem, ListItemSecondaryAction, ListItemText, Stack } from '@mui/material';
import { ChevronRight } from '@mui/icons-material';
import { useState } from 'react';
import { VagabondListItem_vagabond$key } from './__generated__/VagabondListItem_vagabond.graphql';
import { UpdateVagabondStatsDialog } from './UpdateVagabondStatsDialog';
import { UpdateVagabondStatsDialog_vagabond$key } from './__generated__/UpdateVagabondStatsDialog_vagabond.graphql'

type VagabondListItemProps = {
  vagabondFragment: VagabondListItem_vagabond$key;
};

export function VagabondListItem({ vagabondFragment }: VagabondListItemProps) {
  const navigate = useNavigate();
  const vagabond = useFragment(
    graphql`
      fragment VagabondListItem_vagabond on Vagabond {
        id
        name
        
        charm
        cunning
        finesse
        luck
        might
        availablePoints
        ...UpdateVagabondStatsDialog_vagabond
      }
    `,
    vagabondFragment
  );

  const currentStats = [
    `CHA ${vagabond.charm}`,
    `CUN ${vagabond.cunning}`,
    `FIN ${vagabond.finesse}`,
    `LUC ${vagabond.luck}`,
    `MIG ${vagabond.might}`,
  ].join(' ');

  return (
    <>
      <ListItem>
        <ListItemText
          primary={
            <Stack direction="row" spacing={1} alignItems="center">
              <span>{vagabond.name}</span>
              <UpdateStatsChip
                points={vagabond.availablePoints}
                vagabondFragment={vagabond}
              />
            </Stack>
          }
          secondary={currentStats}
        />
        <ListItemSecondaryAction>
          <IconButton onClick={() => navigate(vagabond.id)}>
            <ChevronRight />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider variant="middle" />
    </>
  );
}

type UpdateStatsChipProps = {
  points: number;
  vagabondFragment: UpdateVagabondStatsDialog_vagabond$key
};

function UpdateStatsChip({ points, vagabondFragment }: UpdateStatsChipProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Chip label={points} variant="outlined" color="error" onClick={() => setOpen(true)} />
      <UpdateVagabondStatsDialog
        open={open}
        onClose={() => setOpen(false)}
        vagabondFragment={vagabondFragment}
      />
    </>
  );
}
