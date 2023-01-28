import { useSetAtom } from 'jotai';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '../../components/Button';
import { RHFTextField } from '../../components/RHF/RHFTextField';
import { jwtAtom } from '../../providers/auth';

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
    <form onSubmit={handleSubmit(onSubmit)} className="border-2 bg-slate-100 rounded border-slate-300 px-5 py-3">
      <p className="text-2xl font-bold text-center">Sign in</p>
      <p className="text-md text-slate-500 text-center mb-2">to your account</p>
      <hr className="mb-4" />

      <RHFTextField control={control} label="email" name="email" />
      <RHFTextField control={control} label="password" name="password" type="password" />

      <div className="mb-2">
        <Link to="register" className="underline">
          Don&apos;t have an account yet?
        </Link>
      </div>

      <div className='flex'>
        <div className='grow' />
        <Button type="submit">
          login
        </Button>
      </div>
    </form>
  );
}
