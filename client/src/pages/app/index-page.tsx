import { useSetAtom } from 'jotai';
import { jwtAtom } from '../../providers/auth';
import { graphql, useLazyLoadQuery } from 'react-relay'
import { indexPageQuery } from './__generated__/indexPageQuery.graphql'

function IndexPage() {
  const setJwt = useSetAtom(jwtAtom);
  const data = useLazyLoadQuery<indexPageQuery>(
    graphql`
      query indexPageQuery {
        hello(name: "You") {
          __typename
          ... on QueryHelloSuccess { data }
          ... on Error { message }
        }
      }
    `,
    {}
  )
  
  return (
    <div className="flex justify-center">
      <div>
        {data.hello.__typename === 'Error' && (
          <p className='bg-red-400 text-white p-2 rounded'>
            data.hello.message
          </p>
        )}
        {data.hello.__typename === 'QueryHelloSuccess' && <p>data.hello.data</p>}
        <button type="button" onClick={() => setJwt(undefined)}>
          logout
        </button>
      </div>
    </div>
  );
}

export default IndexPage;
