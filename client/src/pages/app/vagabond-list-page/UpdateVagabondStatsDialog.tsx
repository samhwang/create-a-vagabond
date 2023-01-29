import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, Typography } from '@mui/material'
import { useSnackbar } from 'notistack'
import { SubmitHandler, useForm } from 'react-hook-form'
import { graphql, useMutation } from 'react-relay'
import { RHFNumberField } from '../../../components/RHF/RHFNumberField'
import { RHFTextField } from '../../../components/RHF/RHFTextField'
import { UpdateVagabondStatsDialogMutation, VagabondUpdateStatsInput } from './__generated__/UpdateVagabondStatsDialogMutation.graphql'

type UpdateVagabondStatsDialogProps = {
  open: boolean
  onClose: () => void
  vagabondId: string
  availablePoints: number
}

export const UpdateVagabondStatsDialog = ({
  open,
  onClose,
  vagabondId,
  availablePoints,
}: UpdateVagabondStatsDialogProps) => {
  const { enqueueSnackbar } = useSnackbar()

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
  `)

  const { control, handleSubmit } = useForm<VagabondUpdateStatsInput>({
    defaultValues: {
      charm: 0,
      cunning: 0,
      finesse: 0,
      luck: 0,
      might: 0,
      vagabondId,
    }
  })

  const onSubmit: SubmitHandler<VagabondUpdateStatsInput> = data => {
    console.log(data)
    updateStats({
      variables: {
        input: data,
      },
      onCompleted(response, errors) {
        if (errors) {
          errors.forEach(error => enqueueSnackbar(error.message, { variant: 'error' }))
          return
        }

        if (response.vagabondUpdateStats.__typename === 'Error') {
          enqueueSnackbar(response.vagabondUpdateStats.message, { variant: 'error' })
          return
        }

        if (response.vagabondUpdateStats.__typename === 'MutationVagabondUpdateStatsSuccess') {
          onClose()
        }
      },
    })
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle>Update stats</DialogTitle>
        <DialogContent>
          <Stack spacing={2}>
            <Typography>
              {availablePoints} points available
            </Typography>
            <RHFNumberField
              sx={{ mt: 1 }}
              control={control}
              name='charm'
              label='Charm'
            />
            <RHFNumberField
              control={control}
              name='cunning'
              label='Cunning'
            />
            <RHFNumberField
              control={control}
              name='finesse'
              label='Finesse'
            />
            <RHFNumberField
              control={control}
              name='luck'
              label='LucK'
            />
            <RHFNumberField
              control={control}
              name='might'
              label='Might'
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={onClose}
            disabled={isOnFly}
          >
            Close
          </Button>
          <Button
            variant='contained'
            type='submit'
            disabled={isOnFly}
          >
            Update
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}
