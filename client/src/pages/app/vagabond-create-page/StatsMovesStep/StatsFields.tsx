import { Stack, TextField, Typography } from '@mui/material';
import { useAtomValue } from 'jotai';
import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { graphql, useFragment } from 'react-relay';
import { StatsMovesStepInput, statsMovesStepInputAtom } from '.';
import { RHFStatField } from '../../../../components/RHF/RHFStatField';
import { RHFTextField } from '../../../../components/RHF/RHFTextField';
import { useStartingPointLeft } from './useStartingPointLeft';
import { StatsFields_class$key } from './__generated__/StatsFields_class.graphql';
import { StatsFields_useSyncStats_class$key } from './__generated__/StatsFields_useSyncStats_class.graphql';

type StatsFieldsProps = {
  vagabondClassRef: StatsFields_class$key;
};

export function StatsFields({ vagabondClassRef }: StatsFieldsProps) {
  const vagabondClass = useFragment(
    graphql`
      fragment StatsFields_class on VagabondClass {
        startingCharm
        startingCunning
        startingFinesse
        startingLuck
        startingMight
        ...useStartingPointLeft_class
        ...StatsFields_useSyncStats_class
      }
    `,
    vagabondClassRef
  );
  const { control } = useFormContext<StatsMovesStepInput>();

  const pointLeft = useStartingPointLeft(vagabondClass);
  useSyncStats(vagabondClass);

  return (
    <>
      <Typography>Stats</Typography>
      <RHFStatField
        control={control}
        name="charm"
        label="Charm"
        startingPoint={vagabondClass.startingCharm}
        hasPointLeft={Boolean(pointLeft)}
      />
      <RHFStatField
        control={control}
        name="cunning"
        label="Cunning"
        startingPoint={vagabondClass.startingCunning}
        hasPointLeft={Boolean(pointLeft)}
      />
      <RHFStatField
        control={control}
        name="finesse"
        label="Finesse"
        startingPoint={vagabondClass.startingFinesse}
        hasPointLeft={Boolean(pointLeft)}
      />
      <RHFStatField
        control={control}
        name="luck"
        label="Luck"
        startingPoint={vagabondClass.startingLuck}
        hasPointLeft={Boolean(pointLeft)}
      />
      <RHFStatField
        control={control}
        name="might"
        label="Might"
        startingPoint={vagabondClass.startingMight}
        hasPointLeft={Boolean(pointLeft)}
      />
      <Stack direction="row" spacing={2}>
        <RHFTextField
          control={control}
          name="value"
          label="Value"
          disabled
          inputProps={{ sx: { textAlign: 'center' } }}
        />
        <BurdenedInfoField />
        <MaxInfoField />
      </Stack>
    </>
  );
}

function useSyncStats(vagabondClassRef: StatsFields_useSyncStats_class$key) {
  const { setValue } = useFormContext<StatsMovesStepInput>();

  const { startingCharm, startingCunning, startingFinesse, startingLuck, startingMight, startingValue } = useFragment(
    graphql`
      fragment StatsFields_useSyncStats_class on VagabondClass {
        startingCharm
        startingCunning
        startingFinesse
        startingLuck
        startingMight
        startingValue
      }
    `,
    vagabondClassRef
  );

  const { charm, cunning, finesse, luck, might, value } = useAtomValue(statsMovesStepInputAtom);

  useEffect(() => {
    setValue('charm', charm || startingCharm || 0);
  }, [charm, startingCharm, setValue]);

  useEffect(() => {
    setValue('cunning', cunning || startingCunning || 0);
  }, [cunning, startingCunning, setValue]);

  useEffect(() => {
    setValue('finesse', finesse || startingFinesse || 0);
  }, [finesse, startingFinesse, setValue]);

  useEffect(() => {
    setValue('luck', luck || startingLuck || 0);
  }, [luck, startingLuck, setValue]);

  useEffect(() => {
    setValue('might', might || startingMight || 0);
  }, [might, startingMight, setValue]);

  useEffect(() => {
    setValue('value', value || startingValue || 0);
  }, [value, startingValue, setValue]);
}

function BurdenedInfoField() {
  const { watch } = useFormContext<{ might: number }>();
  const might = watch('might');
  const burdened = might + 4;

  return <TextField label="Burdened" disabled value={burdened} inputProps={{ sx: { textAlign: 'center' } }} />;
}

function MaxInfoField() {
  const { watch } = useFormContext<{ might: number }>();
  const might = watch('might');
  const max = (might + 4) * 2;

  return <TextField label="Max" disabled value={max} inputProps={{ sx: { textAlign: 'center' } }} />;
}
