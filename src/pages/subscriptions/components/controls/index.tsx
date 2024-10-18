import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { Box, Button, Theme, useMediaQuery } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  applyActiveAvailableCompany,
  applyActiveSelectedCompany,
} from '../../../../store/companies';
import {
  selectActiveAvailableCompanyId,
  selectActiveSelectedCompanyId,
} from '../../../../store/companies/selectors';

const Controls = () => {
  const dispatch = useDispatch();

  const applyActiveAvailable = () => {
    dispatch(applyActiveAvailableCompany());
  };

  const applyActiveSelected = () => {
    dispatch(applyActiveSelectedCompany());
  };

  const activeAvailableCompanyId = useSelector(selectActiveAvailableCompanyId);
  const activeSelectedCompanyId = useSelector(selectActiveSelectedCompanyId);

  const isApplyAvailableDisabled = activeAvailableCompanyId === null;
  const isApplySelectedDisabled = activeSelectedCompanyId === null;

  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('md')
  );

  return (
    <Box display="flex" flexDirection="column" justifyContent="center">
      <Button
        variant="contained"
        onClick={applyActiveAvailable}
        disabled={isApplyAvailableDisabled}
      >
        <ArrowForward
          sx={{ transform: isSmallScreen ? 'rotate(90deg)' : 'rotate(0deg)' }}
        />
      </Button>
      <Button
        variant="contained"
        onClick={applyActiveSelected}
        disabled={isApplySelectedDisabled}
        sx={{ mt: 2 }}
      >
        <ArrowBack
          sx={{ transform: isSmallScreen ? 'rotate(90deg)' : 'rotate(0deg)' }}
        />
      </Button>
    </Box>
  );
};

export default Controls;
