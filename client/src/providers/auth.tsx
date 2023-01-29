import { ClerkProvider } from '@clerk/clerk-react';
import { ReactNode } from 'react';

const clerkPublicKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
export function AuthProvider({ children }: { children: ReactNode }) {
  return <ClerkProvider publishableKey={clerkPublicKey}>{children}</ClerkProvider>;
}
