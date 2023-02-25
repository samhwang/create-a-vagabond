import { MenuItem, Typography } from '@mui/material';
import { graphql, useFragment } from 'react-relay';
import { BackgroundStepInput } from '.';
import { NatureSelect_class$key } from './__generated__/NatureSelect_class.graphql';
import { RHFCheckboxField, RHFCheckboxFieldProps } from '../../../../components/RHF/RHFCheckboxField';
import { RHFCheckboxFieldItem } from '../../../../components/RHF/RHFCheckboxFieldItem';

type NatureSelectProps = RHFCheckboxFieldProps<BackgroundStepInput> & {
  vagabondClassRef: NatureSelect_class$key;
};

export function NatureSelect({ vagabondClassRef, ...props }: NatureSelectProps) {
  const { natureConnection } = useFragment(
    graphql`
      fragment NatureSelect_class on VagabondClass {
        natureConnection(first: 50) {
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
    vagabondClassRef
  );

  return (
    <RHFCheckboxField {...props}>
      {natureConnection.edges.map((edge) => {
        if (!edge?.node) return null;

        return (
          <RHFCheckboxFieldItem
            key={edge.node.id}
            control={props.control}
            name={props.name}
            label={edge.node.name}
            value={edge.node.id}
            helperText={edge.node.description}
          />
        );
      })}
    </RHFCheckboxField>
  );
}
