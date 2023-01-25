import { atomWithStorage } from 'jotai/utils'

export const jwtAtom = atomWithStorage<string | undefined>('jwt', undefined)
