import { Add } from '@mui/icons-material';
import { Accordion, AccordionDetails, Box, Divider, IconButton, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'
import { useAtomValue } from 'jotai';
import { useEffect } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { ConnectionsStepInput, connectionsStepInputAtom } from '.';
import { RHFTextField } from '../../../../components/RHF/RHFTextField';
import { RHFReputationValueField } from '../../../../components/RHF/RHFReputationValueField';
import { useAccordion } from "./useAccordion";
import { AccordionTitle } from "./AccordionTitle";
import { Container } from "@mui/system";
import { calculateReputation } from "./calculateReputation";

export function ReputationsField() {
  const { control, watch } = useFormContext<ConnectionsStepInput>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'reputations',
  });
  useSyncStoreData();
  const reputations = watch('reputations')

  const [expanded, handleChange] = useAccordion()
  useReputationChangeLength(panel => handleChange(panel)({} as any, true))

  useEffect(() => {
    append({
      faction: 'Denizens',
      score: 0,
      prestige: 0,
      notoriety: 0,
    });
  }, []);

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
      <Grid container spacing={2}>
        {fields.map((field, index) => {
          const reputation = reputations?.[index]
          return (
            <Grid xs={12} md={6}>
              <Accordion
                key={field.id}
                expanded={expanded === index}
                onChange={handleChange(index)}
              >
                <AccordionTitle
                  title={reputation?.faction}
                  subtitle={reputation?.score ? `Score ${reputation.score}` : undefined}
                  expanded={expanded === index}
                  onDelete={() => remove(index)}
                />
                <Divider sx={{ mb: 4 }} />
                <AccordionDetails>
                  <Stack spacing={2}>
                    <ReputationRow index={index} />
                  </Stack>
                </AccordionDetails>
              </Accordion>
            </Grid>
          );
        })}
      </Grid>
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

const useReputationChangeLength = (onChange: (panel: number) => void) => {
  const { watch } = useFormContext<ConnectionsStepInput>();
  const reputations = watch('reputations')
  useEffect(() => {
    onChange(reputations ? reputations.length - 1 : 0)
  }, [reputations?.length])
}

type ReputationRowProps = {
  index: number;
};

function ReputationRow({ index }: ReputationRowProps) {
  const { control } = useFormContext<ConnectionsStepInput>();
  useSyncReputationScore(index);

  return (
    <>
      <RHFTextField control={control} name={`reputations.${index}.faction`} label="Faction" />
      <Stack direction='row'>
        <RHFReputationValueField
          control={control}
          name={`reputations.${index}.notoriety`}
          startingPoint={0}
          maxPoint={0}
          minPoint={-9}
          label="Notoriety"
          upHide
          fullWidth
        />
        <RHFTextField
          control={control}
          name={`reputations.${index}.score`}
          label="Score"
          disabled
          inputProps={{ sx: { textAlign: 'center' } }}
        />
        <RHFReputationValueField
          control={control}
          name={`reputations.${index}.prestige`}
          startingPoint={0}
          maxPoint={15}
          minPoint={0}
          label="Prestige"
          downHide
          fullWidth
        />
      </Stack>
    </>
  );
}

function useSyncReputationScore(index: number) {
  const { watch, setValue } = useFormContext<ConnectionsStepInput>();
  const [score, prestige, notoriety] = watch([
    `reputations.${index}.score`,
    `reputations.${index}.prestige`,
    `reputations.${index}.notoriety`,
  ]);
  
  useEffect(() => {
    const newReputation = calculateReputation({ score, prestige, notoriety })[0]
    console.log(newReputation)
    setValue(`reputations.${index}.score`, newReputation.score)
    setValue(`reputations.${index}.prestige`, newReputation.prestige)
    setValue(`reputations.${index}.notoriety`, newReputation.notoriety)
  }, [score, prestige, notoriety])
}
