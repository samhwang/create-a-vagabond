import { graphql, useFragment } from 'react-relay';
import { useNavigate } from 'react-router-dom';
import { Chip, Divider, IconButton, ListItem, ListItemSecondaryAction, ListItemText, Stack } from '@mui/material';
import { ChevronRight } from '@mui/icons-material';
import { VagabondListItem_vagabond$key } from './__generated__/VagabondListItem_vagabond.graphql';
import { useState } from 'react'
import { UpdateVagabondStatsDialog } from './UpdateVagabondStatsDialog'

type VagabondListItemProps = {
  vagabond: VagabondListItem_vagabond$key;
};

export function VagabondListItem(props: VagabondListItemProps) {
  const navigate = useNavigate();
  const vagabond = useFragment(
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
    props.vagabond
  );

  const currentStats = [
    `CHA ${vagabond.charm}`,
    `CUN ${vagabond.cunning}`,
    `FIN ${vagabond.finesse}`,
    `LUC ${vagabond.luck}`,
    `MIG ${vagabond.might}`,
  ].join(' ')

  return (
    <>
      <ListItem>
        <ListItemText
          primary={
            <Stack
              direction='row'
              spacing={1}
              alignItems='center'
            >
              <span>{vagabond.name}</span>
              <UpdateStatsChip
                id={vagabond.id}
                points={vagabond.availablePoints}
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
      <Divider variant='middle' />
    </>
  );
}

type UpdateStatsChipProps = {
  id: string
  points: number
}

const UpdateStatsChip = ({ id, points }: UpdateStatsChipProps) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Chip
        label={points}
        variant='outlined'
        color='error'
        onClick={() => setOpen(true)}
      />
      <UpdateVagabondStatsDialog
        vagabondId={id}
        availablePoints={points}
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  )
}
