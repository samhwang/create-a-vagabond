import { Add, Cancel, ExpandLess, ExpandMore } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, AccordionSummaryProps, Box, Divider, Grid, IconButton, Stack, Typography } from '@mui/material';
import { useAtomValue } from 'jotai';
import { useEffect, useState } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { ConnectionsStepInput, connectionsStepInputAtom } from '.';
import { RHFTextField } from '../../../../components/RHF/RHFTextField';
import { ConnectionTypeCheckboxField } from "./ConnectionTypeCheckbox";

export function ConnectionsField() {
  const { control, watch } = useFormContext<ConnectionsStepInput>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'connections',
  });
  useSyncStoreData();

  const [expanded, setExpanded] = useState<number | false>(false)
  const handleChange = (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }

  const connections = watch('connections')
  useEffect(() => {
    const panel = connections ? connections.length - 1 : 0
    handleChange(panel)({} as any, true)
  }, [connections?.length])

  useEffect(() => {
    append({ type: '', to: '', notes: '' })
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
        const connection = connections?.[index]
        return (
          <Accordion
            key={field.id}
            expanded={expanded === index}
            onChange={handleChange(index)}
          >
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
                  <RHFTextField
                    control={control}
                    name={`connections.${index}.to`}
                    label="Connection To"
                  />
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
        )
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

type AccordionTitleProps = {
  title?: string
  subtitle?: string
  onDelete: () => void
  expanded: boolean
  AccordionSummaryProps?: AccordionSummaryProps
}
const AccordionTitle = ({ title, subtitle, expanded, onDelete, AccordionSummaryProps }: AccordionTitleProps) => {
  return (
    <AccordionSummary
      expandIcon={expanded ? <ExpandLess /> : <ExpandMore />}
      {...AccordionSummaryProps}
    >
      <Stack direction="row" flexGrow={1} alignItems='center'>
        {(!title || !subtitle) && (
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Fill the value to continues
          </Typography>
        )}
        {title && (
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            {title}
          </Typography>
        )}
        {subtitle && (
          <Typography sx={{ color: 'text.secondary' }}>
            {subtitle}
          </Typography>
        )}
      </Stack>
      <IconButton onClick={onDelete} sx={{ mr: 2}}>
        <Cancel />
      </IconButton>
    </AccordionSummary>
  )
}

type AccordionDetailsLayoutProps = {
  left: React.ReactNode
  right: React.ReactNode
}
const AccordionDetailsLayout = ({ left, right }: AccordionDetailsLayoutProps) => (
  <AccordionDetails>
    <Grid container spacing={2}>
      <Grid item xs={12} md={5}>
        <Stack spacing={2}>
          {left}
        </Stack>
      </Grid>

      <Grid item xs={12} md={7}>
        {right}
      </Grid>
    </Grid>
  </AccordionDetails>
)
