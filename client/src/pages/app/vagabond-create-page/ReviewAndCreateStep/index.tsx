import { Box, Button, Container, Paper, Stack, Typography } from '@mui/material';
import { useAtomValue, useSetAtom } from 'jotai';
import { useSnackbar } from 'notistack';
import { graphql, useLazyLoadQuery, useMutation } from 'react-relay';
import { useNavigate } from 'react-router-dom';
import { vagabondCreateInputAtom, vagabondCreateResetAtom } from '..';
import { ReviewAndCreateStepMutation } from './__generated__/ReviewAndCreateStepMutation.graphql';
import { ReviewAndCreateStepQuery } from './__generated__/ReviewAndCreateStepQuery.graphql';

export function ReviewAndCreateStep() {
  const data = useLazyLoadQuery<ReviewAndCreateStepQuery>(
    graphql`
      query ReviewAndCreateStepQuery {
        me {
          id
        }
      }
    `,
    {}
  );

  const [createVagabond] = useMutation<ReviewAndCreateStepMutation>(graphql`
    mutation ReviewAndCreateStepMutation($connections: [ID!]!, $input: VagabondCreateInput!) {
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

  const { availablePoints, ...input } = useAtomValue(vagabondCreateInputAtom);
  const reset = useSetAtom(vagabondCreateResetAtom);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const onCreate = () => {
    createVagabond({
      variables: {
        input,
        connections: [`client:${data.me.id}:__VagabondList_user_vagabondConnection_connection`],
      },
      onCompleted: (response, errors) => {
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
          reset({});
          navigate('/vagabond-list');
        }
      },
    });
  };

  const displayInput = {
    ...input,
    class: window.atob(input.class),
    nature: window.atob(input.nature),
    drives: input.drives.map(window.atob),
    roguishFeats: input.roguishFeats.map(window.atob),
    classMoves: input.classMoves.map(window.atob),
    weaponSkill: window.atob(input.weaponSkill),
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, justifyContent: 'center' }}>
      <Stack direction="row" alignItems="center">
        <Typography flexGrow={1}>
          Here are your current summary. Please review or click <b>Submit</b> to create your vagabond
        </Typography>
        <Button onClick={() => navigate('/vagabond-create/connections')}>Back</Button>
        <Button variant="contained" onClick={onCreate}>
          Submit
        </Button>
      </Stack>
      <Paper sx={{ paddingY: 0.01, paddingX: 2, my: 2 }}>
        <pre style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(displayInput, null, 2)}</pre>
      </Paper>
    </Container>
  );
}
