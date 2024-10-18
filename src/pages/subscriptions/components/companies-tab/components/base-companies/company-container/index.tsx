import { Box, Theme, useMediaQuery } from '@mui/material';
import React from 'react';

const CompanyContainer = ({ children }: { children: React.ReactNode }) => {
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('md')
  );

  return (
    <Box flex={1} maxWidth={isSmallScreen ? '100%' : 350}>
      {children}
    </Box>
  );
};

export default CompanyContainer;
