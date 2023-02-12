import { Add, Cancel } from '@mui/icons-material'
import { Box, IconButton, Stack, Typography } from '@mui/material'
import { useAtomValue } from 'jotai'
import { useEffect } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { ConnectionsStepInput, connectionsStepInputAtom } from '.'
import { RHFTextField } from '../../../../components/RHF/RHFTextField'

export const ConnectionsField = () => {
  const { control } = useFormContext<ConnectionsStepInput>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'connections',
  });

  useSyncStoreData()

  useEffect(() => {
    append({ type: '', to: '', notes: '' });

    return () => {
      remove(0);
    };
  }, [append, remove]);

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
      {fields.map((field, index) => (
        <Stack key={field.id} direction="row" spacing={2}>
          <IconButton onClick={() => remove(index)}>
            <Cancel />
          </IconButton>
          <RHFTextField control={control} name={`connections.${index}.type`} label="Connection Type" />
          <RHFTextField control={control} name={`connections.${index}.to`} label="Connection To" />
          <RHFTextField control={control} name={`connections.${index}.notes`} label="Connection Notes" />
        </Stack>
      ))}
    </>
  );
}

const useSyncStoreData = () => {
  const { setValue } = useFormContext<ConnectionsStepInput>();
  const { connections } = useAtomValue(connectionsStepInputAtom)
  useEffect(() => {
    setValue('connections', connections)
  }, [connections])
}
