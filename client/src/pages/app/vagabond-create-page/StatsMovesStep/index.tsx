import { zodResolver } from '@hookform/resolvers/zod';
import { Button, CircularProgress, Container, Stack, Typography } from '@mui/material'
import { useAtomValue, useSetAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useNavigate } from 'react-router-dom'
import { z } from 'zod';
import { vagabondCreateInputAtom } from '..';
import { ClassMovesField } from './ClassMovesField'
import { RoguishFeatsField } from './RoguishFeatsField'
import { StatsFields } from './StatsFields'
import { WeaponSkillField } from './WeaponSkillField'
import { StatsMovesStepQuery } from './__generated__/StatsMovesStepQuery.graphql';

export type StatsMovesStepInput = {
  charm: number;
  cunning: number;
  finesse: number;
  luck: number;
  might: number;
  value: number;

  roguishFeats: ReadonlyArray<string>;
  classMoves: ReadonlyArray<string>;
  weaponSkill: string;
}

export const statsMovesStepInputAtom = atomWithStorage<StatsMovesStepInput>(
  'statsMovesStep',
  {
    charm: 0,
    cunning: 0,
    finesse: 0,
    luck: 0,
    might: 0,
    value: 0,
    roguishFeats: [],
    classMoves: [],
    weaponSkill: '',
  }
)

const StatsMovesStepInputSchema: z.ZodType<StatsMovesStepInput> = z.object({
  charm: z.number(),
  cunning: z.number(),
  finesse: z.number(),
  luck: z.number(),
  might: z.number(),
  value: z.number(),
  roguishFeats: z.array(z.string()),
  classMoves: z.array(z.string()).length(3),
  weaponSkill: z.string(),
})

export const StatsMovesStep = () => {
  const navigate = useNavigate()
  const inputData = useAtomValue(vagabondCreateInputAtom)
  const data = useLazyLoadQuery<StatsMovesStepQuery>(
    graphql`
      query StatsMovesStepQuery($id: ID!) {
        ...RoguishFeatsField_query
        node(id: $id) {
          ... on VagabondClass {
            ...StatsFields_class
            ...RoguishFeatsField_class
            ...ClassMovesField_class
            ...WeaponSkillField_class
          }
        }
      }
    `,
    { id: inputData.class }
  )
  
  const methods = useForm<StatsMovesStepInput>({
    resolver: zodResolver(StatsMovesStepInputSchema)
  })

  const setInput = useSetAtom(statsMovesStepInputAtom)
  const onSubmit: SubmitHandler<StatsMovesStepInput> = data => {
    setInput(data)
    console.log(data)
    navigate('/vagabond-create/connections')
  }

  if (!inputData.class || !data.node) return <CircularProgress />

  return (
    <Container maxWidth='md' sx={{ mt: 4, justifyContent: 'center' }}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Stack direction="row" spacing={2}>
            <RoguishFeatsField
              queryRef={data}
              vagabondClassRef={data.node}
            />
            <ClassMovesField vagabondClassRef={data.node} />
            <WeaponSkillField vagabondClassRef={data.node} />
            <Stack direction="column" spacing={2} maxWidth={250}>
              <StatsFields vagabondClassRef={data.node} />
            </Stack>
          </Stack>
          <Stack direction='row' justifyContent='flex-end' mt={2}>
            <Button onClick={() => navigate('/vagabond-create/background')}>
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