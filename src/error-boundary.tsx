import { Box, Typography } from '@mui/material';
import { Link as RouterLink, useRouteError } from 'react-router-dom';
import Link from '@mui/material/Link';

interface RouteError {
  statusText?: string;
  message?: string;
}

const ErrorBoundary = () => {
  const error = useRouteError() as RouteError;

  return (
    <Box sx={{ textAlign: 'center', mt: 4 }}>
      <Typography variant="h4" color="error">
        Something went wrong
      </Typography>
      <Typography variant="body1">
        {error.message || 'An unexpected error occurred.'}
      </Typography>
      <Link component={RouterLink} to="/">
        Go Home
      </Link>
    </Box>
  );
};

export default ErrorBoundary;
