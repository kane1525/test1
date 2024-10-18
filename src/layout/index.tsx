import { Outlet } from 'react-router-dom';
import { Typography, Box, Container, Paper } from '@mui/material';
import ResponsiveAppBar from './components/AppBar';

const Layout = () => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <ResponsiveAppBar />

      <Box component="main" flexGrow={1} py={4}>
        <Container>
          <Outlet />
        </Container>
      </Box>

      {/* Footer */}
      <Paper
        component="footer"
        square
        sx={{ padding: 2, mt: 'auto', textAlign: 'center' }}
      >
        <Typography variant="body1">
          © 2024 My App. All rights reserved.
        </Typography>
      </Paper>
    </Box>
  );
};

export default Layout;
