import { useUser, UserButton, SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';

export function ClerkAuth() {
  return (
    <>
      <SignedIn>
        <Hello />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}

function Hello() {
  const { user } = useUser();

  return (
    <div>
      <UserButton />
      {user ? <h1>Hello, {user.firstName}!</h1> : null}
    </div>
  );
}
