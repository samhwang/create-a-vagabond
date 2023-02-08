import { useFormContext } from 'react-hook-form';
import { graphql, useFragment } from 'react-relay';
import { VagabondCreateInput } from './__generated__/CreateVagabondDialogMutation.graphql';
import { useStartingPointLeft_class$key } from './__generated__/useStartingPointLeft_class.graphql';

const startingPoint = 1;

// calculate the left over available points
export function useStartingPointLeft(vagabondClassRef?: useStartingPointLeft_class$key | null) {
  const vagabondClass = useFragment(
    graphql`
      fragment useStartingPointLeft_class on VagabondClass {
        startingCharm
        startingCunning
        startingFinesse
        startingLuck
        startingMight
      }
    `,
    vagabondClassRef!
  );

  const { watch } = useFormContext<VagabondCreateInput>();
  const [charm, cunning, finesse, luck, might] = watch(['charm', 'cunning', 'finesse', 'luck', 'might']);

  if (!vagabondClass) return 0;

  return (
    startingPoint -
    charm +
    (vagabondClass.startingCharm || 0) -
    cunning +
    (vagabondClass.startingCunning || 0) -
    finesse +
    (vagabondClass.startingFinesse || 0) -
    luck +
    (vagabondClass.startingLuck || 0) -
    might +
    (vagabondClass.startingMight || 0)
  );
}
