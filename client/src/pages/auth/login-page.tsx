import { useSetAtom } from 'jotai';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { RHFTextField } from '../../components/RHF/RHFTextField';
import { jwtAtom } from '../../providers/auth';
import { Paper, Typography, Divider, Stack, Button } from '@mui/material'

const loginInput = z.object({
  email: z.string().email(),
  password: z.string(),
});
type LoginInput = z.infer<typeof loginInput>;

export function LoginPage() {
  const setJwt = useSetAtom(jwtAtom);

  const { control, handleSubmit } = useForm<LoginInput>({
    resolver: zodResolver(loginInput),
  });
  const onSubmit: SubmitHandler<LoginInput> = (data) => {
    setJwt('logged in!');
  };

  return (
    <Paper
      component='form'
      onSubmit={handleSubmit(onSubmit)}
      sx={{ px: 2.5, py: 1.5, pb: 3 }}
    >
      <Typography textAlign='center' variant='h4' sx={{ fontWeight: 600 }}>
        Sign in
      </Typography>
      <Typography textAlign='center' variant='subtitle1' color='GrayText' mb={2}>
        to your account
      </Typography>
      <Divider sx={{ mb: 4}} />

      <Stack spacing={2}>
        <RHFTextField control={control} label="email" name="email" />
        <RHFTextField control={control} label="password" name="password" type="password" />
        <Typography variant='subtitle1' component={Link} to="register">
          No account?
        </Typography>
        <div style={{ display: 'flex'}}>
          <div style={{ flexGrow: 1 }} />
          <Button variant='contained' type='submit'>
            login
          </Button>
        </div>
      </Stack>
    </Paper>
  );
}
