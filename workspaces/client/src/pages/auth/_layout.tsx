import { useAuth } from '@clerk/clerk-react';
import { CircularProgress, Container, styled } from '@mui/material';
import { Navigate, Outlet } from 'react-router-dom';

export function AuthLayout() {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) return <CircularProgress />;

  if (isSignedIn) return <Navigate to="/app" />;

  return (
    <Container
      sx={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Outlet />
    </Container>
  );
}
