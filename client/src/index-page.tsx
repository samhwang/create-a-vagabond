import { trpc } from './utils/trpc';

function IndexPage() {
  const hello = trpc.helloWorld.useQuery('Sam');

  if (!hello.data) return <div>Loading...</div>;

  return (
    <div>
      <p>{hello.data}</p>
    </div>
  );
}

export default IndexPage;
