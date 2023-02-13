import { Container, Typography } from '@mui/material';
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
      <Typography>{data.me.email}</Typography>
    </Container>
  );
}

export default IndexPage;
