import { useSetAtom } from 'jotai';
import { graphql, useLazyLoadQuery } from 'react-relay';
import { jwtAtom } from '../../providers/auth';
import { indexPageQuery } from './__generated__/indexPageQuery.graphql';
import { PlusIcon } from '@heroicons/react/24/solid'

function IndexPage() {
  const setJwt = useSetAtom(jwtAtom);
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
