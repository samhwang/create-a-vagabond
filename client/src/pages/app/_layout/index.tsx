import { useAuth } from '@clerk/clerk-react'
import { AppBar, CircularProgress, styled, Toolbar, Typography } from '@mui/material';
import { Link, Navigate, Outlet } from 'react-router-dom';
import { UserMenuButton } from './UserMenu';

export function AppRoot() {
  const { isLoaded, isSignedIn } = useAuth()

  if (!isLoaded) return <CircularProgress />

  if (!isSignedIn) return <Navigate to="/auth" />;

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          {/* @ts-ignore */}
          <HomeTitle variant="h6" component={Link} to="/">
            Home
          </HomeTitle>
          <UserMenuButton />
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
}

const HomeTitle = styled(Typography)`
  flex-grow: 1;
  text-decoration: none;
  color: inherit;
`;
