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
          __typename
          ... on QueryMeSuccess {
            data {
              id
              email
            }
          }
          ... on Error { message }
        }
      }
    `,
    {}
  )
  
  return (
    <div className="flex justify-center">
      <div>
        {data.me.__typename === 'Error' && (
          <p className='bg-red-400 text-white p-2 rounded'>
            {data.me.message}
          </p>
        )}
        {data.me.__typename === 'QueryMeSuccess' && <p>{data.me.data.email}</p>}
        <button type="button" onClick={() => setJwt(undefined)}>
          logout
        </button>
      </div>
    </div>
  );
}

export default IndexPage;
