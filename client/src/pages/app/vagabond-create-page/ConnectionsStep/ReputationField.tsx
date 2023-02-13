import { Add, Cancel } from '@mui/icons-material';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import { useAtomValue } from 'jotai';
import { useEffect } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { ConnectionsStepInput, connectionsStepInputAtom } from '.';
import { RHFTextField } from '../../../../components/RHF/RHFTextField';

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
      {fields.map((field, index) => (
        <Stack key={field.id} direction="row" spacing={2}>
          <RHFTextField control={control} name={`reputations.${index}.faction`} label="Faction" />
          <RHFTextField control={control} name={`reputations.${index}.score`} label="Score" />
          <RHFTextField control={control} name={`reputations.${index}.prestige`} label="Prestige" />
          <RHFTextField control={control} name={`reputations.${index}.notoriety`} label="Notoriety" />
          {index > 0 && (
            <IconButton onClick={() => remove(index)}>
              <Cancel />
            </IconButton>
          )}
        </Stack>
      ))}
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
