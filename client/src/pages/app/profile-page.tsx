import { Container } from '@mui/material';
import { UserProfile } from '@clerk/clerk-react';

export function ProfilePage() {
  return (
    <Container>
      <UserProfile />
    </Container>
  );
}
