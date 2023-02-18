import { useAtomValue } from 'jotai';
import { useEffect, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { graphql, useFragment } from 'react-relay';
import { StatsMovesStepInput, statsMovesStepInputAtom } from '.';
import { RHFCheckboxField } from '../../../../components/RHF/RHFCheckboxField';
import { RHFCheckboxFieldItem } from '../../../../components/RHF/RHFCheckboxFieldItem';
import { RoguishFeatsField_class$key } from './__generated__/RoguishFeatsField_class.graphql';
import { RoguishFeatsField_query$key } from './__generated__/RoguishFeatsField_query.graphql';
import { RoguishFeatsField_useSyncFeats_class$key } from './__generated__/RoguishFeatsField_useSyncFeats_class.graphql';

type RoguishFeatsFieldProps = {
  queryRef: RoguishFeatsField_query$key;
  vagabondClassRef: RoguishFeatsField_class$key;
};

export function RoguishFeatsField({ queryRef, vagabondClassRef }: RoguishFeatsFieldProps) {
  const query = useFragment(
    graphql`
      fragment RoguishFeatsField_query on Query {
        roguishFeatConnection(first: 50) {
          edges {
            node {
              id
              name
              description
            }
          }
        }
      }
    `,
    queryRef
  );

  const vagabondClass = useFragment(
    graphql`
      fragment RoguishFeatsField_class on VagabondClass {
        name
        ...RoguishFeatsField_useSyncFeats_class
      }
    `,
    vagabondClassRef
  );

  const { control, watch } = useFormContext<StatsMovesStepInput>();
  const startingFeatIds = useSyncFeats(vagabondClass);
  const selectedFeatIds = watch('roguishFeats', []);
  const availableSelection = useAvailableSelection(vagabondClass.name);

  return (
    <RHFCheckboxField control={control} name="roguishFeats" label="Roguish Feats">
      {query.roguishFeatConnection.edges.map((edge) => {
        if (!edge?.node) return null;

        const disabled = getDisableState(edge.node.id, startingFeatIds, selectedFeatIds, availableSelection);

        return (
          <RHFCheckboxFieldItem
            key={edge.node.id}
            
            control={control}
            name="roguishFeats"

            label={edge.node.name}
            value={edge.node.id}
            helperText={edge.node.description}
            
            disabled={disabled}
          />
        );
      })}
    </RHFCheckboxField>
  );
}

function useSyncFeats(vagabondClassRef: RoguishFeatsField_useSyncFeats_class$key) {
  const { setValue } = useFormContext<StatsMovesStepInput>();

  const { roguishFeats } = useAtomValue(statsMovesStepInputAtom);

  const vagabondClass = useFragment(
    graphql`
      fragment RoguishFeatsField_useSyncFeats_class on VagabondClass {
        roguishFeatConnection(first: 50) {
          edges {
            node {
              id
            }
          }
        }
      }
    `,
    vagabondClassRef
  );
  const startingFeatsIds = vagabondClass.roguishFeatConnection.edges
    .filter((edge) => Boolean(edge?.node))
    .map((edge) => edge!.node.id);

  useEffect(() => {
    setValue('roguishFeats', roguishFeats.length ? roguishFeats : startingFeatsIds);
  }, [...roguishFeats, ...startingFeatsIds]);

  return startingFeatsIds;
}

const useAvailableSelection = (name: string) => {
  return useMemo(() => {
    if (name === 'arbiter') return 1;
    if (name === 'thief') return 4;
    return 0;
  }, [name]);
};

function getDisableState(
  featId: string,
  startingFeatIds: string[],
  selectedFeatIds: readonly string[],
  availableSelection = 0
) {
  const ableToSelectMore = selectedFeatIds.length - startingFeatIds.length < availableSelection;
  const isStartingFeat = startingFeatIds.includes(featId);

  if (ableToSelectMore) return isStartingFeat;

  if (!isStartingFeat) return !selectedFeatIds.includes(featId);

  return true;
}
