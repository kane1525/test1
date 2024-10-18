import { TextField } from '@mui/material';
import { useDebouncedCallback } from 'use-debounce';

interface CompanySearchInputProps {
  label: string;
  onChange: (value: string) => void;
}
const CompanySearchInput = ({ label, onChange }: CompanySearchInputProps) => {
  const debounced = useDebouncedCallback((value) => {
    onChange(value);
  }, 700);

  return (
    <TextField
      fullWidth
      label={label}
      variant="outlined"
      onChange={(e) => {
        debounced(e.target.value);
      }}
      sx={{ mb: 2 }}
    />
  );
};

export default CompanySearchInput;
