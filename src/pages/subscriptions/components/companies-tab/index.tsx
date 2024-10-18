import { useEffect } from 'react';
import {
  Box,
  Typography,
  useMediaQuery,
  Theme,
  CircularProgress,
} from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import { fetchAvailableCompanies } from '../../../../store/companies/thunks';
import {
  selectCompaniesError,
  selectCompaniesLoading,
} from '../../../../store/companies/selectors';
import { AppDispatch } from '../../../../store';
import Controls from '../controls';
import AvailableCompanies from './components/available-companies';
import SelectedCompanies from './components/selected-companies';
import SaveButton from './components/save-button';

const CompaniesTab = () => {
  const dispatch = useDispatch<AppDispatch>();

  const loading = useSelector(selectCompaniesLoading);
  const error = useSelector(selectCompaniesError);

  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('md')
  );

  useEffect(() => {
    dispatch(fetchAvailableCompanies());
  }, [dispatch]);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: '50vh' }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" sx={{ minHeight: '50vh' }}>
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ minHeight: '50vh' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold' }} my={2}>
        Select Companies to Track
      </Typography>
      <Typography variant="body1" mb={4}>
        To follow a Company, select it in the left panel and click →. To
        unfollow a Company, select it in the right panel and click ← Then click
        "Save" to apply your changes.
      </Typography>
      <Typography variant="body1">
        Use search fields to easily find a required Company.
      </Typography>
      <Box
        display="flex"
        mt={4}
        gap={4}
        flexDirection={isSmallScreen ? 'column' : 'row'}
      >
        <AvailableCompanies />
        <Controls />
        <SelectedCompanies />
      </Box>
      <SaveButton />
    </Box>
  );
};

export default CompaniesTab;
