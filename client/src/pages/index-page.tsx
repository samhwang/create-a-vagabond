import { trpc } from '../providers/trpc';

function IndexPage() {
  const hello = trpc.user.me.useQuery();

  if (!hello.data) {
    return (
      <div className="flex justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center">
      <p>{hello.data}</p>
    </div>
  );
}

export default IndexPage;
