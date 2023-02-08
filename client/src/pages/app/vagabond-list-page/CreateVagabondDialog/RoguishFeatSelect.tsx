import { MenuItem } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { graphql, useFragment } from 'react-relay';
import { RHFTextField, RHFTextFieldProps } from '../../../../components/RHF/RHFTextField';
import { VagabondCreateInput } from './__generated__/CreateVagabondDialogMutation.graphql';
import { RoguishFeatSelect_class$key } from './__generated__/RoguishFeatSelect_class.graphql';
import { RoguishFeatSelect_query$key } from './__generated__/RoguishFeatSelect_query.graphql';

type RoguishFeatSelect = RHFTextFieldProps<VagabondCreateInput> & {
  queryRef: RoguishFeatSelect_query$key;
  vagabondClassRef: RoguishFeatSelect_class$key;
};

export function RoguishFeatSelect({ queryRef, vagabondClassRef, ...props }: RoguishFeatSelect) {
  const { roguishFeatConnection } = useFragment(
    graphql`
      fragment RoguishFeatSelect_query on Query {
        roguishFeatConnection(first: 50) {
          edges {
            node {
              id
              name
            }
          }
        }
      }
    `,
    queryRef
  );

  const { roguishFeatConnection: startingRoguishFeatConnection } = useFragment(
    graphql`
      fragment RoguishFeatSelect_class on VagabondClass {
        roguishFeatConnection {
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
  const startingFeatsIds = startingRoguishFeatConnection.edges
    .filter((edge) => Boolean(edge?.node))
    .map((edge) => edge!.node.id);

  const { watch } = useFormContext<VagabondCreateInput>();
  const selectedFeatIds = watch('roguishFeats', []);

  return (
    <RHFTextField {...props} select SelectProps={{ multiple: true }}>
      {roguishFeatConnection.edges.map((edge) => {
        if (!edge) return null;

        const disabled = getDisableState(edge.node.id, startingFeatsIds, selectedFeatIds);
        return (
          <MenuItem key={edge.node.id} value={edge.node.id} disabled={disabled}>
            {edge.node.name}
          </MenuItem>
        );
      })}
    </RHFTextField>
  );
}

const availableSelection = 1;
function getDisableState(featId: string, startingFeatIds: string[], selectedFeatIds: readonly string[]) {
  const ableToSelectMore = selectedFeatIds.length - startingFeatIds.length < availableSelection;
  const isStartingFeat = startingFeatIds.includes(featId);

  if (ableToSelectMore) return isStartingFeat;

  if (!isStartingFeat) return !selectedFeatIds.includes(featId);

  return true;
}
