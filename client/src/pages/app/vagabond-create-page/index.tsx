import { CircularProgress, Container, Step, StepLabel, Stepper } from '@mui/material';
import { atom, useAtomValue } from 'jotai';
import { Suspense, useEffect, useState } from 'react';
import { graphql, useMutation } from 'react-relay'
import { Outlet, useLocation } from 'react-router-dom';
import { ClassStepInput, classStepInputAtom } from './ClassStep';
import { BackgroundStepInput, backgroundStepInputAtom } from './BackgroundStep';
import { VagabondCreateInput } from './__generated__/vagabondCreatePageMutation.graphql';
import { StatsMovesStepInput, statsMovesStepInputAtom } from './StatsMovesStep'
import { ConnectionsStepInput } from './ConnectionsStep'

export function assertEqualType<T extends never>() {}
export type TypeEqualityGuard<A,B> = Exclude<A,B> | Exclude<B,A>;
assertEqualType<TypeEqualityGuard<
  VagabondCreateInput,
  ClassStepInput
    & BackgroundStepInput
    & StatsMovesStepInput
    & ConnectionsStepInput
>>()

export const vagabondCreateInputAtom = atom(
  get => {
    const classStepData = get(classStepInputAtom)
    const backgroundStepData = get(backgroundStepInputAtom)
    const statsMovesStepData = get(statsMovesStepInputAtom)

    return {
      ...classStepData,
      ...backgroundStepData,
      ...statsMovesStepData,
    }
  }
)

export const vagabondCreateResetAtom = atom(
  null,
  (get, set, update) => {
    const classData = get(classStepInputAtom)
    set(classStepInputAtom, { name: '', class: classData.class })
    set(backgroundStepInputAtom, {
      species: '',
      details: '',
      demeanor: '',
      background_home: '',
      background_leftBehind: '',
      background_vagabond: '',
      nature: '',
      drives: [],
    })
    set(statsMovesStepInputAtom, {
      charm: 0,
      cunning: 0,
      finesse: 0,
      luck: 0,
      might: 0,
      value: 0,
      roguishFeats: [],
      classMoves: [],
      weaponSkill: '',
    })
  }
)

export const VagabondCreatePage = () => {
  const location = useLocation()
  const [activeStep, setActiveStep] = useState(0)
  useEffect(() => {
    const index = [
      '/vagabond-create',
      '/vagabond-create/background',
      '/vagabond-create/stats_moves',
      '/vagabond-create/connections',
    ].indexOf(location.pathname)
    setActiveStep(index)
  }, [location.pathname])

  const input = useAtomValue(vagabondCreateInputAtom)
  // console.log(input)
  const [createVagabond] = useMutation(graphql`
    mutation vagabondCreatePageMutation($connections: [ID!]!, $input: VagabondCreateInput!) {
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

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Stepper activeStep={activeStep}>
        <Step>
          <StepLabel>Choose a class</StepLabel>
        </Step>
        <Step>
          <StepLabel>Background</StepLabel>
        </Step>
        <Step>
          <StepLabel>Stats and Moves</StepLabel>
        </Step>
        <Step>
          <StepLabel>Connections and Reputations</StepLabel>
        </Step>
      </Stepper>
      <Suspense fallback={<CircularProgress />}>
        <Outlet />
      </Suspense>
    </Container>
  );
}
