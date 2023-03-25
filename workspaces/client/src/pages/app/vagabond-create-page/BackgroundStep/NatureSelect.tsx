import { FormControlLabel, MenuItem, Radio, Typography } from '@mui/material';
import { graphql, useFragment } from 'react-relay';
import { BackgroundStepInput } from '.';
import { NatureSelect_class$key } from './__generated__/NatureSelect_class.graphql';
import { RHFCheckboxField, RHFCheckboxFieldProps } from '../../../../components/RHF/RHFCheckboxField';
import { RHFCheckboxFieldItem } from '../../../../components/RHF/RHFCheckboxFieldItem';
import { RHFRadioGroupField } from "../../../../components/RHF/RHFRadioGroupField";

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
    <RHFRadioGroupField {...props}>
      {natureConnection.edges.map((edge) => {
        if (!edge?.node) return null;

        return (
          <>
            <FormControlLabel
              key={edge.node.id}
              label={edge.node.name} value={edge.node.id}
              control={<Radio />}
            />
            <Typography ml={4} variant="subtitle2" color="GrayText">
              {edge.node.description}
            </Typography>
          </>
        )
      })}
    </RHFRadioGroupField>
  );
}
