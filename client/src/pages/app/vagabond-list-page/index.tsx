import { Container } from '@mui/material';
import { graphql, useLazyLoadQuery } from 'react-relay';
import { VagabondList } from './VagabondList';
import { vagabondListPageQuery } from './__generated__/vagabondListPageQuery.graphql';

export function VagabondListPage() {
  const data = useLazyLoadQuery<vagabondListPageQuery>(
    graphql`
      query vagabondListPageQuery {
        me {
          id
          ...VagabondList_user
        }
        ...VagabondList_query
      }
    `,
    {}
  );

  return (
    <Container maxWidth="xs" sx={{ mt: 2 }}>
      <VagabondList title="Your vagabonds" userRef={data.me} queryRef={data} />
    </Container>
  );
}
