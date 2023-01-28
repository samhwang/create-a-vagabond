import { Container, styled } from '@mui/material'
import { useAtomValue } from 'jotai';
import { Navigate, Outlet } from 'react-router-dom';
import { jwtAtom } from '../../providers/auth';

export function AuthLayout() {
  const jwt = useAtomValue(jwtAtom);

  if (jwt) return <Navigate to="/" />;

  return (
    <CenteredContainer>
      <Outlet />
    </CenteredContainer>
  );
}

const CenteredContainer = styled(Container)`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`
