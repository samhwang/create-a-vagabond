import { Typography } from '@mui/material';
import { graphql, useFragment } from 'react-relay';
import { BackgroundStepInput } from '.';
import { DrivesSelect_class$key } from './__generated__/DrivesSelect_class.graphql';
import { RHFCheckboxField, RHFCheckboxFieldProps } from "../../../../components/RHF/RHFCheckboxField";
import { RHFCheckboxFieldItem } from "../../../../components/RHF/RHFCheckboxFieldItem";

type DrivesSelectProps = RHFCheckboxFieldProps<BackgroundStepInput> & {
  vagabondClassRef: DrivesSelect_class$key;
};
export function DrivesSelect({ vagabondClassRef, ...props }: DrivesSelectProps) {
  const { driveConnection } = useFragment(
    graphql`
      fragment DrivesSelect_class on VagabondClass {
        driveConnection(first: 50) {
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
      {driveConnection.edges.map((edge) => {
        if (!edge?.node) return null;

        return (
          <RHFCheckboxFieldItem
            key={edge.node.id}
            control={props.control}
            name={props.name}
            label={edge.node.name}
            value={edge.node.id}
            helperText={edge.node.description}
            max={2}
          />
        )
      })}
    </RHFCheckboxField>
  );
}
