import { useSetAtom } from 'jotai';
import { jwtAtom } from '../../providers/auth';
import { graphql, useLazyLoadQuery } from 'react-relay'
import { indexPageQuery } from './__generated__/indexPageQuery.graphql'

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
  )
  
  return (
    <div className="flex justify-center">
      <div>
      <p>{data.me.email}</p>
        <button type="button" onClick={() => setJwt(undefined)}>
          logout
        </button>
      </div>
    </div>
  );
}

export default IndexPage;
