import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Container, Stack, Typography } from '@mui/material'
import { useSetAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { VagabondCreateConnectionCreateInput } from '../ReviewAndCreateStep/__generated__/ReviewAndCreateStepMutation.graphql'
import { ConnectionsField } from './ConnectionsField'

export type ConnectionsStepInput = {
  connections?: readonly VagabondCreateConnectionCreateInput[] | null | undefined
  // reputations
}

export const connectionsStepInputAtom = atomWithStorage<ConnectionsStepInput>(
  'connectionsStep',
  {
    connections: [],
  }
)

const ConnectionsStepInputSchema: z.ZodType<ConnectionsStepInput> = z.object({
  connections: z.array(z.object({
    type: z.string(),
    to: z.string(),
    notes: z.string(),
  }))
})

export const ConnectionsStep = () => {
  const navigate = useNavigate()
  const methods = useForm<ConnectionsStepInput>({
    resolver: zodResolver(ConnectionsStepInputSchema)
  })
  const setInput = useSetAtom(connectionsStepInputAtom)
  const onSubmit: SubmitHandler<ConnectionsStepInput> = data => {
    setInput(data)
    navigate('/vagabond-create/review_create')
  }

  return (
    <Container maxWidth='md' sx={{ mt: 4, justifyContent: 'center' }}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Stack spacing={2}>
            <Stack spacing={2}>
              <ConnectionsField />
            </Stack>
            <Typography variant="h6">
              Reputations
            </Typography>
          </Stack>
          <Stack direction='row' justifyContent='flex-end' mt={2}>
            <Button onClick={() => navigate('/vagabond-create/stats_moves')}>
              Back
            </Button>
            <Button type='submit' variant='contained'>
              Next
            </Button>
          </Stack>
        </form>
      </FormProvider>
    </Container>
  )
}
