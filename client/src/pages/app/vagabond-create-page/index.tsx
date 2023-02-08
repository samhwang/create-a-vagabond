import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Container, Stack, Step, StepLabel, Stepper } from '@mui/material'
import { atom, useAtomValue, useSetAtom } from 'jotai'
import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { RHFQuantityField } from '../../../components/RHF/RHFQuantityField'
import { RHFTextField } from '../../../components/RHF/RHFTextField'

export type Input = {
  class: string
  name: string
  charm: number
}

export function assertEqualType<T extends never>() {}
export type TypeEqualityGuard<A,B> = Exclude<A,B> | Exclude<B,A>;
assertEqualType<TypeEqualityGuard<Input, ClassStepInput & BackgroundStepInput & StatsStepInput>>()

const vagabondCreateInputAtom = atom<Input>({
  class: '',
  name: '',
  charm: 0,
})

export function VagabondCreatePage() {
  const location = useLocation()
  const [activeStep, setActiveStep] = useState(0)
  useEffect(() => {
    if (location.pathname === '/vagabond-create') setActiveStep(0)
    if (location.pathname === '/vagabond-create/background') setActiveStep(1)
    if (location.pathname === '/vagabond-create/stats') setActiveStep(2)
  }, [location.pathname])

  return (
    <Container maxWidth='lg' sx={{ mt: 4 }}>
      <Stepper activeStep={activeStep}>
        <Step>
          <StepLabel>Choose a class</StepLabel>
        </Step>
        <Step>
          <StepLabel>Background</StepLabel>
        </Step>
        <Step>
          <StepLabel>Stats and Moves</StepLabel>
        </Step>
      </Stepper>
      <Container maxWidth='xs' sx={{ mt: 4, justifyContent: 'center' }}>
        <Outlet />
      </Container>
    </Container>
  )
}

type ClassStepInput = {
  class: string
}
const ClassStepInputSchema: z.ZodType<ClassStepInput> = z.object({
  class: z.string(),
})
export const ClassStep = () => {
  const setInput = useSetAtom(vagabondCreateInputAtom)
  const navigate = useNavigate()
  const { control, handleSubmit } = useForm<ClassStepInput>({
    resolver: zodResolver(ClassStepInputSchema)
  })
  const onSubmit: SubmitHandler<ClassStepInput> = data => {
    setInput(pre => ({
      ...pre,
      ...data,
    }))
    navigate('/vagabond-create/background')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        <RHFTextField
          control={control}
          name='class'
          label='Class'
        />
        <Stack direction='row' justifyContent='flex-end'>
          <Button type='submit' variant='contained'>
            Next
          </Button>
        </Stack>
      </Stack>
    </form>
  )
}

type BackgroundStepInput = {
  name: string
}
const BackgroundStepInputSchema: z.ZodType<BackgroundStepInput> = z.object({
  name: z.string(),
})
export const BackgroundStep = () => {
  const setInput = useSetAtom(vagabondCreateInputAtom)
  const navigate = useNavigate()
  const { control, handleSubmit } = useForm<BackgroundStepInput>({
    resolver: zodResolver(BackgroundStepInputSchema)
  })
  const onSubmit: SubmitHandler<BackgroundStepInput> = data => {
    setInput(pre => ({
      ...pre,
      ...data,
    }))
    navigate('/vagabond-create/stats')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        <RHFTextField
          control={control}
          name='name'
          label='Name'
        />
        <Stack direction='row' justifyContent='flex-end'>
          <Button onClick={() => navigate('/vagabond-create')}>
            Back
          </Button>
          <Button type='submit' variant='contained'>
            Next
          </Button>
        </Stack>
      </Stack>
    </form>
  )
}

type StatsStepInput = {
  charm: number
}
const StatsStepInputSchema: z.ZodType<StatsStepInput> = z.object({
  charm: z.number(),
})
export const StatsStep = () => {
  const input = useAtomValue(vagabondCreateInputAtom)
  const navigate = useNavigate()
  const { control, handleSubmit } = useForm<StatsStepInput>({
    resolver: zodResolver(StatsStepInputSchema),
    defaultValues: { charm: 0 }
  })
  const onSubmit: SubmitHandler<StatsStepInput> = data => {
    const inputData = { ...input, ...data }
    console.log(inputData)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        <RHFQuantityField
          control={control}
          name='charm'
          label='Charm'
        />
        <Stack direction='row' justifyContent='flex-end'>
          <Button onClick={() => navigate('/vagabond-create/background')}>
            Back
          </Button>
          <Button type='submit' variant='contained'>
            Create
          </Button>
        </Stack>
      </Stack>
    </form>
  )
}
