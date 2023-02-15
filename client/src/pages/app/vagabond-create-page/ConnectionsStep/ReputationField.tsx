import { Add, Cancel } from '@mui/icons-material';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import { useAtomValue } from 'jotai';
import { useEffect } from 'react';
import { useFieldArray, useFormContext, Control, useFormState } from 'react-hook-form';
import { ConnectionsStepInput, connectionsStepInputAtom } from '.';
import { RHFTextField } from '../../../../components/RHF/RHFTextField';
import { RHFReputationValueField } from '../../../../components/RHF/RHFReputationValueField';
import { VagabondCreateReputationCreateInput } from '../ReviewAndCreateStep/__generated__/ReviewAndCreateStepMutation.graphql';

export function ReputationsField() {
  const { control } = useFormContext<ConnectionsStepInput>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'reputations',
  });

  useSyncStoreData();

  useEffect(() => {
    append({
      faction: 'Denizens',
      score: 0,
      prestige: 0,
      notoriety: 0,
    });

    return () => {
      remove(0);
    };
  }, [append, remove]);

  return (
    <>
      <Box display="flex">
        <Typography variant="h6" flexGrow={1}>
          Reputations
        </Typography>
        <IconButton onClick={() => append({ faction: '', score: 0, prestige: 0, notoriety: 0 })}>
          <Add />
        </IconButton>
      </Box>
      {fields.map((field, index) => {
        return <ReputationRow key={field.id} index={index} onClick={() => remove(index)} />;
      })}
    </>
  );
}

function useSyncStoreData() {
  const { setValue } = useFormContext<ConnectionsStepInput>();
  const { reputations } = useAtomValue(connectionsStepInputAtom);
  useEffect(() => {
    setValue('reputations', reputations);
  }, [reputations]);
}

type ReputationRowProps = {
  index: number;
  onClick: () => void;
};

function ReputationRow({ index, onClick }: ReputationRowProps) {
  const { control } = useFormContext<ConnectionsStepInput>();
  useSyncReputationScore(index);

  return (
    <Stack direction="row" spacing={2}>
      <RHFTextField control={control} name={`reputations.${index}.faction`} label="Faction" />
      <RHFReputationValueField
        control={control}
        name={`reputations.${index}.score`}
        startingPoint={0}
        maxPoint={3}
        minPoint={-3}
        label="Score"
      />
      <RHFReputationValueField
        control={control}
        name={`reputations.${index}.prestige`}
        startingPoint={0}
        maxPoint={15}
        minPoint={0}
        label="Prestige"
      />
      <RHFReputationValueField
        control={control}
        name={`reputations.${index}.notoriety`}
        startingPoint={0}
        maxPoint={0}
        minPoint={-9}
        label="Notoriety"
      />
      {index > 0 && (
        <IconButton onClick={onClick}>
          <Cancel />
        </IconButton>
      )}
    </Stack>
  );
}

function useSyncReputationScore(index: number) {
  const { watch, setValue, resetField } = useFormContext<ConnectionsStepInput>();
  const [score, prestige, notoriety] = watch([
    `reputations.${index}.score`,
    `reputations.${index}.prestige`,
    `reputations.${index}.notoriety`,
  ]);
  console.log([score, prestige, notoriety]);
  useEffect(() => {
    switch (prestige) {
      case 5:
        if (score < 1) {
          setValue(`reputations.${index}.score`, score + 1);
          resetField(`reputations.${index}.prestige`);
        }
        break;
      case 10:
        if (score < 2) {
          setValue(`reputations.${index}.score`, score + 1);
          resetField(`reputations.${index}.prestige`);
        }
        break;
      case 15:
        if (score < 3) {
          setValue(`reputations.${index}.score`, score + 1);
          resetField(`reputations.${index}.prestige`);
        }
        break;
    }
  }, [score, prestige]);

  useEffect(() => {
    switch (notoriety) {
      case -3:
        if (score > -1) {
          setValue(`reputations.${index}.score`, score - 1);
          resetField(`reputations.${index}.notoriety`);
        }
        break;
      case -6:
        if (score > -2) {
          setValue(`reputations.${index}.score`, score - 1);
          resetField(`reputations.${index}.notoriety`);
        }
        break;
      case -9:
        if (score > -3) {
          setValue(`reputations.${index}.score`, score - 1);
          resetField(`reputations.${index}.notoriety`);
        }
        break;
    }
  }, [score, notoriety]);
}
