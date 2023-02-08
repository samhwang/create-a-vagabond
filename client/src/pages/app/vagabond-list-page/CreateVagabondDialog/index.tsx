import { Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, Stack } from '@mui/material';
import { useSnackbar } from 'notistack';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { graphql, useFragment, useMutation } from 'react-relay';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Suspense, useEffect } from 'react';
import { RHFTextField } from '../../../../components/RHF/RHFTextField';
import {
  CreateVagabondDialogMutation,
  VagabondCreateInput,
} from './__generated__/CreateVagabondDialogMutation.graphql';
import { VagabondClassSelect } from './VagabondClassSelect';
import { CreateVagabondDialog_query$key } from './__generated__/CreateVagabondDialog_query.graphql';
import { ClassSpecificFields } from './ClassSpecificFields';
import { BackgroundFields } from './BackgroundFields';
import { ConnectionsField } from './ConnectionsField';

const CreateVagabondInputSchema = z.object({
  name: z.string(),
  class: z.string(),

  species: z.string(),
  details: z.string(),
  demeanor: z.string(),

  background_home: z.string(),
  background_vagabond: z.string(),
  background_leftBehind: z.string(),

  nature: z.string(),
  drives: z.array(z.string()).length(2),
  classMoves: z.array(z.string()).length(3),
  roguishFeats: z.array(z.string()),
  weaponSkill: z.string(),

  value: z.number(),
  charm: z.number().max(2),
  cunning: z.number().max(2),
  finesse: z.number().max(2),
  luck: z.number().max(2),
  might: z.number().max(2),

  connections: z.array(
    z.object({
      type: z.string(),
      to: z.string(),
      notes: z.string(),
    })
  ),
});

type CreateVagabondDialogProps = {
  open: boolean;
  onClose: () => void;
  connectionIds: string[];

  queryRef: CreateVagabondDialog_query$key;
};

export function CreateVagabondDialog({ connectionIds, open, onClose, queryRef }: CreateVagabondDialogProps) {
  const query = useFragment(
    graphql`
      fragment CreateVagabondDialog_query on Query {
        ...VagabondClassSelect_query
        ...ClassSpecificFields_query
      }
    `,
    queryRef
  );

  const { enqueueSnackbar } = useSnackbar();
  const [createVagabond, isOnFly] = useMutation<CreateVagabondDialogMutation>(graphql`
    mutation CreateVagabondDialogMutation($connections: [ID!]!, $input: VagabondCreateInput!) {
      vagabondCreate(input: $input) {
        __typename
        ... on Error {
          message
        }
        ... on MutationVagabondCreateSuccess {
          data {
            vagabond @appendNode(connections: $connections, edgeTypeName: "UserVagabondConnectionEdge") {
              name
              ...VagabondListItem_vagabond
            }
          }
        }
      }
    }
  `);

  const methods = useForm<VagabondCreateInput>({
    resolver: zodResolver(CreateVagabondInputSchema),
    defaultValues: {
      drives: [],
      classMoves: [],
      roguishFeats: [],
    },
  });

  useEffect(() => {
    methods.reset({
      drives: [],
      classMoves: [],
      roguishFeats: [],
    });
  }, [open, methods]);

  const onSubmit: SubmitHandler<VagabondCreateInput> = (data) => {
    createVagabond({
      variables: {
        connections: connectionIds,
        input: data,
      },
      onCompleted(response, errors) {
        if (errors) {
          errors.forEach((error) => enqueueSnackbar(error.message, { variant: 'error' }));
          return;
        }

        if (response.vagabondCreate.__typename === 'Error') {
          enqueueSnackbar(response.vagabondCreate.message, { variant: 'error' });
          return;
        }

        if (response.vagabondCreate.__typename === 'MutationVagabondCreateSuccess') {
          enqueueSnackbar(`${response.vagabondCreate.data.vagabond.name} is created`, { variant: 'success' });
          methods.reset({});
          onClose();
        }
      },
    });
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: { minWidth: 700 },
      }}
    >
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <DialogTitle>Create new Vagabond</DialogTitle>
          <DialogContent>
            <Stack direction="column" spacing={2} sx={{ mt: 1 }}>
              <Stack direction="row" spacing={2}>
                <RHFTextField control={methods.control} name="name" label="Name" disabled={isOnFly} fullWidth />
                <VagabondClassSelect
                  control={methods.control}
                  name="class"
                  label="Class"
                  disabled={isOnFly}
                  queryRef={query}
                  fullWidth
                />
                <RHFTextField
                  control={methods.control}
                  name="species"
                  label="Species"
                  placeholder="fox, mouse, rabbit, bird, badger,"
                  InputLabelProps={{ shrink: true }}
                  disabled={isOnFly}
                  fullWidth
                />
              </Stack>
              <BackgroundFields />
              <Suspense fallback={<Loader />}>
                <ClassSpecificFields queryRef={query} />
              </Suspense>
              <ConnectionsField />
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose} disabled={isOnFly}>
              Close
            </Button>
            <Button variant="contained" type="submit" disabled={isOnFly}>
              Create
            </Button>
          </DialogActions>
        </form>
      </FormProvider>
    </Dialog>
  );
}

function Loader() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <CircularProgress />
    </div>
  );
}
