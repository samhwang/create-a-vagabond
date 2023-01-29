import { useAuth } from '@clerk/clerk-react';
import { AppBar, CircularProgress, styled, Toolbar, Typography } from '@mui/material';
import { Suspense } from 'react';
import { graphql, useLazyLoadQuery } from 'react-relay';
import { Link, Navigate, Outlet } from 'react-router-dom';
import { UserMenuButton } from './UserMenu';
import { LayoutQuery } from './__generated__/LayoutQuery.graphql';

export function AppRoot() {
  const { isLoaded, isSignedIn } = useAuth();
  const data = useLazyLoadQuery<LayoutQuery>(
    graphql`
      query LayoutQuery {
        me {
          profile {
            profileImage
          }
        }
      }
    `,
    {}
  );

  if (!isLoaded) return <CircularProgress />;

  if (!isSignedIn) return <Navigate to="/auth" />;

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}
            component={Link}
            to="/"
          >
            Home
          </Typography>
          <UserMenuButton avatar={data.me.profile.profileImage} />
        </Toolbar>
      </AppBar>
      <Suspense fallback={<CircularProgress />}>
        <Outlet />
      </Suspense>
    </>
  );
}
