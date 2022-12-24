import { trpc } from '../providers/trpc';

function IndexPage() {
  const { data: me } = trpc.user.me.useQuery();

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
    </div>
  );
}

export default IndexPage;
