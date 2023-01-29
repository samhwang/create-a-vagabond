import { useUser, UserButton, SignedIn, SignedOut, RedirectToSignIn, useAuth } from '@clerk/clerk-react';

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
    <div className="App-header">
      <UserButton />
      {user ? <h1>Hello, {user.firstName}!</h1> : null}
    </div>
  );
}
