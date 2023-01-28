import { AppBar, styled, Toolbar, Typography } from '@mui/material'
import { useAtomValue } from 'jotai';
import { Link, Navigate, Outlet } from 'react-router-dom';
import { jwtAtom } from '../../../providers/auth';
import { UserMenuButton } from './UserMenu'

export function AppRoot() {
  const jwt = useAtomValue(jwtAtom);
  if (!jwt) return <Navigate to="/auth" />;

  return (
    <>
      <AppBar position='sticky'>
        <Toolbar>
          {/* @ts-ignore */}
          <HomeTitle variant="h6" component={Link} to='/'>
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
`
