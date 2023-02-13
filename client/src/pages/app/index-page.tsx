import { Container } from '@mui/material';
import { UserProfile } from '@clerk/clerk-react';
import { graphql, useLazyLoadQuery } from 'react-relay';
import { indexPageQuery } from './__generated__/indexPageQuery.graphql';

function IndexPage() {
  const data = useLazyLoadQuery<indexPageQuery>(
    graphql`
      query indexPageQuery {
        me {
          id
          email
        }
      }
    `,
    {}
  );

  return (
    <Container>
      <UserProfile />
    </Container>
  );
}

export default IndexPage;
