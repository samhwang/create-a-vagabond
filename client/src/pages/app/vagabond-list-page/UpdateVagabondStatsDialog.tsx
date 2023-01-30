import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, Typography } from '@mui/material';
import { useSnackbar } from 'notistack';
import { SubmitHandler, useForm } from 'react-hook-form';
import { graphql, useFragment, useMutation } from 'react-relay';
import { useTranslation } from 'react-i18next';
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

  const { control, handleSubmit } = useForm<VagabondUpdateStatsInput>({
    defaultValues: {
      charm: vagabond.charm,
      cunning: vagabond.cunning,
      finesse: vagabond.finesse,
      luck: vagabond.luck,
      might: vagabond.might,
      vagabondId: vagabond.id,
    },
  });

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

  return (
    <Dialog open={open} onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle>Update stats</DialogTitle>
        <DialogContent>
          <Stack spacing={2}>
            <Typography textAlign="right">{t('points', { count: vagabond.availablePoints })} left</Typography>
            <RHFQuantityField sx={{ mt: 1 }} control={control} name="charm" label="Charm" />
            <RHFQuantityField control={control} name="cunning" label="Cunning" />
            <RHFQuantityField control={control} name="finesse" label="Finesse" />
            <RHFQuantityField control={control} name="luck" label="LucK" />
            <RHFQuantityField control={control} name="might" label="Might" />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} disabled={isOnFly}>
            Close
          </Button>
          <Button variant="contained" type="submit" disabled={isOnFly}>
            Update
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
