import { useState } from 'react';
import { graphql, useFragment, usePaginationFragment } from 'react-relay';
import { IconButton, List, ListSubheader, Paper, Typography } from '@mui/material';
import { Add } from '@mui/icons-material';
import { VagabondListPaginationQuery } from './__generated__/VagabondListPaginationQuery.graphql';
import { VagabondList_user$key } from './__generated__/VagabondList_user.graphql';
import { VagabondListItem } from './VagabondListItem';
import { CreateVagabondDialog } from './CreateVagabondDialog';
import { VagabondList_query$key } from './__generated__/VagabondList_query.graphql'

type VagabondListProps = {
  title?: string;
  userRef: VagabondList_user$key;
  queryRef: VagabondList_query$key
};

export function VagabondList({ title, userRef, queryRef }: VagabondListProps) {
  const query = useFragment(
    graphql`
      fragment VagabondList_query on Query {
        ...CreateVagabondDialog_query
      }
    `,
    queryRef
  )

  const { data } = usePaginationFragment<VagabondListPaginationQuery, VagabondList_user$key>(
    graphql`
      fragment VagabondList_user on User
      @refetchable(queryName: "VagabondListPaginationQuery")
      @argumentDefinitions(count: { type: "Int", defaultValue: 10 }, cursor: { type: "String" }) {
        vagabondConnection(first: $count, after: $cursor) @connection(key: "VagabondList_user_vagabondConnection") {
          __id
          edges {
            node {
              ...VagabondListItem_vagabond
            }
          }
        }
      }
    `,
    userRef
  );

  return (
    <Paper elevation={5}>
      <List
        subheader={
          <ListSubheader sx={{ display: 'flex', p: 2 }}>
            <Typography variant="h6">{title}</Typography>
            <div style={{ flexGrow: 1 }} />
            <CreateVagabondDialogButton
              connectionIds={[data.vagabondConnection.__id]}
              queryRef={query}
            />
          </ListSubheader>
        }
      >
        {data.vagabondConnection.edges.map((edge) => {
          if (!edge?.node) return null;
          return <VagabondListItem vagabondFragment={edge.node} />;
        })}
      </List>
    </Paper>
  );
}

type CreateVagabondDialogButtonProps = {
  connectionIds: string[]
  queryRef: any
}

function CreateVagabondDialogButton({ connectionIds, queryRef }: CreateVagabondDialogButtonProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <IconButton onClick={() => setOpen(true)}>
        <Add />
      </IconButton>
      <CreateVagabondDialog
        open={open}
        onClose={() => setOpen(false)}
        connectionIds={connectionIds}
        queryRef={queryRef}
      />
    </>
  );
}
