import { Add } from '@mui/icons-material';
import { Accordion, Box, Divider, IconButton, Typography } from '@mui/material';
import { useAtomValue } from 'jotai';
import { useEffect, useState } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { ConnectionsStepInput, connectionsStepInputAtom } from '.';
import { RHFTextField } from '../../../../components/RHF/RHFTextField';
import { AccordionDetailsLayout } from './AccordionDetailsLayout';
import { AccordionTitle } from './AccordionTitle';
import { ConnectionTypeCheckboxField } from './ConnectionTypeCheckbox';
import { useAccordion } from './useAccordion';

export function ConnectionsField() {
  const { control, watch } = useFormContext<ConnectionsStepInput>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'connections',
  });
  useSyncStoreData();
  const connections = watch('connections');

  const [expanded, handleChange] = useAccordion();
  useConnectionChangeLength((panel) => handleChange(panel)({} as any, true));

  useEffect(() => {
    append({ type: '', to: '', notes: '' });
  }, []);

  return (
    <>
      <Box display="flex">
        <Typography variant="h6" flexGrow={1}>
          Connections
        </Typography>
        <IconButton onClick={() => append({ type: '', to: '', notes: '' })}>
          <Add />
        </IconButton>
      </Box>
      {fields.map((field, index) => {
        const connection = connections?.[index];
        return (
          <Accordion key={field.id} expanded={expanded === index} onChange={handleChange(index)}>
            <AccordionTitle
              title={connection?.to}
              subtitle={connection?.type}
              expanded={expanded === index}
              onDelete={() => remove(index)}
            />
            <Divider sx={{ mb: 4 }} />
            <AccordionDetailsLayout
              left={
                <>
                  <RHFTextField control={control} name={`connections.${index}.to`} label="Connection To" />
                  <RHFTextField
                    control={control}
                    name={`connections.${index}.notes`}
                    label="Connection Notes"
                    multiline
                    rows={4}
                  />
                </>
              }
              right={
                <ConnectionTypeCheckboxField
                  control={control}
                  name={`connections.${index}.type`}
                  label="Connection Type"
                />
              }
            />
          </Accordion>
        );
      })}
    </>
  );
}

function useSyncStoreData() {
  const { setValue } = useFormContext<ConnectionsStepInput>();
  const { connections } = useAtomValue(connectionsStepInputAtom);
  useEffect(() => {
    setValue('connections', connections);
  }, [connections]);
}

function useConnectionChangeLength(onChange: (panel: number) => void) {
  const { watch } = useFormContext<ConnectionsStepInput>();
  const connections = watch('connections');
  useEffect(() => {
    onChange(connections ? connections.length - 1 : 0);
  }, [connections?.length]);
}
