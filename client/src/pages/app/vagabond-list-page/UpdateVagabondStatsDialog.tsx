import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, Typography } from '@mui/material';
import { useSnackbar } from 'notistack';
import { SubmitHandler, useForm } from 'react-hook-form';
import { graphql, useFragment, useMutation } from 'react-relay';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { RHFQuantityField } from '../../../components/RHF/RHFQuantityField';
import {
  UpdateVagabondStatsDialogMutation,
  VagabondUpdateStatsInput,
} from './__generated__/UpdateVagabondStatsDialogMutation.graphql';
import { UpdateVagabondStatsDialog_vagabond$key } from './__generated__/UpdateVagabondStatsDialog_vagabond.graphql';

type UpdateVagabondStatsDialogProps = {
  open: boolean;
  onClose: () => void;
  vagabondFragment: UpdateVagabondStatsDialog_vagabond$key;
};

export function UpdateVagabondStatsDialog({ open, onClose, vagabondFragment }: UpdateVagabondStatsDialogProps) {
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();

  const vagabond = useFragment(
    graphql`
      fragment UpdateVagabondStatsDialog_vagabond on Vagabond {
        id
        charm
        cunning
        finesse
        luck
        might
        availablePoints
      }
    `,
    vagabondFragment
  );

  const [updateStats, isOnFly] = useMutation<UpdateVagabondStatsDialogMutation>(graphql`
    mutation UpdateVagabondStatsDialogMutation($input: VagabondUpdateStatsInput!) {
      vagabondUpdateStats(input: $input) {
        __typename
        ... on Error {
          message
        }
        ... on MutationVagabondUpdateStatsSuccess {
          data {
            vagabond {
              ...VagabondListItem_vagabond
            }
          }
        }
      }
    }
  `);

  const { control, handleSubmit, watch, reset } = useForm<VagabondUpdateStatsInput>({
    defaultValues: {
      charm: vagabond.charm,
      cunning: vagabond.cunning,
      finesse: vagabond.finesse,
      luck: vagabond.luck,
      might: vagabond.might,
      vagabondId: vagabond.id,
    },
  });
  useEffect(() => {
    reset();
  }, [open, reset]);

  const [charm, cunning, finesse, luck, might] = watch(['charm', 'cunning', 'finesse', 'luck', 'might']);
  const usedPoints =
    charm! -
    vagabond.charm +
    cunning! -
    vagabond.cunning +
    finesse! -
    vagabond.finesse +
    luck! -
    vagabond.luck +
    might! -
    vagabond.might;
  const pointLeft = vagabond.availablePoints - usedPoints;
  const ableToAddMore = pointLeft > 0;

  const onSubmit: SubmitHandler<VagabondUpdateStatsInput> = (data) => {
    console.log(data);
    updateStats({
      variables: {
        input: data,
      },
      onCompleted(response, errors) {
        if (errors) {
          errors.forEach((error) => enqueueSnackbar(error.message, { variant: 'error' }));
          return;
        }

        if (response.vagabondUpdateStats.__typename === 'Error') {
          enqueueSnackbar(response.vagabondUpdateStats.message, { variant: 'error' });
          return;
        }

        if (response.vagabondUpdateStats.__typename === 'MutationVagabondUpdateStatsSuccess') {
          onClose();
        }
      },
    });
  };

  console.log({
    pointLeft,
    upDisabled: pointLeft > 0,
  });

  return (
    <Dialog open={open} onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle>Update stats</DialogTitle>
        <DialogContent>
          <Stack spacing={2}>
            <Typography textAlign="right">{t('points', { count: pointLeft })} left</Typography>
            <RHFQuantityField
              sx={{ mt: 1 }}
              control={control}
              name="charm"
              label="Charm"
              downHide
              upDisabled={!ableToAddMore}
            />
            <RHFQuantityField control={control} name="cunning" label="Cunning" downHide upDisabled={!ableToAddMore} />
            <RHFQuantityField control={control} name="finesse" label="Finesse" downHide upDisabled={!ableToAddMore} />
            <RHFQuantityField control={control} name="luck" label="LucK" downHide upDisabled={!ableToAddMore} />
            <RHFQuantityField control={control} name="might" label="Might" downHide upDisabled={!ableToAddMore} />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} disabled={isOnFly}>
            Close
          </Button>
          <Button variant="contained" onClick={() => reset()}>
            Reset
          </Button>
          <Button variant="contained" type="submit" disabled={isOnFly}>
            Update
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
