import { AppBar, Container, Button, Toolbar, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

export function HomePage() {
  const navigate = useNavigate();

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
        </Toolbar>
      </AppBar>
      <Container>
        <Typography variant="h1">Create a Vagabond</Typography>
        <Typography variant="h4">A supplementary tool for the Root RPG</Typography>
        <Button
          variant="contained"
          size="large"
          onClick={() => {
            navigate('/auth');
          }}
        >
          Sign in
        </Button>
      </Container>
    </>
  );
}
