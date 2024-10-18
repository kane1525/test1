import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Box sx={{ textAlign: 'center', mt: 4 }}>
      <Typography variant="h4" color="error">
        404 - Page Not Found
      </Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Sorry, the page you are looking for does not exist.
      </Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        <Link to="/">Go back to Home</Link>
      </Typography>
    </Box>
  );
};

export default NotFound;
