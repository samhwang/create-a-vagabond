import { zodResolver } from '@hookform/resolvers/zod';
import { Button, CircularProgress, Container, Stack } from '@mui/material';
import { useAtom, useAtomValue } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { graphql, useLazyLoadQuery } from 'react-relay';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { vagabondCreateInputAtom } from '..';
import { RHFTextField, RHFTextFieldProps } from '../../../../components/RHF/RHFTextField';
import { useSyncDefaultInput } from '../../hooks/useSyncDetaulInput';
import { DrivesSelect } from './DrivesSelect';
import { NatureSelect } from './NatureSelect';
import { SpeciesSelect } from './SpeciesSelect';
import { BackgroundStepQuery } from './__generated__/BackgroundStepQuery.graphql';

const BackgroundStepInputSchema = z.object({
  species: z.string().min(1),
  details: z.string().min(1),
  demeanor: z.string().min(1),
  background_home: z.string().min(1),
  background_vagabond: z.string().min(1),
  background_leftBehind: z.string().min(1),
  nature: z.string(),
  drives: z.array(z.string()).length(2),
});

export type BackgroundStepInput = z.infer<typeof BackgroundStepInputSchema>;

export const backgroundStepInputAtom = atomWithStorage<BackgroundStepInput>('backgroundStep', {
  species: '',
  details: '',
  demeanor: '',
  background_home: '',
  background_leftBehind: '',
  background_vagabond: '',
  nature: '',
  drives: [],
});

export function BackgroundStep() {
  const inputData = useAtomValue(vagabondCreateInputAtom);
  const data = useLazyLoadQuery<BackgroundStepQuery>(
    graphql`
      query BackgroundStepQuery($id: ID!) {
        node(id: $id) {
          ... on VagabondClass {
            ...NatureSelect_class
            ...DrivesSelect_class
          }
        }
      }
    `,
    { id: inputData.class }
  );

  const navigate = useNavigate();
  const [input, setInput] = useAtom(backgroundStepInputAtom);
  const { control, handleSubmit, setValue } = useForm<BackgroundStepInput>({
    defaultValues: input,
    resolver: zodResolver(BackgroundStepInputSchema),
  });
  useSyncDefaultInput(input, (key, value) => setValue(key, value));

  const onSubmit: SubmitHandler<BackgroundStepInput> = (data) => {
    setInput(data);
    navigate('/vagabond-create/stats_moves');
  };

  if (!inputData.class || !data.node) return <CircularProgress />;

  return (
    <Container maxWidth="xs" sx={{ mt: 4, justifyContent: 'center' }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <SpeciesSelect control={control} name="species" label="Species" fullWidth />
          <NatureSelect control={control} name="nature" label="Nature" vagabondClassRef={data.node} />
          <DrivesSelect control={control} name="drives" label="Drives" vagabondClassRef={data.node} />
          <RHFBackGroundTextAreaField
            control={control}
            name="demeanor"
            label="Demeanor"
            placeholder="intimidating, honest, brusque, open"
            rows={4}
            maxRows={4}
          />
          <RHFBackGroundTextAreaField
            control={control}
            name="details"
            label="Details"
            placeholder={detailPlaceholder}
            rows={4}
            maxRows={4}
          />
          <RHFBackGroundTextAreaField
            control={control}
            name="background_home"
            label="Where do you call home?"
            placeholder={homeBackgroundPlaceholder}
          />
          <RHFBackGroundTextAreaField
            control={control}
            name="background_vagabond"
            label="Why are you a vagabond?"
            placeholder={vagabondBackgroundPlaceholder}
          />
          <RHFBackGroundTextAreaField
            control={control}
            name="background_leftBehind"
            label="Whom have you left behind?"
            placeholder={leftBehindBackgroundPlaceholder}
          />
          <Stack direction="row" justifyContent="flex-end">
            <Button onClick={() => navigate('/vagabond-create')}>Back</Button>
            <Button type="submit" variant="contained">
              Next
            </Button>
          </Stack>
        </Stack>
      </form>
    </Container>
  );
}

function RHFBackGroundTextAreaField<T extends FieldValues>(props: RHFTextFieldProps<T>) {
  return <RHFTextField InputLabelProps={{ shrink: true }} multiline rows={6} maxRows={8} fullWidth {...props} />;
}

const detailPlaceholder = `- he, she, they, shifting
- large, scarred, well-groomed, old
- faded military insignia, eyepatch, repaired clothes, tarnished locket
`;

const homeBackgroundPlaceholder = `- the forest
- a place far from here`;

const vagabondBackgroundPlaceholder = `- I'm being hunted by a powerful official
- I wish to make up for a past transgression
- I want to fight injustice
- I must clear my tarnished name
- I have been exiled from most clearings`;

const leftBehindBackgroundPlaceholder = `- my peer and friend
- my family
- my loved one
- my ward
- my commander`;
