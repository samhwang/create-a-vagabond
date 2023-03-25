import { CircularProgress, Container, Step, StepLabel, Stepper, Typography, useMediaQuery } from '@mui/material';
import { atom } from 'jotai';
import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { classStepInputAtom } from './ClassStep';
import { backgroundStepInputAtom } from './BackgroundStep';
import { statsMovesStepInputAtom } from './StatsMovesStep';
import { connectionsStepInputAtom } from './ConnectionsStep';
import { buyItemStepInputAtom } from './BuyItemStep';

const stepPaths = [
  '/vagabond-create',
  '/vagabond-create/background',
  '/vagabond-create/stats_moves',
  '/vagabond-create/connections',
  '/vagabond-create/buy_items',
  '/vagabond-create/review_create',
];
const stepLabels = [
  'Choose a class',
  'Background',
  'Stats and Moves',
  'Connections and Reputations',
  'Buy Items',
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

export const vagabondCreateInputAtom = atom((get) => {
  const classStepData = get(classStepInputAtom);
  const backgroundStepData = get(backgroundStepInputAtom);
  const statsMovesStepData = get(statsMovesStepInputAtom);
  const connectionsStepData = get(connectionsStepInputAtom);
  const buyItemStepData = {
    ...get(buyItemStepInputAtom),
    equipments: get(buyItemStepInputAtom).equipments.map(({ equipmentId, name, wear }) => ({
      equipmentId,
      name,
      wear,
    }))
  };

  return {
    ...classStepData,
    ...backgroundStepData,
    ...statsMovesStepData,
    ...buyItemStepData,
    ...connectionsStepData,
  };
});

export const vagabondCreateResetAtom = atom(null, (get, set) => {
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
    availablePoints: 1,
    charm: 0,
    cunning: 0,
    finesse: 0,
    luck: 0,
    might: 0,
    roguishFeats: [],
    classMoves: [],
    weaponSkill: '',
  });
  set(buyItemStepInputAtom, {
    value: 0,
    carrying: 0,
    equipments: [],
  })
  set(connectionsStepInputAtom, {
    connections: [],
  });
});
