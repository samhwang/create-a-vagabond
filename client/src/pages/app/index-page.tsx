import { useSetAtom } from 'jotai';
import { graphql, useLazyLoadQuery } from 'react-relay';
import { Button } from '../../components/Button'
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
        
        <Button>
          button
        </Button>
        <Button color='error'>
          button
        </Button>
        <Button color='success'>
          button
        </Button>

        <Button startIcon={<PlusIcon />}>
          button
        </Button>
        <Button endIcon={<PlusIcon />}>
          button
        </Button>

        <Button loading>
          button
        </Button>
        <Button disabled>
          button
        </Button>
      </div>
    </div>
  );
}

export default IndexPage;
