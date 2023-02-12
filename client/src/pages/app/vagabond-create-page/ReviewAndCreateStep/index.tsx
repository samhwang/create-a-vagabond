import { Button, Container, Stack, Typography } from '@mui/material'
import { useAtomValue, useSetAtom } from 'jotai'
import { useSnackbar } from 'notistack'
import { graphql, useLazyLoadQuery, useMutation } from 'react-relay'
import { useNavigate } from 'react-router-dom'
import { vagabondCreateInputAtom, vagabondCreateResetAtom } from '..'
import { ReviewAndCreateStepMutation } from './__generated__/ReviewAndCreateStepMutation.graphql'
import { ReviewAndCreateStepQuery } from './__generated__/ReviewAndCreateStepQuery.graphql'

export const ReviewAndCreateStep = () => {
  const data = useLazyLoadQuery<ReviewAndCreateStepQuery>(
    graphql`
      query ReviewAndCreateStepQuery {
        me {
          id
        }
      }
    `,
    {}
  )
  
  const [createVagabond] = useMutation<ReviewAndCreateStepMutation>(graphql`
    mutation ReviewAndCreateStepMutation($connections: [ID!]!, $input: VagabondCreateInput!) {
      vagabondCreate(input: $input) {
        __typename
        ... on Error {
          message
        }
        ... on MutationVagabondCreateSuccess {
          data {
            vagabond @appendNode(
              connections: $connections
              edgeTypeName: "UserVagabondConnectionEdge"
            ) {
              name
              ...VagabondListItem_vagabond
            }
          }
        }
      }
    }
  `)

  const input = useAtomValue(vagabondCreateInputAtom)
  const reset = useSetAtom(vagabondCreateResetAtom)
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()
  const onCreate = () => {
    createVagabond({
      variables: {
        input,
        connections: [
          `client:${data.me.id}:__VagabondList_user_vagabondConnection_connection`
        ],
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
    })
  }

  return (
    <Container maxWidth='md' sx={{ mt: 4, justifyContent: 'center' }}>
      <Typography>
        {JSON.stringify(input)}
      </Typography>
      <Stack direction='row' justifyContent='flex-end' mt={2}>
        <Button onClick={() => navigate('/vagabond-create/connections')}>
          Back
        </Button>
        <Button variant='contained' onClick={onCreate}>
          Create
        </Button>
      </Stack>
    </Container>
  )
}
