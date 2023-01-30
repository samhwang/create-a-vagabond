import { graphql } from 'relay-runtime'
import { readFragment } from 'relay-runtime/lib/store/ResolverFragments'
import type { VagabondUsedPointsResolver$key } from './__generated__/VagabondUsedPointsResolver.graphql'

/**
 * @RelayResolver
 *
 * @onType Vagabond
 * @fieldName usedPoints
 * @rootFragment VagabondUsedPointsResolver
 *
 * usedPoints is sum of vagabond stats
 */
export default function vagabondUsedPointsResolver(ref: VagabondUsedPointsResolver$key): number {
  const vagabond = readFragment(
    graphql`
      fragment VagabondUsedPointsResolver on Vagabond {
        charm
        cunning
        finesse
        luck
        might
      }
    `,
    ref
  )

  return vagabond.charm + vagabond.cunning + vagabond.finesse + vagabond.luck + vagabond.might
}
