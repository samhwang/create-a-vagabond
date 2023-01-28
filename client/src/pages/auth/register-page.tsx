import { useSetAtom } from 'jotai';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { RHFTextField } from '../../components/RHF/RHFTextField';
import { jwtAtom } from '../../providers/auth';
import { Button, Divider, Paper, Stack, Typography } from '@mui/material'

const registerInput = z.object({
  email: z.string().email(),
  password: z.string(),
});
type RegisterInput = z.infer<typeof registerInput>;

export function RegisterPage() {
  const setJwt = useSetAtom(jwtAtom);

  const { control, handleSubmit } = useForm<RegisterInput>({
    resolver: zodResolver(registerInput),
  });
  const onSubmit: SubmitHandler<RegisterInput> = (data) => {
    setJwt('logged in!');
  };

  return (
    <Paper
      component='form'
      onSubmit={handleSubmit(onSubmit)}
      sx={{ px: 2.5, py: 1.5, pb: 3 }}
    >
      <Typography textAlign='center' variant='h4' sx={{ fontWeight: 600 }}>
        Create
      </Typography>
      <Typography textAlign='center' variant='subtitle1' color='GrayText' mb={2}>
        your new account
      </Typography>
      <Divider sx={{ mb: 4}} />

      <Stack spacing={2}>
        <RHFTextField control={control} label="email" name="email" />
        <RHFTextField control={control} label="password" name="password" type="password" />
        <Link to="/auth" className="underline">
          login instead
        </Link>
        <div style={{ display: 'flex'}}>
          <div style={{ flexGrow: 1 }} />
          <Button variant='contained' type="submit">
            Continue
          </Button>
        </div>
      </Stack>
    </Paper>
  );
}
