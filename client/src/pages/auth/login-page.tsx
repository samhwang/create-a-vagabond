import { useSetAtom } from 'jotai';
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom';
import { z } from 'zod'
import { Button } from '../../components/Button'
import { RHFTextField } from '../../components/RHF/RHFTextField'
import { jwtAtom } from '../../providers/auth';

const LoginInput = z.object({
  email: z.string().email(),
  password: z.string(),
})
type LoginInput = z.infer<typeof LoginInput>

export function LoginPage() {
  const setJwt = useSetAtom(jwtAtom);

  const { control, handleSubmit } = useForm<LoginInput>();
  const onSubmit: SubmitHandler<LoginInput> = data => {
    setJwt('logged in!')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="border-2 rounded border-slate-300 px-5 py-3">
      <p className='text-2xl font-bold text-center'>
        Sign in
      </p>
      <p className='text-md text-slate-500 text-center mb-2'>
        to your account
      </p>
      <hr className='mb-4' />
      
      <RHFTextField
        control={control}
        label='email'
        name='email'
        className='mb-2'
      />
      <RHFTextField
        control={control}
        label='password'
        name='password'
        type='password'
        className='mb-2'
      />

      <div className='mb-2'>
        <Link
          to="register"
          className='underline'
        >
          don't have an account?
        </Link>
      </div>

      <Button type="submit" className='w-full'>
        login
      </Button>
    </form>
  );
}
