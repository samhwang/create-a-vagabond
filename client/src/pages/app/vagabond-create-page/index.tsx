import {
  CircularProgress,
  Container,
  MobileStepper,
  Paper,
  Step,
  StepLabel,
  Stepper,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { atom } from 'jotai';
import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { ClassStepInput, classStepInputAtom } from './ClassStep';
import { BackgroundStepInput, backgroundStepInputAtom } from './BackgroundStep';
import { StatsMovesStepInput, statsMovesStepInputAtom } from './StatsMovesStep';
import { ConnectionsStepInput, connectionsStepInputAtom } from './ConnectionsStep';
import { VagabondCreateInput } from './ReviewAndCreateStep/__generated__/ReviewAndCreateStepMutation.graphql';

const stepPaths = [
  '/vagabond-create',
  '/vagabond-create/background',
  '/vagabond-create/stats_moves',
  '/vagabond-create/connections',
  '/vagabond-create/review_create',
];
const stepLabels = [
  'Choose a class',
  'Background',
  'Stats and Moves',
  'Connections and Reputations',
  'Reviews and Create',
];

export function VagabondCreatePage() {
  const matches = useMediaQuery('(min-width:600px)');
  const location = useLocation();
  const [activeStep, setActiveStep] = useState(0);
  useEffect(() => {
    const index = stepPaths.indexOf(location.pathname);
    setActiveStep(index);
  }, [location.pathname]);

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      {matches ? (
        <Stepper activeStep={activeStep}>
          {stepLabels.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      ) : (
        <Typography>{stepLabels[activeStep]}</Typography>
      )}
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
