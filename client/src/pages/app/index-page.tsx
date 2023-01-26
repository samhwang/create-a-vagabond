import { useSetAtom } from 'jotai';
import { jwtAtom } from '../../providers/auth';
import { trpc } from '../../providers/trpc';

function IndexPage() {
  const { data: me } = trpc.user.me.useQuery();
  const setJwt = useSetAtom(jwtAtom);

  if (!me) {
    return (
      <div className="flex justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center">
      <p>{me}</p>
      <button type="button" onClick={() => setJwt(undefined)}>
        logout
      </button>
    </div>
  );
}

export default IndexPage;
