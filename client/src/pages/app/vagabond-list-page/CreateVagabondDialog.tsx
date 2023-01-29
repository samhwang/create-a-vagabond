import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import { useSnackbar } from 'notistack'
import { SubmitHandler, useForm } from 'react-hook-form'
import { graphql, useMutation } from 'react-relay'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { RHFTextField } from '../../../components/RHF/RHFTextField'
import { CreateVagabondDialogMutation, VagabondCreateInput } from './__generated__/CreateVagabondDialogMutation.graphql'

const CreateVagabondInputSchema = z.object({
  name: z.string(),
})

type CreateVagabondDialogProps = {
  connectionIds: string[]
  open: boolean
  onClose: () => void
}

export const CreateVagabondDialog = ({ connectionIds, open, onClose }: CreateVagabondDialogProps) => {
  const { enqueueSnackbar } = useSnackbar()
  const [createVagabond, isOnFly] = useMutation<CreateVagabondDialogMutation>(graphql`
    mutation CreateVagabondDialogMutation(
      $connections: [ID!]!
      $input: VagabondCreateInput!
    ) {
      vagabondCreate(input: $input) {
        __typename
        ... on Error {
          message
        }
        ... on MutationVagabondCreateSuccess {
          data {
            vagabond
            @appendNode(
              connections: $connections
              edgeTypeName: "UserVagabondConnectionEdge"
            )
            {
              name
              ...VagabondListItem_vagabond
            }
          }
        }
      }
    }
  `)

  const { control, handleSubmit } = useForm<VagabondCreateInput>({
    resolver: zodResolver(CreateVagabondInputSchema)
  })

  const onSubmit: SubmitHandler<VagabondCreateInput> = data => {
    createVagabond({
      variables: {
        connections: connectionIds,
        input: data
      },
      onCompleted(response, errors) {
        if (errors) {
          errors.forEach(error => enqueueSnackbar(error.message, { variant: 'error' }))
          return
        }

        if (response.vagabondCreate.__typename === 'Error') {
          enqueueSnackbar(response.vagabondCreate.message, { variant: 'error' })
          return
        }

        if (response.vagabondCreate.__typename === 'MutationVagabondCreateSuccess') {
          enqueueSnackbar(`${response.vagabondCreate.data.vagabond.name} is created`, { variant: 'success' })
          onClose()
        }
      },
    })
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle>
          Create new Vagabond
        </DialogTitle>
        <DialogContent>
          <RHFTextField
            control={control}
            name='name'
            label='Vagabond Name'
            disabled={isOnFly}
            sx={{ mt: 1 }}
          />
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
            Create
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}
