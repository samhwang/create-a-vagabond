import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Container, Stack, Step, StepLabel, Stepper, Typography } from '@mui/material'
import { atom, useAtom, useAtomValue, useSetAtom } from 'jotai'
import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { RHFQuantityField } from '../../../components/RHF/RHFQuantityField'
import { RHFTextField } from '../../../components/RHF/RHFTextField'
import { atomWithStorage } from 'jotai/utils'

export type Input = {
  class: string
  name: string
  charm: number
}

export function assertEqualType<T extends never>() {}
export type TypeEqualityGuard<A,B> = Exclude<A,B> | Exclude<B,A>;
assertEqualType<TypeEqualityGuard<Input, ClassStepInput & BackgroundStepInput & StatsStepInput>>()

export const vagabondCreateInputAtom = atom<Input>(
  get => {
    const classStepData = get(classStepInputAtom)
    const backgroundStepData = get(backgroundStepInputAtom)
    const statsStepData = get(statsStepInputAtom)

    return {
      ...classStepData,
      ...backgroundStepData,
      ...statsStepData,
    }
  }
)
export const resetVagabondCreateInputAtom = atom(
  null,
  (get, set, update) => {
    set(classStepInputAtom, { class: '' })
    set(backgroundStepInputAtom, { name: '' })
    set(statsStepInputAtom, { charm: 0 })
  }
)

export function VagabondCreatePage() {
  const location = useLocation()
  const [activeStep, setActiveStep] = useState(0)
  useEffect(() => {
    if (location.pathname === '/vagabond-create') setActiveStep(0)
    if (location.pathname === '/vagabond-create/background') setActiveStep(1)
    if (location.pathname === '/vagabond-create/stats') setActiveStep(2)
    if (location.pathname === '/vagabond-create/review') setActiveStep(3)
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
          <StepLabel>Stats</StepLabel>
        </Step>
        <Step>
          <StepLabel>Review</StepLabel>
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
export const classStepInputAtom = atomWithStorage<ClassStepInput>('classStep', { class: '' })
export const ClassStep = () => {
  const [input, setInput] = useAtom(classStepInputAtom)
  const navigate = useNavigate()
  const { control, handleSubmit, setValue } = useForm<ClassStepInput>({
    defaultValues: input,
    resolver: zodResolver(ClassStepInputSchema)
  })
  useSyncDefaultInput(
    input,
    (key, value) => setValue(key, value)
  )

  const onSubmit: SubmitHandler<ClassStepInput> = data => {
    setInput(data)
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
export const backgroundStepInputAtom = atomWithStorage<BackgroundStepInput>('backgroundStep', { name: '' })
export const BackgroundStep = () => {
  const [input, setInput] = useAtom(backgroundStepInputAtom)
  const navigate = useNavigate()
  const { control, handleSubmit, setValue } = useForm<BackgroundStepInput>({
    defaultValues: input,
    resolver: zodResolver(BackgroundStepInputSchema)
  })
  useSyncDefaultInput(
    input,
    (key, value) => setValue(key, value)
  )

  const onSubmit: SubmitHandler<BackgroundStepInput> = data => {
    setInput(data)
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
export const statsStepInputAtom = atomWithStorage<StatsStepInput>('statsStep', { charm: 0 })
export const StatsStep = () => {
  const [input, setInput] = useAtom(statsStepInputAtom)
  const navigate = useNavigate()
  const { control, handleSubmit, setValue } = useForm<StatsStepInput>({
    defaultValues: input,
    resolver: zodResolver(StatsStepInputSchema),
  })
  useSyncDefaultInput(
    input,
    (key, value) => setValue(key, value)
  )

  const onSubmit: SubmitHandler<StatsStepInput> = data => {
    setInput(data)
    navigate('/vagabond-create/review')
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
            Next
          </Button>
        </Stack>
      </Stack>
    </form>
  )
}

export const ReviewStep = () => {
  const navigate = useNavigate()
  const input = useAtomValue(vagabondCreateInputAtom)
  const reset = useSetAtom(resetVagabondCreateInputAtom)

  return (
    <Stack spacing={2}>
      <Typography>{JSON.stringify(input)}</Typography>
      <Stack direction='row' justifyContent='flex-end'>
        <Button onClick={reset}>
          Reset
        </Button>
        <Button onClick={() => navigate('/vagabond-create/stats')}>
          Back
        </Button>
        <Button type='submit' variant='contained'>
          Create
        </Button>
      </Stack>
    </Stack>
  )
}

// use in case where atomWithStorage which return empty '' before load actual value from storage
// otherwise use useForm({ defaultValues })
const useSyncDefaultInput = (input: any, onValue: (key: any, value: any) => void) => {
  useEffect(() => {
    Object.entries(input).forEach(([key, value]) => {
      onValue(key as any, value)
    })
  }, [...Object.values(input)])
}
