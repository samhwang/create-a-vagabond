import { trpc } from './utils/trpc';

function IndexPage() {
  const hello = trpc.helloWorld.useQuery('Sam');

  if (!hello.data) {
    return <div className="flex justify-center">
      <p>Loading...</p>
    </div>;
  }

  return (
    <div className="flex justify-center">
      <p>{hello.data}</p>
    </div>
  );
}

export default IndexPage;
