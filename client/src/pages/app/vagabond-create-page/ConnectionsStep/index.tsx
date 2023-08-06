import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Container, Stack, Typography } from '@mui/material';
import { useSetAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { ConnectionsField } from './ConnectionsField';
import { ReputationsField } from './ReputationField';

const ConnectionsStepInputSchema = z.object({
  connections: z
    .array(
      z.object({
        type: z.string().min(1, 'Please pick one!'),
        to: z.string().min(1, 'Who is this connection?'),
        notes: z.string().min(1, 'Some notes to describe this relationship'),
      })
    )
    .nullish(),
  reputations: z
    .array(
      z.object({
        faction: z.string(),
        score: z.number().min(-3).max(3),
        prestige: z.number().min(0).max(15),
        notoriety: z.number().min(0).max(9),
      })
    )
    .nullish(),
});

export type ConnectionsStepInput = z.infer<typeof ConnectionsStepInputSchema>;

export const connectionsStepInputAtom = atomWithStorage<ConnectionsStepInput>('connectionsStep', {
  connections: [],
  reputations: [],
});

export function ConnectionsStep() {
  const navigate = useNavigate();
  const methods = useForm<ConnectionsStepInput>({
    resolver: zodResolver(ConnectionsStepInputSchema),
  });
  const setInput = useSetAtom(connectionsStepInputAtom);
  const onSubmit: SubmitHandler<ConnectionsStepInput> = (data) => {
    setInput(data);
    navigate('/vagabond-create/buy_items');
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, justifyContent: 'center' }}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Stack spacing={2}>
            <Stack spacing={2}>
              <ConnectionsField />
            </Stack>
            <Stack spacing={2}>
              <ReputationsField />
            </Stack>
          </Stack>
          <Stack direction="row" justifyContent="flex-end" mt={2}>
            <Button onClick={() => navigate('/vagabond-create/stats_moves')}>Back</Button>
            <Button type="submit" variant="contained">
              Next
            </Button>
          </Stack>
        </form>
      </FormProvider>
    </Container>
  );
}
