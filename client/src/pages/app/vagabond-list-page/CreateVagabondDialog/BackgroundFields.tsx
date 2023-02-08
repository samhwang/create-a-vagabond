import { Stack } from '@mui/material';
import { FieldValues, useFormContext } from 'react-hook-form';
import { RHFTextField, RHFTextFieldProps } from '../../../../components/RHF/RHFTextField';
import { VagabondCreateInput } from './__generated__/CreateVagabondDialogMutation.graphql';

type BackgroundFieldsProps = {};

export function BackgroundFields(_props: BackgroundFieldsProps) {
  const { control } = useFormContext<VagabondCreateInput>();

  return (
    <>
      <Stack direction="row" spacing={2}>
        <RHFBackGroundTextAreaField control={control} name="details" label="Details" placeholder={detailPlaceholder} />
        <RHFBackGroundTextAreaField
          control={control}
          name="demeanor"
          label="Demeanor"
          placeholder="intimidating, honest, brusque, open"
        />
      </Stack>
      <Stack direction="row" spacing={2}>
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
      </Stack>
    </>
  );
}

function RHFBackGroundTextAreaField<T extends FieldValues>(props: RHFTextFieldProps<T>) {
  return <RHFTextField InputLabelProps={{ shrink: true }} multiline rows={3} maxRows={3} fullWidth {...props} />;
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
