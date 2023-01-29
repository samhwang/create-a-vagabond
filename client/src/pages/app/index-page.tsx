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
    <div className="flex justify-center">
      <div>
        <p>{data.me.email}</p>
      </div>
    </div>
  );
}

export default IndexPage;
