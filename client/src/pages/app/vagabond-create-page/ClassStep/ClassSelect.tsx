import { Avatar, ListItemAvatar, ListItemText, MenuItem } from '@mui/material';
import { FieldValues } from 'react-hook-form';
import { graphql, usePaginationFragment } from 'react-relay';
import { RHFTextField, RHFTextFieldProps } from '../../../../components/RHF/RHFTextField';
import { ClassSelectPaginationQuery } from './__generated__/ClassSelectPaginationQuery.graphql';
import { ClassSelect_query$key } from './__generated__/ClassSelect_query.graphql'

import { vagabondClassImages } from './classes'

type ClassSelectProps<T extends FieldValues> = Omit<RHFTextFieldProps<T>, 'select'> & {
  queryRef: ClassSelect_query$key;
};

export const ClassSelect = <T extends FieldValues>({ queryRef, ...props }: ClassSelectProps<T>) => {
  const { data } = usePaginationFragment<ClassSelectPaginationQuery, ClassSelect_query$key>(
    graphql`
      fragment ClassSelect_query on Query
      @refetchable(queryName: "ClassSelectPaginationQuery")
      @argumentDefinitions(count: { type: "Int", defaultValue: 50 }, cursor: { type: "String" }) {
        vagabondClassConnection(first: $count, after: $cursor)
          @connection(key: "ClassSelect_query_vagabondClassConnection") {
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

  return (
    <RHFTextField
      {...props}
      select
      SelectProps={{ sx: {
        '& > .MuiSelect-select': {
          display: 'flex'
        }
      }}}
    >
      {data.vagabondClassConnection.edges.map((edge) => {
        if (!edge?.node) return;

        return (
          <MenuItem key={edge.node.id} value={edge.node.id}>
            <ListItemAvatar>
              <Avatar
                src={vagabondClassImages[edge.node.name]}
                alt={edge.node.name}
              />
            </ListItemAvatar>
            <ListItemText primary={edge.node.name} />
          </MenuItem>
        );
      })}
    </RHFTextField>
  )
}
