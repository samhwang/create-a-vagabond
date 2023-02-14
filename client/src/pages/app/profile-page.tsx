import { Container } from '@mui/material';
import { UserProfile } from '@clerk/clerk-react';

function ProfilePage() {
  return (
    <Container>
      <UserProfile />
    </Container>
  );
}

export default ProfilePage;
