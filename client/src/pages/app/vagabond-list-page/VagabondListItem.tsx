import { graphql, useFragment } from 'react-relay';
import { useNavigate } from 'react-router-dom';
import { Chip, Divider, IconButton, ListItem, ListItemSecondaryAction, ListItemText, Stack } from '@mui/material';
import { ChevronRight } from '@mui/icons-material';
import { useState } from 'react';
import { VagabondListItem_vagabond$key } from './__generated__/VagabondListItem_vagabond.graphql';
import { UpdateVagabondStatsDialog } from './UpdateVagabondStatsDialog';

type VagabondListItemProps = {
  vagabond: VagabondListItem_vagabond$key;
};

export function VagabondListItem({ vagabond }: VagabondListItemProps) {
  const navigate = useNavigate();
  const vagabondData = useFragment(
    graphql`
      fragment VagabondListItem_vagabond on Vagabond {
        id
        name
        availablePoints
        charm
        cunning
        finesse
        luck
        might
      }
    `,
    vagabond
  );

  const currentStats = [
    `CHA ${vagabondData.charm}`,
    `CUN ${vagabondData.cunning}`,
    `FIN ${vagabondData.finesse}`,
    `LUC ${vagabondData.luck}`,
    `MIG ${vagabondData.might}`,
  ].join(' ');

  return (
    <>
      <ListItem>
        <ListItemText
          primary={
            <Stack direction="row" spacing={1} alignItems="center">
              <span>{vagabondData.name}</span>
              <UpdateStatsChip id={vagabondData.id} points={vagabondData.availablePoints} />
            </Stack>
          }
          secondary={currentStats}
        />
        <ListItemSecondaryAction>
          <IconButton onClick={() => navigate(vagabondData.id)}>
            <ChevronRight />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider variant="middle" />
    </>
  );
}

type UpdateStatsChipProps = {
  id: string;
  points: number;
};

function UpdateStatsChip({ id, points }: UpdateStatsChipProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Chip label={points} variant="outlined" color="error" onClick={() => setOpen(true)} />
      <UpdateVagabondStatsDialog vagabondId={id} availablePoints={points} open={open} onClose={() => setOpen(false)} />
    </>
  );
}
