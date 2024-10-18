import { Box } from '@mui/material';
import { useState } from 'react';
import LoadingButton from '../../../../../../components/loading-button';
import { useSelector } from 'react-redux';
import { selectSelectedCompaniesIds } from '../../../../../../store/companies/selectors';

const SaveButton = () => {
  const [saving, setSaving] = useState(false);
  const selectedCompaniesIds = useSelector(selectSelectedCompaniesIds);

  const handleSave = () => {
    setSaving(true);
    setTimeout(() => {
      localStorage.setItem(
        'selectedCompaniesIds',
        JSON.stringify(selectedCompaniesIds)
      );
      setSaving(false);
    }, 3000);
  };
  return (
    <Box display="flex" justifyContent="end">
      <LoadingButton
        loading={saving}
        variant="contained"
        sx={{ mt: 4 }}
        onClick={handleSave}
      >
        Save
      </LoadingButton>
    </Box>
  );
};

export default SaveButton;
