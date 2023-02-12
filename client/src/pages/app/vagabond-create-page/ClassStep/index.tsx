import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Container, Stack } from '@mui/material';
import { useAtom, useSetAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { vagabondCreateResetAtom } from '..';
import { RHFTextField } from '../../../../components/RHF/RHFTextField';
import { useSyncDefaultInput } from '../../hooks/useSyncDetaulInput';
import { ClassSelect } from './ClassSelect';
import { ClassStepQuery } from './__generated__/ClassStepQuery.graphql';

export type ClassStepInput = {
  name: string;
  class: string;
};
const ClassStepInputSchema: z.ZodType<ClassStepInput> = z.object({
  name: z.string().min(1),
  class: z.string(),
});

export const classStepInputAtom = atomWithStorage<ClassStepInput>('classStep', {
  name: '',
  class: '',
});

export function ClassStep() {
  const data = useLazyLoadQuery<ClassStepQuery>(
    graphql`
      query ClassStepQuery {
        ...ClassSelect_query
      }
    `,
    {}
  );

  const [input, setInput] = useAtom(classStepInputAtom);
  const navigate = useNavigate();
  const { control, handleSubmit, setValue, watch, formState } = useForm<ClassStepInput>({
    defaultValues: input,
    resolver: zodResolver(ClassStepInputSchema),
  });
  useSyncDefaultInput(input, (key, value) => setValue(key, value));

  const vagabondClass = watch('class');
  const reset = useSetAtom(vagabondCreateResetAtom);
  useEffect(() => {
    if (formState.isDirty) reset({});
  }, [vagabondClass, formState.isDirty, reset]);

  const onSubmit: SubmitHandler<ClassStepInput> = (data) => {
    setInput(data);
    navigate(`/vagabond-create/background`);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4, justifyContent: 'center' }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <ClassSelect control={control} name="class" label="Class" queryRef={data} />
          <RHFTextField control={control} name="name" label="Name" />
          <Stack direction="row" justifyContent="flex-end">
            <Button type="submit" variant="contained">
              Next
            </Button>
          </Stack>
        </Stack>
      </form>
    </Container>
  );
}
