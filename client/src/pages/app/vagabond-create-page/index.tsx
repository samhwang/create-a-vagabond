import { CircularProgress, Container, Step, StepLabel, Stepper } from '@mui/material';
import { atom } from 'jotai';
import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { ClassStepInput, classStepInputAtom } from './ClassStep';
import { BackgroundStepInput, backgroundStepInputAtom } from './BackgroundStep';
import { StatsMovesStepInput, statsMovesStepInputAtom } from './StatsMovesStep';
import { ConnectionsStepInput, connectionsStepInputAtom } from './ConnectionsStep';
import { VagabondCreateInput } from './ReviewAndCreateStep/__generated__/ReviewAndCreateStepMutation.graphql';

export function VagabondCreatePage() {
  const location = useLocation();
  const [activeStep, setActiveStep] = useState(0);
  useEffect(() => {
    const index = [
      '/vagabond-create',
      '/vagabond-create/background',
      '/vagabond-create/stats_moves',
      '/vagabond-create/connections',
      '/vagabond-create/review_create',
    ].indexOf(location.pathname);
    setActiveStep(index);
  }, [location.pathname]);

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
        <Step>
          <StepLabel>Reviews and Create</StepLabel>
        </Step>
      </Stepper>
      <Suspense fallback={<CircularProgress />}>
        <Outlet />
      </Suspense>
    </Container>
  );
}

export function assertEqualType<T extends never>() {}
export type TypeEqualityGuard<A, B> = Exclude<A, B> | Exclude<B, A>;
assertEqualType<
  TypeEqualityGuard<
    VagabondCreateInput,
    ClassStepInput & BackgroundStepInput & StatsMovesStepInput & ConnectionsStepInput
  >
>();

export const vagabondCreateInputAtom = atom((get) => {
  const classStepData = get(classStepInputAtom);
  const backgroundStepData = get(backgroundStepInputAtom);
  const statsMovesStepData = get(statsMovesStepInputAtom);
  const connectionsStepData = get(connectionsStepInputAtom);

  return {
    ...classStepData,
    ...backgroundStepData,
    ...statsMovesStepData,
    ...connectionsStepData,
  };
});

export const vagabondCreateResetAtom = atom(null, (get, set, update) => {
  const classData = get(classStepInputAtom);
  set(classStepInputAtom, { name: '', class: classData.class });
  set(backgroundStepInputAtom, {
    species: '',
    details: '',
    demeanor: '',
    background_home: '',
    background_leftBehind: '',
    background_vagabond: '',
    nature: '',
    drives: [],
  });
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
  });
  set(connectionsStepInputAtom, {
    connections: [],
  });
});
